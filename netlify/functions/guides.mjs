// Email-gated downloads for the free HPAN Pass guides.
// POST /api/guides {email,name} -> {ok,token}.  GET /api/guides?f=athlete|parent|planner&t=TOKEN -> the PDF.
// Uses the same ASSISTANT_SECRET env var as the assistant to sign tokens. The PDFs are bundled in guides-data.mjs (generated at build).
import crypto from 'node:crypto';
import { GUIDES } from './guides-data.mjs';
const FILES = { welcome: 'HPAN-Welcome-Guide.pdf', planner: 'HPAN-Athlete-Planner-Pack.pdf', athlete: 'HPAN-Athlete-Guide.pdf', parent: 'HPAN-Parent-Guide.pdf' };
const DAYS = 180;
const hits = new Map();
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const sign = (p) => crypto.createHmac('sha256', process.env.ASSISTANT_SECRET || '').update(p).digest('base64url');
const emailOk = (e) => typeof e === 'string' && e.length <= 160 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
function makeToken(email) {
  const p = Buffer.from(JSON.stringify({ k: 'guides', e: email.toLowerCase(), x: Date.now() + DAYS * 864e5 })).toString('base64url');
  return p + '.' + sign(p);
}
function valid(t) {
  if (typeof t !== 'string' || !t.includes('.')) return false;
  const [p, s] = t.split('.');
  const good = sign(p);
  if (!s || s.length !== good.length || !crypto.timingSafeEqual(Buffer.from(s), Buffer.from(good))) return false;
  try { const o = JSON.parse(Buffer.from(p, 'base64url').toString()); return o.k === 'guides' && o.x > Date.now(); } catch { return false; }
}
const page = (msg) => new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HPAN</title><body style="font-family:Arial,sans-serif;background:#080D14;color:#EDF1F6;display:grid;place-items:center;min-height:100vh;text-align:center;padding:24px"><div><h1>' + msg + '</h1><p><a style="color:#6AAAFF" href="/how-it-works/?join=Free">Sign up free for the HPAN Pass</a> to download the guides.</p></div>', { status: 401, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
export default async (req) => {
  if (!process.env.ASSISTANT_SECRET) return json({ error: 'not_configured' }, 503);
  if (req.method === 'POST') {
    let b; try { b = await req.json(); } catch { return json({ error: 'bad_request' }, 400); }
    if (!emailOk(b.email)) return json({ error: 'bad_email' }, 400);
    const k = b.email.toLowerCase(), now = Date.now(), arr = (hits.get(k) || []).filter((t) => now - t < 36e5);
    if (arr.length >= 20) return json({ error: 'rate_limited' }, 429);
    arr.push(now); hits.set(k, arr);
    return json({ ok: true, token: makeToken(b.email) });
  }
  if (req.method !== 'GET') return json({ error: 'method_not_allowed' }, 405);
  const u = new URL(req.url), f = u.searchParams.get('f'), t = u.searchParams.get('t');
  if (!FILES[f]) return json({ error: 'not_found' }, 404);
  if (!valid(t)) return page('Please sign in first');
  return new Response(Buffer.from(GUIDES[f], 'base64'), { status: 200, headers: { 'content-type': 'application/pdf', 'content-disposition': 'attachment; filename="' + FILES[f] + '"', 'cache-control': 'private, no-store' } });
};
export const config = { path: '/api/guides' };
