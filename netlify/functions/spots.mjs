// Counts paid Pro bookings per weekly slot so the site can show "spots left".
// A $90 trial (9000) holds a slot like a full pack; the later $810 payment is not counted, so nobody is counted twice.
// Needs ONE Netlify env var: STRIPE_RESTRICTED_KEY (a read-only restricted key). Never put it in the site code.
let cache = { t: 0, body: null };
const WINDOW_DAYS = 112; // a Pro pack runs 16 weeks, so a booking holds its slot that long
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
export default async () => {
  const key = process.env.STRIPE_RESTRICTED_KEY;
  if (!key) return json({ ok: false, counts: {}, reason: 'no_key' });
  if (cache.body && Date.now() - cache.t < 60000) return json(cache.body);
  try {
    const since = Math.floor(Date.now() / 1000) - WINDOW_DAYS * 86400;
    const counts = {};
    let after = '', pages = 0;
    while (pages++ < 5) {
      const u = 'https://api.stripe.com/v1/checkout/sessions?limit=100&created[gte]=' + since + '&expand[]=data.payment_intent.latest_charge' + (after ? '&starting_after=' + after : '');
      const r = await fetch(u, { headers: { Authorization: 'Bearer ' + key } });
      if (!r.ok) throw new Error('stripe ' + r.status);
      const d = await r.json();
      for (const s of d.data) {
        if (s.mode !== 'payment' || s.payment_status !== 'paid' || (s.amount_total !== 90000 && s.amount_total !== 9000) || !s.client_reference_id) continue;
        const ch = s.payment_intent && s.payment_intent.latest_charge;
        if (ch && (ch.refunded || ch.amount_refunded > 0)) continue; // refunded = spot freed
        const k = String(s.client_reference_id).split('_')[0];
        counts[k] = (counts[k] || 0) + 1;
      }
      if (!d.has_more) break;
      after = d.data[d.data.length - 1].id;
    }
    cache = { t: Date.now(), body: { ok: true, counts } };
    return json(cache.body);
  } catch (e) {
    return json({ ok: false, counts: {}, reason: 'error' });
  }
};
export const config = { path: '/api/spots' };
