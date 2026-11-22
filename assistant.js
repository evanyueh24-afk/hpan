(function(){
  if(window.__hpanAsst)return;window.__hpanAsst=1;
  var API='/api/assistant',FORM='https://formspree.io/f/mljgqlwd',MAIL='highperformanceathletenetwork@gmail.com';
  var KEY='hpan_asst_v1',tok='',nm='',msgs=[],busy=false;
  try{var s=JSON.parse(localStorage.getItem(KEY)||'null');if(s&&s.t){tok=s.t;nm=s.n||'';}}catch(e){}
  function save(){try{localStorage.setItem(KEY,JSON.stringify({t:tok,n:nm}));}catch(e){}}
  function clear(){tok='';try{localStorage.removeItem(KEY);}catch(e){}}
  var css='#ha-btn{position:fixed;right:18px;bottom:76px;z-index:90;background:var(--accent,#1F6FEB);color:#fff;border:0;border-radius:999px;padding:14px 22px;font:700 16px Inter,system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.35)}'
  +'#ha-btn:hover{filter:brightness(1.08)}'
  +'#ha{position:fixed;right:18px;bottom:136px;z-index:91;width:380px;max-width:calc(100vw - 24px);height:560px;max-height:calc(100vh - 160px);display:none;flex-direction:column;background:var(--surface,#101923);color:var(--fg,#EDF1F6);border:1px solid var(--line,#1E2B3A);border-radius:22px;box-shadow:0 20px 60px rgba(0,0,0,.45);overflow:hidden;font:15px/1.45 Inter,system-ui,sans-serif}'
  +'#ha.on{display:flex}#ha *{box-sizing:border-box}'
  +'#ha .hd{padding:14px 16px;border-bottom:1px solid var(--line,#1E2B3A);display:flex;justify-content:space-between;align-items:center}#ha .hd b{font-size:16px}#ha .hd small{display:block;color:var(--muted,#97A5B6);font-size:12px}'
  +'#ha .x{background:none;border:0;color:inherit;font-size:22px;cursor:pointer;padding:4px 8px}'
  +'#ha .bd{flex:1;overflow:auto;padding:14px 16px}'
  +'#ha .m{max-width:88%;padding:10px 13px;border-radius:16px;margin:0 0 10px;white-space:pre-wrap;word-wrap:break-word}'
  +'#ha .m.a{background:var(--surface-2,#16212E);border-bottom-left-radius:4px}#ha .m.u{background:var(--accent,#1F6FEB);color:#fff;margin-left:auto;border-bottom-right-radius:4px}'
  +'#ha .ft{padding:10px 12px;border-top:1px solid var(--line,#1E2B3A);display:flex;gap:8px}'
  +'#ha input,#ha select,#ha textarea{width:100%;padding:11px 12px;border-radius:12px;border:1px solid var(--line,#1E2B3A);background:var(--bg,#080D14);color:var(--fg,#EDF1F6);font:inherit;margin:4px 0 10px}'
  +'#ha .ft input{margin:0}#ha button.go{background:var(--accent,#1F6FEB);color:#fff;border:0;border-radius:12px;padding:0 16px;font:700 15px inherit;cursor:pointer;min-height:44px}#ha button.go:disabled{opacity:.5}'
  +'#ha label{display:block;font-size:13px;color:var(--muted,#97A5B6)}#ha label.ck{display:flex;gap:9px;align-items:flex-start;margin:6px 0 10px;color:var(--fg,#EDF1F6)}#ha label.ck input{width:auto;margin:3px 0 0}'
  +'#ha .note{font-size:12px;color:var(--muted,#97A5B6);margin:6px 0 0}#ha .err{color:#ff8a8a;font-size:13px;margin:4px 0 8px}#ha a{color:var(--accent-text,#6AAAFF)}';
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var btn=document.createElement('button');btn.id='ha-btn';btn.type='button';btn.textContent='Ask HPAN';btn.setAttribute('aria-expanded','false');
  var box=document.createElement('div');box.id='ha';box.setAttribute('role','dialog');box.setAttribute('aria-label','HPAN assistant');
  document.body.appendChild(btn);document.body.appendChild(box);
  function esc(t){return String(t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function open(on){box.classList.toggle('on',on);btn.setAttribute('aria-expanded',on?'true':'false');btn.textContent=on?'Close':'Ask HPAN';if(on)render();}
  btn.onclick=function(){open(!box.classList.contains('on'));};
  function head(){return '<div class="hd"><div><b>HPAN assistant</b><small>AI assistant, not a person. General information only.</small></div><button class="x" type="button" aria-label="Close" id="ha-x">×</button></div>';}
  function render(){tok?chatView():regView();var x=document.getElementById('ha-x');if(x)x.onclick=function(){open(false);};}
  function regView(){
    box.innerHTML=head()+'<div class="bd"><p style="margin:0 0 10px">Ask questions about HPAN, coaching and how it works. Register your email to start. It takes a few seconds.</p>'
    +'<form id="ha-f" novalidate><label>Your name<input id="ha-n" autocomplete="given-name" maxlength="80"></label>'
    +'<label>Your email<input id="ha-e" type="email" autocomplete="email" maxlength="160"></label>'
    +'<label>I am<select id="ha-r"><option value="parent">A parent or guardian</option><option value="adult">An athlete aged 18 or over</option><option value="minor">An athlete under 18</option></select></label>'
    +'<label id="ha-pw" style="display:none">Parent or guardian email<input id="ha-p" type="email" maxlength="160"></label>'
    +'<label class="ck"><input id="ha-a" type="checkbox"><span>I agree to the <a href="/terms/" target="_blank">Terms</a> and <a href="/privacy/" target="_blank">Privacy Policy</a>, and understand this is an AI assistant, not medical advice.</span></label>'
    +'<label class="ck"><input id="ha-m" type="checkbox"><span>Optional: email me HPAN tips and offers. I can unsubscribe any time.</span></label>'
    +'<input id="ha-h" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;opacity:0">'
    +'<div class="err" id="ha-err" role="alert"></div><button class="go" id="ha-go" type="submit" style="width:100%">Start chatting</button></form>'
    +'<p class="note">Please do not share personal details in the chat. Your email is sent to the HPAN team. Under 18? Ask a parent or guardian to help.</p></div>';
    var r=document.getElementById('ha-r');r.onchange=function(){document.getElementById('ha-pw').style.display=r.value==='minor'?'block':'none';};
    document.getElementById('ha-f').onsubmit=function(ev){ev.preventDefault();reg();};
  }
  function v(i){return(document.getElementById(i)||{}).value||'';}
  function reg(){
    var err=document.getElementById('ha-err'),go=document.getElementById('ha-go');err.textContent='';
    var d={action:'register',name:v('ha-n').trim(),email:v('ha-e').trim(),role:v('ha-r'),parentEmail:v('ha-p').trim(),agree:document.getElementById('ha-a').checked,hp:v('ha-h')};
    if(!d.name){err.textContent='Please enter your name.';return;}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)){err.textContent='Please enter a valid email.';return;}
    if(d.role==='minor'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.parentEmail)){err.textContent='Please enter a parent or guardian email.';return;}
    if(!d.agree){err.textContent='Please tick the agreement box.';return;}
    go.disabled=true;go.textContent='Starting...';
    fetch(API,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(d)}).then(function(r){return r.json().then(function(j){return{ok:r.ok,j:j};});}).then(function(o){
      if(!o.ok||!o.j.token){go.disabled=false;go.textContent='Start chatting';err.innerHTML=esc(o.j&&o.j.error&&o.j.error!=='not_configured'?o.j.error:'The assistant is not available right now.')+' You can <a href="/contact/">contact us</a> or email '+MAIL+' or WhatsApp 0490 100 755.';return;}
      tok=o.j.token;nm=d.name;save();
      var roles={parent:'Parent or guardian',adult:'Athlete 18 or over',minor:'Athlete under 18'};
      try{fetch(FORM,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:d.name,email:d.email,_replyto:d.email,plan:'Assistant sign-up',role:roles[d.role],parent_email:d.parentEmail||'',marketing_opt_in:document.getElementById('ha-m').checked?'YES':'no',message:'HPAN assistant registration: '+d.name+' ('+roles[d.role]+')'+(d.parentEmail?' Parent: '+d.parentEmail:'')+'. Marketing opt-in: '+(document.getElementById('ha-m').checked?'YES':'no')+'.',_subject:'HPAN assistant sign-up'})});}catch(e){}
      msgs=[{role:'assistant',content:'Hi '+nm+'! I’m the HPAN assistant, an AI. Ask me about coaches, plans, how lessons work or safety. I can’t give medical advice.'}];render();
    }).catch(function(){go.disabled=false;go.textContent='Start chatting';err.innerHTML='The assistant is not available right now. You can <a href="/contact/">contact us</a> or email '+MAIL+' or WhatsApp 0490 100 755.';});
  }
  function chatView(){
    if(!msgs.length)msgs=[{role:'assistant',content:'Welcome back'+(nm?', '+nm:'')+'! Ask me about HPAN coaches, plans, how lessons work or safety. I can’t give medical advice.'}];
    box.innerHTML=head()+'<div class="bd" id="ha-bd"></div><div class="ft"><input id="ha-i" maxlength="600" placeholder="Type your question" aria-label="Your question"><button class="go" id="ha-s" type="button">Send</button></div>';
    paint();var i=document.getElementById('ha-i'),s=document.getElementById('ha-s');
    s.onclick=send;i.onkeydown=function(e){if(e.key==='Enter')send();};setTimeout(function(){i.focus();},50);
  }
  function paint(extra){var bd=document.getElementById('ha-bd');if(!bd)return;
    bd.innerHTML=msgs.map(function(m){return '<div class="m '+(m.role==='user'?'u':'a')+'">'+esc(m.content)+'</div>';}).join('')+(extra?'<div class="m a">'+extra+'</div>':'')+'<p class="note">AI assistant. General information only, not medical advice. Please do not share personal details. For anything else, <a href="/contact/">contact us</a>.</p>';bd.scrollTop=bd.scrollHeight;}
  function send(){
    var i=document.getElementById('ha-i'),t=(i.value||'').trim();if(!t||busy)return;
    busy=true;i.value='';msgs.push({role:'user',content:t});paint('Thinking...');
    fetch(API,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action:'chat',token:tok,messages:msgs})}).then(function(r){return r.json().then(function(j){return{s:r.status,j:j};});}).then(function(o){
      busy=false;
      if(o.s===401){clear();msgs=[];render();return;}
      msgs.push({role:'assistant',content:o.j.reply||o.j.error||'Sorry, something went wrong. Please contact us.'});paint();
    }).catch(function(){busy=false;msgs.push({role:'assistant',content:'Sorry, I could not connect. Please try again, or email '+MAIL+' or WhatsApp 0490 100 755.'});paint();});
  }
})();
