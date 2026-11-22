(function(){
  if(window.__hpanJoin)return;window.__hpanJoin=1;
  var FORM='https://formspree.io/f/mljgqlwd',LEAGUE='https://buy.stripe.com/aFabJ21Br5NO8U8b6K1wY08',PAY={Pro:'https://buy.stripe.com/3cI6oIa7X1xy1rG8YC1wY02',Premium:'https://buy.stripe.com/9B68wQ0xn5NO9YccaO1wY03'},TRIAL='https://buy.stripe.com/6oU8wQ7ZP3FGgmA7Uy1wY06',WA='https://wa.me/61490100755?text=Hi%20HPAN%2C%20I%27d%20like%20to%20ask%20about%20joining.';
  // ---- EDIT THESE when coach availabilities are ready -------------------------------------
  // Each slot: {coach:'Ethan',sport:'Swimming',day:'Monday',time:'4pm-5pm',left:6}  (left:0 shows "Class full")
  var SLOTS=[
    {coach:'Evan',sport:['Swimming','Gym'],day:'Monday',time:'5-6pm',left:10},
    {coach:'Evan',sport:['Swimming','Gym'],day:'Wednesday',time:'8-9pm',left:10},
    {coach:'Evan',sport:['Swimming','Gym'],day:'Thursday',time:'4:30-5:30pm',left:10},
    {coach:'Evan',sport:['Swimming','Gym'],day:'Friday',time:'5-6pm',left:10},
    {coach:'Evan',sport:['Swimming','Gym'],day:'Saturday',time:'4-5pm',left:10},
    {coach:'Evan',sport:['Swimming','Gym'],day:'Sunday',time:'5-6pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Tuesday',time:'4-5pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Tuesday',time:'5-6pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Tuesday',time:'6-7pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Tuesday',time:'7-8pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Thursday',time:'4-5pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Thursday',time:'5-6pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Thursday',time:'6-7pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Thursday',time:'7-8pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Friday',time:'4-5pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Friday',time:'5-6pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Friday',time:'6-7pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Friday',time:'7-8pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Sunday',time:'4-5pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Sunday',time:'5-6pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Sunday',time:'6-7pm',left:10},
    {coach:'Dylan',sport:['Sprinting'],day:'Sunday',time:'7-8pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Monday',time:'4-5pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Monday',time:'5-6pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Monday',time:'6-7pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Monday',time:'7-8pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Tuesday',time:'4-5pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Tuesday',time:'5-6pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Tuesday',time:'6-7pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Tuesday',time:'7-8pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Wednesday',time:'4-5pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Wednesday',time:'5-6pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Wednesday',time:'6-7pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Wednesday',time:'7-8pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Thursday',time:'4-5pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Thursday',time:'5-6pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Thursday',time:'6-7pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Thursday',time:'7-8pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Friday',time:'4-5pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Friday',time:'5-6pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Friday',time:'6-7pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Friday',time:'7-8pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Saturday',time:'4-5pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Saturday',time:'5-6pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Saturday',time:'6-7pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Saturday',time:'7-8pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Sunday',time:'4-5pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Sunday',time:'5-6pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Sunday',time:'6-7pm',left:10},
    {coach:'William',sport:['Volleyball'],day:'Sunday',time:'7-8pm',left:10},
    {coach:'Ryan',sport:['Water polo','Gym'],day:'Tuesday',time:'6:30-7:30pm',left:10},
    {coach:'Ryan',sport:['Water polo','Gym'],day:'Tuesday',time:'7:30-8:30pm',left:10},
    {coach:'Ryan',sport:['Water polo','Gym'],day:'Tuesday',time:'8:30-9:30pm',left:10},
    {coach:'Ryan',sport:['Water polo','Gym'],day:'Thursday',time:'6:30-7:30pm',left:10},
    {coach:'Ryan',sport:['Water polo','Gym'],day:'Thursday',time:'7:30-8:30pm',left:10},
    {coach:'Ryan',sport:['Water polo','Gym'],day:'Thursday',time:'8:30-9:30pm',left:10},
    {coach:'Dan',sport:['Swimming'],day:'Tuesday',time:'4-5pm',left:10},
    {coach:'Dan',sport:['Swimming'],day:'Thursday',time:'4-5pm',left:10},
    {coach:'Dan',sport:['Swimming'],day:'Saturday',time:'4-5pm',left:10},
    {coach:'Dan',sport:['Swimming'],day:'Sunday',time:'4-5pm',left:10},
    {coach:'Ethan',sport:['Swimming'],day:'Saturday',time:'3-4pm',left:10},
    {coach:'Ethan',sport:['Swimming'],day:'Sunday',time:'3-4pm',left:10},
    {coach:'Alex',sport:['Basketball'],day:'Thursday',time:'8-9pm',left:10},
    {coach:'Alex',sport:['Basketball'],day:'Friday',time:'8-9pm',left:10},
    {coach:'Alex',sport:['Basketball'],day:'Saturday',time:'8-9pm',left:10},
    {coach:'Alex',sport:['Basketball'],day:'Sunday',time:'8-9pm',left:10},
    {coach:'Matthew',sport:['Soccer'],day:'Monday',time:'4-5pm',left:10},
    {coach:'Matthew',sport:['Soccer'],day:'Monday',time:'5-6pm',left:10},
    {coach:'Matthew',sport:['Soccer'],day:'Monday',time:'6-7pm',left:10},
    {coach:'Matthew',sport:['Soccer'],day:'Wednesday',time:'6-7pm',left:10},
    {coach:'Matthew',sport:['Soccer'],day:'Wednesday',time:'7-8pm',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Saturday',time:'10-11am',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Saturday',time:'11am-12pm',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Saturday',time:'12-1pm',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Saturday',time:'1-2pm',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Sunday',time:'10-11am',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Sunday',time:'11am-12pm',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Sunday',time:'12-1pm',left:10},
    {coach:'Miles',sport:['Tennis'],day:'Sunday',time:'1-2pm',left:10}
  ];
  // ------------------------------------------------------------------------------------------
  var COACHES=[{n:'Evan',s:['Swimming','Gym'],c:'National finalist'},{n:'Ethan',s:['Swimming'],c:'State and national champion'},{n:'Dylan',s:['Sprinting'],c:'State and national champion'},{n:'Alex',s:['Basketball'],c:'State and national player'},{n:'Ryan',s:['Water polo','Gym'],c:'Australian youth squad'},{n:'William',s:['Volleyball'],c:'State and national player'},{n:'Dan',s:['Swimming'],c:'S9 Para-swimmer'},{n:'Matthew',s:['Soccer'],c:'NPL 1 midfielder'},{n:'Max',s:['Soccer'],c:'NSW representative'},{n:'Miles',s:['Tennis'],c:'ITF tennis player'}];
  var SPORTS=['Swimming','Sprinting','Basketball','Volleyball','Soccer','Tennis','Gym','Water polo'];
  var PLANS=[
    {k:'Free',n:'Free guides',d:'Free planners and guides.'},
    {k:'League',n:'HPAN League',d:'1-year membership: resources, updates and community. $90 paid once.',tag:'1-year pass'},
    {k:'Pro',n:'HPAN Pro',d:'10 online group lessons. $90 an hour, $900 for 10'},
    {k:'Group',n:'Private Group',d:'Train with your mates. Extremely limited spots. Enquire to apply.'},
    {k:'Premium',n:'1 on 1 coaching',d:'Just you and your coach. Extremely limited spots. Enquire to apply.'},
    {k:'Competition',n:'Competition Program',d:'Coming soon. Register interest.',soon:1}
  ];
  var NOTES={
    Free:['Free. No card needed.','Enter your name and email to unlock the Welcome Guide, Athlete Guide, Parent Guide and printable Planner Pack.','We only send tips and updates if you tick the box.'],
    League:['$90 once for 12 months, by card through Stripe. It does not renew automatically.','A playbook for your sport, the Mindset Workbook, a journal, a monthly pack, a weekly update, a members\u2019 group and guides for major events.','Includes the free guides and a first look at open lesson spots.'],
    Pro:['$90 per one-hour online group lesson, as a pack of 10 ($900), in groups of up to 10.','Pick your coach and a weekly time. If it is full, we place you with another coach in your sport and tell you first.','Pay by card when you book. We confirm your group and start date within 1 business day, or refund you in full.','Use within 16 weeks. Missed lessons are not refunded. If we cancel, we make it up or refund it.','Under 18? Please book with a parent or guardian.','Each of the 10 lessons is different: video analysis of technique, mindset and confidence, nutrition and recovery habits, goals and season planning, and competition preparation.','You also get a WhatsApp group with your coach, the athletes and parents, to stay in touch between lessons.','Before your first lesson, a parent or guardian completes a short registration, health and consent form. We send you the link.'],
    Premium:['Extremely limited spots. 1 on 1 coaching is sold as a pack of 10 one-hour lessons.','Send an enquiry. We reply with availability and pricing, agree your times by message, then send a secure payment link.','You only pay once your price and times are confirmed in writing.','Under 18? We speak with a parent or guardian first, and the lesson link goes to them.','Fully customised to the athlete: their goals, technique and mindset.','You also get a chat with your coach and parents between lessons.','Before your first lesson, a parent or guardian completes a short registration, health and consent form. We send you the link.'],
    Group:['Extremely limited spots. A private group is sold as a 10-lesson pack, per athlete.','Minimum 2 athletes, up to 10, with a coach in your sport. Tell us your group size, ages and preferred days and times.','Send an enquiry. We reply with availability and pricing, confirm the coach and times with you by message, then send a secure payment link. You only pay once the price and times are confirmed in writing.','Under 18? We speak with a parent or guardian first, and the lesson link goes to them.','Each of the 10 lessons is different: coaching, mentoring, mindset, technical analysis and habits, plus a WhatsApp group with your coach, the athletes and parents.','Before your first lesson, a parent or guardian completes a short registration, health and consent form. We send you the link.'],
    Competition:['An intensive prep block before your big meet, game or season.','Details and dates are still to come. Register your interest and we will contact you first.']
  };
  function ENQ(){return S.plan==='Premium'||S.plan==='Group';}
  var S,root,card,last,COUNTS={},TK='hpan_pass_v1';
  function getTok(){try{return localStorage.getItem(TK)||'';}catch(e){return '';}}
  function setTok(t){try{localStorage.setItem(TK,t);}catch(e){}}
  var GF={welcome:'Welcome Guide',athlete:'Athlete Guide',parent:'Parent Guide',planner:'Planner Pack'};
  function key(x){return (x.coach+'-'+x.day+' '+x.time).replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'');}
  function left(x){return Math.max(0,x.left-(COUNTS[key(x)]||0));}
  function loadCounts(cb){try{fetch('/api/spots',{cache:'no-store'}).then(function(r){return r.json();}).then(function(d){COUNTS=(d&&d.counts)||{};cb&&cb();}).catch(function(){cb&&cb();});}catch(e){cb&&cb();}}
  function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  var css='#hj{position:fixed;inset:0;z-index:120;display:none;align-items:center;justify-content:center;padding:14px;background:rgba(4,8,14,.62);backdrop-filter:blur(4px)}#hj.on{display:flex}'
  +'#hj .cd{width:560px;max-width:100%;max-height:calc(100vh - 28px);overflow:auto;background:var(--surface,#101923);color:var(--fg,#EDF1F6);border:1px solid var(--line,#1E2B3A);border-radius:28px;padding:26px 26px 24px;font:16px/1.45 Inter,system-ui,sans-serif;box-shadow:0 30px 80px rgba(0,0,0,.5)}#hj *{box-sizing:border-box}'
  +'#hj .tp{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;min-height:28px}#hj .bk{background:none;border:0;color:var(--muted,#97A5B6);font:600 15px inherit;cursor:pointer;padding:4px 0}'
  +'#hj .pg{display:flex;align-items:center;gap:10px;font:700 14px Inter;color:var(--accent-text,#6AAAFF)}#hj .bar{width:90px;height:8px;border-radius:8px;background:var(--surface-2,#16212E);overflow:hidden}#hj .bar i{display:block;height:100%;background:var(--accent,#1F6FEB);border-radius:8px}'
  +'#hj .x{background:none;border:0;color:inherit;font-size:26px;line-height:1;cursor:pointer;padding:2px 6px;margin-left:6px}'
  +'#hj h2{font:800 40px/1 var(--display,Inter);text-transform:uppercase;margin:0 0 6px}#hj .sub{color:var(--muted,#97A5B6);margin:0 0 16px}'
  +'#hj .opt{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;text-align:left;background:var(--bg,#080D14);color:inherit;border:1px solid var(--line,#1E2B3A);border-radius:20px;padding:16px 18px;margin:0 0 10px;cursor:pointer;font:inherit}'
  +'#hj .opt:hover:not([disabled]){border-color:var(--accent,#1F6FEB)}#hj .opt b{display:block;font:800 22px/1.1 var(--display,Inter);text-transform:uppercase}#hj .opt span{color:var(--muted,#97A5B6);font-size:15px}#hj .opt em{font-style:normal;font:700 11px Inter;letter-spacing:.08em;text-transform:uppercase;background:var(--accent,#1F6FEB);color:#fff;border-radius:20px;padding:4px 9px;white-space:nowrap}'
  +'#hj .opt.soon{opacity:.75;border-style:dashed}#hj .opt.sel{border-color:var(--accent,#1F6FEB);box-shadow:0 0 0 2px var(--accent,#1F6FEB) inset}#hj .opt[disabled]{opacity:.5;cursor:not-allowed}'
  +'#hj ul{margin:0 0 16px;padding-left:20px;display:grid;gap:8px}#hj .go{display:block;width:100%;text-align:center;background:var(--accent,#1F6FEB);color:#fff;border:0;border-radius:40px;padding:15px 20px;font:700 17px Inter;cursor:pointer;text-decoration:none;margin-top:8px}#hj .go:disabled{opacity:.55}#hj .gh{background:none;border:1px solid var(--line,#1E2B3A);color:inherit}'
  +'#hj label{display:block;font-size:13px;color:var(--muted,#97A5B6);margin:0 0 10px}#hj input,#hj select,#hj textarea{width:100%;padding:12px;border-radius:12px;border:1px solid var(--line,#1E2B3A);background:var(--bg,#080D14);color:var(--fg,#EDF1F6);font:16px inherit;margin-top:4px}#hj textarea{min-height:70px}'
  +'#hj label.ck{display:flex;gap:9px;align-items:flex-start;color:var(--fg,#EDF1F6);font-size:14px}#hj label.ck input{width:18px;height:18px;flex:none;margin:1px 0 0}#hj label.ck{font-weight:400}#hj .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
  +'#hj .err{color:#ff8a8a;font-size:14px;margin:4px 0}#hj .note{font-size:13px;color:var(--muted,#97A5B6);margin:10px 0 0}#hj a{color:var(--accent-text,#6AAAFF)}#hj .sl{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;border:1px solid var(--line,#1E2B3A);border-radius:16px;margin-bottom:8px;background:var(--bg,#080D14)}'
  +'#hj .sl button{background:var(--accent,#1F6FEB);color:#fff;border:0;border-radius:30px;padding:8px 16px;font:700 14px Inter;cursor:pointer}#hj .sl button[disabled]{background:#444;cursor:not-allowed}'
  +'#hj .dy{display:grid;grid-template-columns:92px 1fr;gap:8px;align-items:start;margin:0 0 10px;font-size:14px}#hj .dy>b{padding-top:8px}#hj .fb{color:var(--muted,#97A5B6);padding-top:8px;opacity:.75}#hj .chs{display:flex;flex-wrap:wrap;gap:6px}#hj .ch{display:flex;flex-direction:column;gap:1px;align-items:flex-start;padding:7px 10px;border-radius:12px;border:1px solid var(--line,#1E2B3A);background:var(--bg,#080D14);color:inherit;font:inherit;text-align:left;min-width:92px;cursor:pointer}#hj .ch b{font:700 13px Inter}#hj .ch i{font-style:normal;font-size:11px;color:var(--muted,#97A5B6)}#hj .ch.off{opacity:.45;cursor:not-allowed}#hj button.ch:hover:not([disabled]){border-color:var(--accent,#1F6FEB)}#hj button.ch[disabled]{opacity:.5;cursor:not-allowed}#hj .ch.on{border-color:var(--accent,#1F6FEB);background:var(--accent,#1F6FEB);color:#fff}#hj .ch.on i{color:#fff}'
  +'@media(max-width:520px){#hj .dy{grid-template-columns:92px 1fr;font-size:13px}#hj .cd{padding:20px 18px;border-radius:22px}#hj h2{font-size:34px}#hj .two{grid-template-columns:1fr}}';
  function boot(){
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    root=document.createElement('div');root.id='hj';root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Join HPAN');
    root.innerHTML='<div class="cd" id="hj-cd"></div>';document.body.appendChild(root);card=document.getElementById('hj-cd');
    root.addEventListener('mousedown',function(e){if(e.target===root)close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&root.classList.contains('on'))close();});
    document.addEventListener('click',function(e){var g=e.target.closest&&e.target.closest('[data-guide]');if(g){e.preventDefault();var t=getTok();if(t){location.href='/api/guides?f='+g.getAttribute('data-guide')+'&t='+encodeURIComponent(t);}else{open('Free');}return;}var a=e.target.closest&&e.target.closest('[data-join]');if(!a)return;e.preventDefault();open(a.getAttribute('data-join'),a.getAttribute('data-coach'));});
    loadCounts();
    if(/[?&]join\b/.test(location.search)){var m=location.search.match(/[?&]join=([A-Za-z]+)/);open(m?m[1]:'');}
  }
  function open(plan,coach){
    last=document.activeElement;
    S={enq:0,plan:'',step:'plan',sport:'',coach:'',slot:'',who:'parent'};
    var ok=PLANS.filter(function(p){return p.k===plan;})[0];
    if(ok){S.plan=ok.k;S.step='notes';if(ok.k==='Free'&&getTok()){S.tok=getTok();S.step='done';S.back=1;}}
    if(coach){var c=COACHES.filter(function(x){return x.n===coach;})[0];if(c){S.coach=c.n;S.sport=c.s[0];}}
    root.classList.add('on');document.body.style.overflow='hidden';render();
  }
  function close(){root.classList.remove('on');document.body.style.overflow='';if(last&&last.focus)try{last.focus();}catch(e){}}
  function flow(){return S.plan==='Free'?['plan','notes','details','done']:S.plan==='League'?['plan','notes','details','pay']:ENQ()?['plan','notes','coach','details','done']:S.plan==='Pro'?(S.enq?['plan','notes','coach','details','done']:['plan','notes','coach','details','pay']):S.plan==='Competition'?['plan','notes','details','done']:['plan','notes','coach','details'];}
  function top(back){
    var f=flow(),i=f.indexOf(S.step),total=(S.plan?f.filter(function(x){return x!=='done';}).length:4),n=Math.min(i+1,total);
    return '<div class="tp"><div>'+(back?'<button class="bk" data-a="back">‹ Back</button>':'')+'</div><div class="pg">'+(S.step==='done'?'':'Step '+n+' / '+total+' <span class="bar"><i style="width:'+Math.round(n/total*100)+'%"></i></span>')+'<button class="x" data-a="close" aria-label="Close">×</button></div></div>';
  }
  function go(step){S.step=step;render();}
  function back(){var f=flow(),i=f.indexOf(S.step);if(i<=0){close();return;}go(f[i-1]);}
  function render(){
    var h='';
    if(S.step==='plan'){
      var pick=PLANS.filter(function(p){return p.k==='Pro'||p.k==='Group'||p.k==='Premium'||(p.k==='League'&&!S.coach);});
      h=top(false)+(S.coach?'<h2>Train with '+esc(S.coach)+'</h2><p class="sub">Pick how you want to train.</p>':'<h2>Join HPAN</h2><p class="sub">Pick how you want to train.</p>')+pick.map(function(p){return '<button class="opt'+(p.soon?' soon':'')+'" data-a="plan" data-k="'+p.k+'"><div><b>'+esc(p.n)+'</b><span>'+esc(p.d)+'</span></div>'+(p.tag?'<em>'+p.tag+'</em>':'<span>›</span>')+'</button>';}).join('');
    }else if(S.step==='notes'){
      var pl=PLANS.filter(function(p){return p.k===S.plan;})[0];
      h=top(true)+'<h2>'+esc(pl.n)+'</h2><p class="sub">Important things to note</p><ul>'+NOTES[S.plan].map(function(n){return '<li>'+esc(n)+'</li>';}).join('')+'</ul><p class="note" style="margin:0 0 6px">Questions? <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp 0490 100 755</a> or email highperformanceathletenetwork@gmail.com.</p><button class="go" data-a="next">'+(ENQ()?'Enquire':'Continue')+'</button>';
    }else if(S.step==='coach'){
      var sp=S.sport||'';
      h=top(true)+'<h2>Choose your coach</h2><p class="sub">Pick your sport and a preferred coach. If they are full, we place you with another coach in your sport.</p>'
        +'<label>Sport<select id="hj-sport"><option value="">Select a sport</option>'+SPORTS.map(function(x){return '<option'+(x===sp?' selected':'')+'>'+x+'</option>';}).join('')+'</select></label><div id="hj-co"></div><div class="err" id="hj-err"></div><button class="go" data-a="next">Continue</button>';
    }else if(S.step==='details'){
      var pass=S.plan==='Free',paid=!pass,bk=(S.plan==='Pro'||S.plan==='Premium'||S.plan==='Group'||S.plan==='League'),prepay=((S.plan==='Pro'&&!S.enq)||S.plan==='League');
      if(bk){
        h=top(true)+'<h2>'+(S.plan==='League'?'Membership details':prepay?'Booking details':'Your details')+'</h2><p class="sub">'+(prepay?'Fill these in, then you pay securely on Stripe.':'We reply within one business day, usually sooner.')+'</p><form id="hj-f" novalidate>'
         +'<p class="note" style="margin:0 0 4px"><b>About the athlete</b></p>'
         +'<div class="two"><label>Athlete full name<input id="hj-an" autocomplete="off" maxlength="80"></label><label>Age<input id="hj-age" type="number" inputmode="numeric" min="3" max="99"></label></div>'
         +(S.plan==='League'?'<label>Main sport<select id="hj-sp"><option value="">Choose a sport</option>'+SPORTS.concat(['Other']).map(function(x){return '<option>'+x+'</option>';}).join('')+'</select></label>':'<label>Sport<input id="hj-sp" value="'+esc(S.sport)+'" readonly></label>')
         +'<div class="two"><label>Athlete email ('+(S.plan==='League'?'required':'required if 13 or over')+')<input id="hj-ae" type="email" maxlength="160"></label><label>Athlete mobile (required if 13 or over)<input id="hj-am" type="tel" inputmode="tel" placeholder="04xx xxx xxx"></label></div>'
         +'<p class="note" style="margin:8px 0 4px"><b>About the parent or guardian</b> (optional if the athlete is 18 or over)</p>'
         +'<label>Parent or guardian full name<input id="hj-pnm" autocomplete="name" maxlength="80"></label>'
         +'<div class="two"><label>Parent email<input id="hj-pem" type="email" autocomplete="email" maxlength="160"></label><label>Parent mobile<input id="hj-pmb" type="tel" inputmode="tel" placeholder="04xx xxx xxx"></label></div>'
         +'<label>Second parent mobile (optional)<input id="hj-pm2" type="tel" inputmode="tel" placeholder="04xx xxx xxx"></label>'
         +'<div class="two"><label>Level<select id="hj-lv"><option>Just starting out</option><option>Club</option><option>State</option><option>National</option></select></label><span></span></div><label>Anything we should know?<textarea id="hj-nt" maxlength="600" placeholder="Goals, injuries, classification or access needs. Please do not put detailed health information here."></textarea></label>'
         +(S.plan==='Group'?'<div class="two"><label>Number of athletes<select id="hj-gs"><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select></label><label>Preferred days and times<input id="hj-pt" maxlength="120" placeholder="e.g. Sundays 4-6pm"></label></div><label>Friends\' names (optional)<input id="hj-fn" maxlength="200"></label>':'')
         +'<label class="ck"><input id="hj-ag1" type="checkbox"><span>I agree to the <a href="/terms/" target="_blank">Terms</a>, <a href="/privacy/" target="_blank">Privacy Policy</a> and <a href="/child-safe-policy/" target="_blank">Child Safe Policy</a>.</span></label>'
         +'<label class="ck"><input id="hj-mk" type="checkbox"><span>Optional: email me HPAN tips and offers. I can unsubscribe any time.</span></label>'
         +'<input id="hj-hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;opacity:0"><div class="err" id="hj-err" role="alert"></div><button class="go" type="submit" id="hj-go">'+(prepay?'Continue to payment':'Send enquiry')+'</button></form>';
      }else
      h=top(true)+'<h2>'+(pass?'Get your guides':'Your details')+'</h2><p class="sub">'+(pass?'Where should we send updates? Your guides and Planner Pack unlock right after.':'We reply within one business day, usually sooner.')+'</p><form id="hj-f" novalidate>'
       +'<label>I am<select id="hj-who"><option value="parent">A parent or guardian</option><option value="adult">An athlete aged 18 or over</option><option value="minor">An athlete under 18</option></select></label>'
       +'<div class="two"><label>Your name<input id="hj-n" autocomplete="name" maxlength="80"></label><label>Your email<input id="hj-e" type="email" autocomplete="email" maxlength="160"></label></div>'
       +'<label id="hj-pw" style="display:none">Parent or guardian email<input id="hj-pe" type="email" maxlength="160"></label>'
       +'<label>Mobile'+(paid?' (required)':' (optional)')+'<input id="hj-m" type="tel" inputmode="tel" placeholder="04xx xxx xxx"></label>'
       +(paid?'<div class="two"><label>Athlete first name<input id="hj-a" maxlength="60"></label><label>Age group<select id="hj-ag"><option>Primary school</option><option>High school</option><option>18 or over</option></select></label></div><label>Level<select id="hj-lv"><option>Just starting out</option><option>Club</option><option>State</option><option>National</option></select></label><label>Anything we should know?<textarea id="hj-nt" maxlength="600" placeholder="Goals, injuries, classification or access needs"></textarea></label>':'')
       +(S.plan==='Group'?'<div class="two"><label>Number of athletes<select id="hj-gs"><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select></label><label>Preferred days and times<input id="hj-pt" maxlength="120" placeholder="e.g. Sundays 4-6pm"></label></div><label>Friends\' names (optional)<input id="hj-fn" maxlength="200"></label>':'')
       +'<label class="ck"><input id="hj-ag1" type="checkbox"><span>I agree to the <a href="/terms/" target="_blank">Terms</a>, <a href="/privacy/" target="_blank">Privacy Policy</a> and <a href="/child-safe-policy/" target="_blank">Child Safe Policy</a>.</span></label>'
       +'<label class="ck"><input id="hj-mk" type="checkbox"><span>Optional: email me HPAN tips and offers. I can unsubscribe any time.</span></label>'
       +'<input id="hj-hp" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;height:0;opacity:0"><div class="err" id="hj-err" role="alert"></div><button class="go" type="submit" id="hj-go">'+(pass?'Get my free guides':'Send enquiry')+'</button></form>';
    }else if(S.step==='pay'&&(S.plan==='Pro'||ENQ())){
      var pro=S.plan==='Pro',sum=(S.coach?S.coach:'Coach to be matched')+(S.slot?' | '+S.slot.split(' | ')[1]:'');
      h=top(true)+'<h2>'+(pro?'Book HPAN Pro':'Book 1 on 1')+'</h2><p class="sub">'+esc(S.sport)+' with '+esc(sum.replace(' | ',', '))+'</p><ul><li>'+(pro?'$900 for 10 online group lessons.':'Price confirmed in writing before you pay.')+'</li><li>You pay securely on Stripe. We then confirm your '+(pro?'group and start date':'exact time')+' within 1 business day, or refund you in full.</li></ul><label class="ck"><input id="hj-tc" type="checkbox"><span>I agree to the <a href="/terms/" target="_blank">Terms</a>, <a href="/privacy/" target="_blank">Privacy Policy</a> and <a href="/child-safe-policy/" target="_blank">Child Safe Policy</a>.</span></label><div class="err" id="hj-err" role="alert"></div><button class="go" data-a="pay">'+(pro&&TRIAL?'Book the 10-lesson pack, $900':'Book and pay')+'</button>'+(pro&&TRIAL?'<button class="go gh" data-a="pay" data-t="1">Not sure yet? Try one lesson for $90</button><p class="note">The $90 trial covers one lesson with this group and is credited to the pack. If you continue, you pay the remaining $810 for the other 9 lessons. If not, nothing more to pay.</p>':'')+'<p class="note">Prefer to pay by bank transfer? <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp 0490 100 755</a>.</p>';
    }else if(S.step==='pay'){
      h=top(true)+'<h2>HPAN League</h2><p class="sub">'+(LEAGUE?'You will pay $90 securely on Stripe. This covers 12 months and does not renew automatically. Your resources are sent straight after.':'Message us to join the League and we will send your secure payment link.')+'</p>'+(LEAGUE?'<button class="go" data-a="paylg">Continue to payment</button>':'<a class="go" href="https://wa.me/61490100755?text=Hi%20HPAN%2C%20I%27d%20like%20to%20join%20the%20HPAN%20League." target="_blank" rel="noopener">Message us to join</a>')+'<button class="go gh" data-a="close">Not now</button>';
    }else if(S.step==='done'){
      h=top(false)+(S.plan==='Free'?'<h2>'+(S.back?'Welcome back':'You are in!')+'</h2><p class="sub">Download your free guides:</p>'+['welcome','athlete','parent','planner'].map(function(k,i){return '<a class="go'+(i?' gh':'')+'" href="/api/guides?f='+k+'&t='+encodeURIComponent(S.tok||'')+'">'+GF[k]+'</a>';}).join('')
        :'<h2>Thank you!</h2><p class="sub">We have your enquiry and will contact you within one business day. Spots are limited and nothing is charged until your place is confirmed.</p><p class="note">Faster? <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp 0490 100 755</a>.</p>')+'<button class="go gh" data-a="close">Close</button>';
    }
    card.innerHTML=h;bind();var f=card.querySelector('input,select,button.go,button.opt');if(f&&S.step!=='plan'){try{f.focus({preventScroll:true});}catch(e){}}
  }
  var DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],STD=['3-4pm','4-5pm','5-6pm','6-7pm','7-8pm','8-9pm','9-10pm'];
  function span(t){var m=String(t).match(/^(\d+)(?::(\d+))?(am|pm)?-(\d+)(?::(\d+))?(am|pm)$/);if(!m)return[0,0];function f(h,mm,sf){h=+h;if(sf==='pm'&&h<12)h+=12;return h*60+(+mm||0);}return[f(m[1],m[2],m[3]||m[6]),f(m[4],m[5],m[6])];}
  function drawCoaches(){
    var box=document.getElementById('hj-co');if(!box)return;var sp=document.getElementById('hj-sport').value;S.sport=sp;
    if(!sp){box.innerHTML='';return;}
    var list=COACHES.filter(function(c){return c.s.indexOf(sp)>-1;});
    var slots=SLOTS.filter(function(x){return [].concat(x.sport).indexOf(sp)>-1;});
    var h=S.coach?'<button class="opt sel" data-a="coach" data-n="" title="Change coach"><div><b>'+esc(S.coach)+'</b><span>Tap to change coach</span></div></button>':'<button class="opt'+(S.coach===''?' sel':'')+'" data-a="coach" data-n=""><div><b>No preference</b></div></button>'+list.map(function(c){return '<button class="opt'+(S.coach===c.n?' sel':'')+'" data-a="coach" data-n="'+c.n+'"><div><b>'+c.n+'</b></div></button>';}).join('');
    if(slots.length){
      var vis=slots.filter(function(x){return !S.coach||x.coach===S.coach;});
      h+='<p class="sub" style="margin:16px 0 8px">Choose a time</p>';
      DAYS.forEach(function(d){
        var ds=vis.filter(function(x){return x.day===d;}),items=[];
        if(!ds.length){h+='<div class="dy"><b>'+d+'</b><span class="fb">Fully booked</span></div>';return;}
        ds.forEach(function(x){var v=x.coach+' | '+x.day+' '+x.time,full=ENQ()?false:!(left(x)>0),sel=S.slot===v;
          var sub=full?'Class full':(S.coach?'':esc(x.coach)+' · ')+(S.plan==='Pro'?(left(x)<=3?'Running out':'Limited spots'):'Available');
          items.push({st:span(x.time)[0],h:'<button class="ch'+(sel?' on':'')+'" data-a="slot" data-v="'+esc(v)+'"'+(full?' disabled':'')+'><b>'+esc(x.time)+'</b><i>'+sub+'</i></button>'});});
        STD.forEach(function(t){var q=span(t),over=ds.some(function(x){var r=span(x.time);return r[0]<q[1]&&r[1]>q[0];});
          if(!over&&!S.coach)items.push({st:q[0],h:'<span class="ch off"><b>'+t+'</b><i>Fully booked</i></span>'});});
        items.sort(function(m,n){return m.st-n.st;});
        h+='<div class="dy"><b>'+d+'</b><div class="chs">'+items.map(function(i){return i.h;}).join('')+'</div></div>';
      });
    }
    else h+='<p class="note">'+(ENQ()?'We will agree your times with you by message.':'Class times are opening soon. Pick your preferred coach and we will confirm a time with you.')+'</p>';
    box.innerHTML=h;
  }
  function bind(){
    if(!card.__d){card.__d=1;card.addEventListener('click',function(e){
      var b=e.target.closest('[data-a]');if(!b||b.disabled)return;
      var a=b.getAttribute('data-a');
      if(a==='close'){close();}
      else if(a==='back'){back();}
      else if(a==='plan'){S.plan=b.getAttribute('data-k');if(S.plan==='Free'&&getTok()){S.tok=getTok();S.back=1;go('done');}else go('notes');}
      else if(a==='next'){
        if(S.step==='coach'){var er=document.getElementById('hj-err');if(!S.sport){er.textContent='Please choose a sport.';return;}
          var avail=SLOTS.filter(function(x){return [].concat(x.sport).indexOf(S.sport)>-1&&(!S.coach||x.coach===S.coach);}).length;
          if(ENQ()){S.enq=1;}else if(S.slot){S.enq=0;}else if(!avail){S.enq=1;}else{er.textContent=SLOTS.filter(function(x){return [].concat(x.sport).indexOf(S.sport)>-1&&(!S.coach||x.coach===S.coach)&&left(x)>0;}).length?'Please select a time.':'These classes are full. Choose another coach.';return;}}
        var f=flow();go(f[f.indexOf(S.step)+1]);
      }
      else if(a==='enq'){if(!S.sport){document.getElementById('hj-err').textContent='Please choose a sport.';return;}S.enq=1;go('details');}
      else if(a==='paylg'){b.disabled=true;b.textContent='One moment...';var i2=S.info||{},pe2=i2.parent_email&&i2.parent_email!=='n/a'?i2.parent_email:(i2.athlete_email&&i2.athlete_email!=='n/a'?i2.athlete_email:'');sendBooking(function(){location.href=LEAGUE+'?client_reference_id='+encodeURIComponent('League_'+(S.sport||'').replace(/[^A-Za-z0-9]+/g,''))+(pe2?'&prefilled_email='+encodeURIComponent(pe2):'');});}
      else if(a==='pay'){if(!document.getElementById('hj-tc').checked){document.getElementById('hj-err').textContent='Please tick the agreement box.';return;}
        var ref=(S.coach+'-'+(S.slot?S.slot.split(' | ')[1]:'anytime')).replace(/[^A-Za-z0-9]+/g,'-').replace(/^-|-$/g,'')+'_'+S.sport.replace(/[^A-Za-z0-9]+/g,'');
        b.disabled=true;b.textContent='One moment...';
        loadCounts(function(){var sl=SLOTS.filter(function(x){return S.slot&&S.slot===x.coach+' | '+x.day+' '+x.time;})[0];
          if(sl&&left(sl)<1){S.slot='';b.disabled=false;b.textContent='Book and pay';go('coach');setTimeout(function(){var e=document.getElementById('hj-err');if(e)e.textContent='Sorry, that time was just taken. Please pick another.';},0);return;}
          var pe=S.info&&S.info.parent_email&&S.info.parent_email!=='n/a'?S.info.parent_email:(S.info&&S.info.athlete_email!=='n/a'?S.info.athlete_email:'');
          var tr=b.getAttribute('data-t')&&TRIAL;if(tr&&S.info){S.info.message=(S.info.message||'')+'\nTRIAL LESSON: pays $90 for one lesson; $810 due if they continue.';S.info.trial='yes';}sendBooking(function(){location.href=(tr?TRIAL:PAY[S.plan])+'?client_reference_id='+encodeURIComponent(ref)+(pe?'&prefilled_email='+encodeURIComponent(pe):'');});});}
      else if(a==='coach'){S.coach=b.getAttribute('data-n');S.slot='';drawCoaches();}
      else if(a==='slot'){S.slot=b.getAttribute('data-v');S.coach=S.slot.split(' | ')[0];drawCoaches();}
    });}
    var sp=document.getElementById('hj-sport');if(sp){sp.addEventListener('change',function(){S.coach='';S.slot='';drawCoaches();});drawCoaches();}
    var who=document.getElementById('hj-who');if(who){who.value=S.who;who.addEventListener('change',function(){S.who=who.value;document.getElementById('hj-pw').style.display=who.value==='minor'?'block':'none';});document.getElementById('hj-pw').style.display=who.value==='minor'?'block':'none';}
    var f=document.getElementById('hj-f');if(f)f.addEventListener('submit',function(e){e.preventDefault();submit();});
    if(f&&S.fv){Object.keys(S.fv).forEach(function(k){var e=document.getElementById(k);if(e&&e.type!=='checkbox')e.value=S.fv[k];});}
  }
  function v(i){var e=document.getElementById(i);return e?e.value.trim():'';}
  function au(x){return /^(\+?61|0)4\d{8}$/.test(String(x).replace(/[\s()-]/g,''));}
  function fm(x){x=String(x).replace(/[\s()-]/g,'').replace(/^\+?61/,'0');return x.replace(/^(\d{4})(\d{3})(\d{3})$/,'$1 $2 $3');}
  function submitBooking(){
    var er=document.getElementById('hj-err'),gb=document.getElementById('hj-go'),em=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;er.textContent='';
    if(v('hj-hp'))return;
    var ids=['hj-sp','hj-an','hj-age','hj-ae','hj-am','hj-pnm','hj-pem','hj-pmb','hj-pm2','hj-lv','hj-nt','hj-gs','hj-pt','hj-fn'];S.fv={};ids.forEach(function(i){S.fv[i]=v(i);});if(S.plan==='League'){S.sport=v('hj-sp');if(!S.sport){er.textContent='Please choose the athlete\'s main sport.';return;}}
    var age=v('hj-age'),n=+age,adult=n>=18,teen=n>=13;
    if(!v('hj-an')){er.textContent='Please enter the athlete\'s full name.';return;}
    if(!/^\d{1,2}$/.test(age)||n<3){er.textContent='Please enter the athlete\'s age as a number.';return;}
    if(teen||v('hj-ae')||S.plan==='League'){if(!em.test(v('hj-ae'))){er.textContent=(teen||S.plan==='League')?(S.plan==='League'?'Please enter the athlete\'s email.':'Please enter the athlete\'s email (required for athletes 13 or over).'):'That athlete email does not look right.';return;}}
    if(teen||v('hj-am')){if(!au(v('hj-am'))){er.textContent=teen?'Please enter the athlete\'s mobile as 04xx xxx xxx (required for athletes 13 or over).':'The athlete mobile should look like 04xx xxx xxx.';return;}}
    if(!adult||v('hj-pnm')||v('hj-pem')||v('hj-pmb')){
      if(!v('hj-pnm')){er.textContent='Please enter the parent or guardian\'s full name.';return;}
      if(!em.test(v('hj-pem'))){er.textContent='Please enter a valid parent or guardian email.';return;}
      if(!au(v('hj-pmb'))){er.textContent='Please enter the parent or guardian mobile as 04xx xxx xxx.';return;}
    }
    if(v('hj-pm2')&&!au(v('hj-pm2'))){er.textContent='The second parent mobile should look like 04xx xxx xxx.';return;}
    if(!document.getElementById('hj-ag1').checked){er.textContent='Please tick the agreement box.';return;}
    var pn=PLANS.filter(function(p){return p.k===S.plan;})[0].n,date=new Date().toLocaleString('en-AU',{timeZone:'Australia/Sydney',dateStyle:'medium',timeStyle:'short'})+' (Sydney)';
    var pmail=v('hj-pem')||v('hj-ae'),pname=v('hj-pnm')||v('hj-an'),prepay=((S.plan==='Pro'&&!S.enq)||S.plan==='League');
    var d={date_booked:date,athlete_name:v('hj-an'),age:age,sport:S.sport,parent_name:v('hj-pnm')||'n/a',parent_email:v('hj-pem')||'n/a',parent_mobile:v('hj-pmb')?fm(v('hj-pmb')):'n/a',second_parent_mobile:v('hj-pm2')?fm(v('hj-pm2')):'n/a',athlete_mobile:v('hj-am')?fm(v('hj-am')):'n/a',athlete_email:v('hj-ae')||'n/a',plan:pn,class_time:S.plan==='League'?'HPAN League membership (no class time)':S.slot?S.slot.replace(' | ',', '):(S.coach?S.coach+' (time to be confirmed)':'No preference, to be matched'),level:v('hj-lv'),notes:v('hj-nt'),marketing_opt_in:document.getElementById('hj-mk').checked?'YES':'no',source:'Join now popup',name:pname,email:pmail,_replyto:pmail};
    if(S.plan==='Group'){d.group_size=v('hj-gs');d.preferred_times=v('hj-pt');d.friends=v('hj-fn');}
    d._subject='HPAN booking: '+pn+' ('+S.sport+'), '+d.athlete_name+(prepay?' (payment started)':' (enquiry)');
    d.message=['Date booked: '+d.date_booked,'Athlete name: '+d.athlete_name,'Age: '+d.age,'Sport: '+d.sport,'Parent name: '+d.parent_name,'Parent email: '+d.parent_email,'Parent mobile: '+d.parent_mobile,'Second parent mobile: '+d.second_parent_mobile,'Athlete mobile: '+d.athlete_mobile,'Athlete email: '+d.athlete_email,'Plan: '+d.plan,'Class/time chosen: '+d.class_time,'','Level: '+d.level,S.plan==='Group'?'Private group of '+d.group_size+' | Preferred times: '+(d.preferred_times||'n/a')+(d.friends?' | Friends: '+d.friends:''):'',d.notes?'Notes: '+d.notes:'','Marketing opt-in: '+d.marketing_opt_in,'Status: '+(prepay?'Sent to Stripe checkout. Check Stripe to confirm the payment came through.':'Enquiry. No payment taken yet.')].filter(function(x,i){return x!==''||i===12;}).join('\n');
    S.info=d;
    if(prepay){go('pay');return;}
    gb.disabled=true;gb.textContent='Sending...';
    fetch(FORM,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(d)}).then(function(r){if(!r.ok)throw 0;S.step='done';render();}).catch(function(){gb.disabled=false;gb.textContent='Send enquiry';er.innerHTML='That did not send. Please <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp 0490 100 755</a> or email highperformanceathletenetwork@gmail.com.';});
  }
  function sendBooking(cb){var done=0;function fin(){if(!done){done=1;cb();}}setTimeout(fin,4000);try{fetch(FORM,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(S.info),keepalive:true}).then(fin,fin);}catch(e){fin();}}
  function submit(){
    if(S.plan==='Pro'||S.plan==='Premium'||S.plan==='Group'||S.plan==='League'){submitBooking();return;}
    var er=document.getElementById('hj-err'),go=document.getElementById('hj-go'),paid=S.plan!=='Free',em=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;er.textContent='';
    if(v('hj-hp'))return;
    if(!v('hj-n')){er.textContent='Please enter your name.';return;}
    if(!em.test(v('hj-e'))){er.textContent='Please enter a valid email.';return;}
    if(v('hj-who')==='minor'&&!em.test(v('hj-pe'))){er.textContent='Please enter a parent or guardian email.';return;}
    if(paid&&v('hj-m').replace(/\D/g,'').length<8){er.textContent='Please enter a mobile number.';return;}
    if(!document.getElementById('hj-ag1').checked){er.textContent='Please tick the agreement box.';return;}
    var pn=PLANS.filter(function(p){return p.k===S.plan;})[0].n,roles={parent:'Parent or guardian',adult:'Athlete 18 or over',minor:'Athlete under 18'};
    var d={name:v('hj-n'),email:v('hj-e'),_replyto:v('hj-e'),plan:S.plan,role:roles[v('hj-who')],parent_email:v('hj-pe'),mobile:v('hj-m'),sport:S.sport,preferred_coach:S.coach||'No preference',selected_time:S.slot,athlete:v('hj-a'),age_group:v('hj-ag'),level:v('hj-lv'),notes:v('hj-nt'),group_size:v('hj-gs'),preferred_times:v('hj-pt'),friends:v('hj-fn'),marketing_opt_in:document.getElementById('hj-mk').checked?'YES':'no',source:'Join now popup',_subject:'HPAN join: '+pn+(S.sport?' ('+S.sport+')':'')};
    d.message=['Join now: '+pn,'Name: '+d.name+' ('+d.role+')','Email: '+d.email,d.parent_email?'Parent email: '+d.parent_email:'','Mobile: '+(d.mobile||'n/a'),paid?'Athlete: '+(d.athlete||'n/a')+', '+d.age_group+', '+d.level:'','Sport: '+(d.sport||'n/a')+' | Preferred coach: '+d.preferred_coach+(d.selected_time?' | Time: '+d.selected_time:''),S.plan==='Group'?'Private group of '+d.group_size+' | Preferred times: '+(d.preferred_times||'n/a')+(d.friends?' | Friends: '+d.friends:''):'',d.notes?'Notes: '+d.notes:'','Marketing opt-in: '+d.marketing_opt_in].filter(Boolean).join('\n');
    go.disabled=true;go.textContent='Sending...';
    fetch(FORM,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(d)}).then(function(r){
      if(!r.ok)throw 0;if(S.plan!=='Free'){S.step='done';render();return;}return fetch('/api/guides',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:d.email,name:d.name})}).then(function(g){return g.json();}).then(function(g){if(!g||!g.token)throw 0;S.tok=g.token;S.back=0;setTok(g.token);S.step='done';render();});
    }).catch(function(){go.disabled=false;go.textContent=S.plan==='Free'?'Get my free guides':'Send enquiry';er.innerHTML='That did not send. Please <a href="'+WA+'" target="_blank" rel="noopener">WhatsApp 0490 100 755</a> or email highperformanceathletenetwork@gmail.com.';});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
