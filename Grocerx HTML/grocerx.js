/* GrocerX India — grocerx.js v3 */

const ICONS = {
  all:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M8 6h4l-1 16h10l1.5-10H11" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 6H5" stroke="#222" stroke-width="2" stroke-linecap="round"/><circle cx="13" cy="25" r="2" fill="#222"/><circle cx="21" cy="25" r="2" fill="#222"/><rect x="14" y="8" width="8" height="10" rx="1" stroke="#222" stroke-width="1.5"/></svg>`,
  loose:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="10" y="12" width="16" height="18" rx="3" fill="#f5e6c8" stroke="#c8a86b" stroke-width="2"/><path d="M10 16 Q18 13 26 16" stroke="#c8a86b" stroke-width="2" fill="none"/><path d="M13 12 Q14 7 18 7 Q22 7 23 12" stroke="#c8a86b" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="13" y="18" width="10" height="2" rx="1" fill="#c8a86b"/><rect x="13" y="22" width="7" height="2" rx="1" fill="#c8a86b"/><text x="18" y="10" text-anchor="middle" font-size="5" fill="#e00" font-weight="bold">OPEN</text></svg>`,
  biscuits:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="8" y="10" width="20" height="20" rx="3" fill="#d4edda" stroke="#5a9a5a" stroke-width="2"/><rect x="8" y="10" width="20" height="7" rx="3" fill="#5a9a5a"/><text x="18" y="17" text-anchor="middle" font-size="5.5" fill="#fff" font-weight="900">BISCUIT</text><circle cx="18" cy="23" r="4" fill="#fff" stroke="#5a9a5a" stroke-width="1.5"/><circle cx="18" cy="23" r="2" fill="#c8a86b"/><line x1="18" y1="19" x2="18" y2="27" stroke="#5a9a5a" stroke-width="0.8"/><line x1="14" y1="23" x2="22" y2="23" stroke="#5a9a5a" stroke-width="0.8"/></svg>`,
  chips:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M13 5 Q12 9 10 12 L9 26 Q9 29 18 29 Q27 29 27 26 L26 12 Q24 9 23 5 Z" fill="#f5c842" stroke="#e0a800" stroke-width="1.8"/><path d="M13 5 Q14 7.5 18 7.5 Q22 7.5 23 5" fill="#e0a800"/><path d="M10 12 Q18 15 26 12" fill="#e0a800" stroke="#e0a800" stroke-width="1.2"/><text x="18" y="20" text-anchor="middle" font-size="5" fill="#8B4513" font-weight="900">SNACKS</text><text x="18" y="26" text-anchor="middle" font-size="4" fill="#8B4513" font-weight="700">88</text></svg>`,
  chocolate:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="10" width="24" height="18" rx="3" fill="#5d3a1a" stroke="#3d2000" stroke-width="1.5"/><rect x="9" y="13" width="6" height="5" rx="1" fill="#7a4a22" stroke="#3d2000" stroke-width="0.8"/><rect x="16" y="13" width="6" height="5" rx="1" fill="#7a4a22" stroke="#3d2000" stroke-width="0.8"/><rect x="9" y="19.5" width="6" height="5" rx="1" fill="#7a4a22" stroke="#3d2000" stroke-width="0.8"/><rect x="16" y="19.5" width="6" height="5" rx="1" fill="#7a4a22" stroke="#3d2000" stroke-width="0.8"/><rect x="23" y="13" width="4" height="11.5" rx="1" fill="#7a4a22" stroke="#3d2000" stroke-width="0.8"/></svg>`,
  stationery:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><g transform="rotate(-15 18 18)"><rect x="16" y="5" width="4" height="20" rx="1" fill="#f5c842" stroke="#e0a800" stroke-width="1"/><polygon points="16,25 20,25 18,30" fill="#e87722"/><rect x="16" y="5" width="4" height="4" rx="0.5" fill="#ccc" stroke="#999" stroke-width="0.8"/></g><g transform="rotate(0 18 18)"><rect x="15" y="4" width="4" height="20" rx="1" fill="#e87722" stroke="#c05a00" stroke-width="1"/><polygon points="15,24 19,24 17,30" fill="#fc0"/><rect x="15" y="4" width="4" height="4" rx="0.5" fill="#ccc" stroke="#999" stroke-width="0.8"/></g><g transform="rotate(15 18 18)"><rect x="14" y="5" width="4" height="20" rx="1" fill="#4a90d9" stroke="#2060a0" stroke-width="1"/><polygon points="14,25 18,25 16,30" fill="#888"/><rect x="14" y="5" width="4" height="4" rx="0.5" fill="#ccc" stroke="#999" stroke-width="0.8"/></g></svg>`,
  noodles:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="9" y="14" width="18" height="16" rx="3" fill="#fff3b0" stroke="#e0c050" stroke-width="2"/><rect x="9" y="14" width="18" height="7" rx="3" fill="#e05050"/><text x="18" y="20" text-anchor="middle" font-size="5" fill="#fff" font-weight="900">MAGGI</text><path d="M13 24 Q15 22 17 24 Q19 26 21 24 Q23 22 25 24" stroke="#c8a820" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M13 27 Q15 25 17 27 Q19 29 21 27 Q23 25 25 27" stroke="#c8a820" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`,
  drinks:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="10" y="10" width="16" height="20" rx="2" fill="#d4edda" stroke="#5a9a5a" stroke-width="1.8"/><rect x="10" y="10" width="16" height="8" rx="2" fill="#5a9a5a"/><rect x="13" y="7" width="5" height="4" rx="1" fill="#ccc" stroke="#999" stroke-width="1"/><line x1="15.5" y1="7" x2="15.5" y2="5" stroke="#999" stroke-width="1.5" stroke-linecap="round"/><circle cx="18" cy="23" r="4" fill="#90EE90" stroke="#5a9a5a" stroke-width="1"/><path d="M16 23 Q17 21 18 23 Q19 25 20 23" stroke="#5a9a5a" stroke-width="1" fill="none"/></svg>`,
  dairy:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="11" y="14" width="14" height="16" rx="2" fill="#fff" stroke="#ccc" stroke-width="1.8"/><path d="M11 14 L14 8 L22 8 L25 14" fill="#e8f4ff" stroke="#ccc" stroke-width="1.5"/><path d="M14 8 L18 12 L22 8" fill="#fff" stroke="#ccc" stroke-width="1"/><text x="18" y="24" text-anchor="middle" font-size="4.5" fill="#1565c0" font-weight="900">AMUL</text><rect x="13" y="26" width="10" height="2" rx="0.5" fill="#e8c940"/></svg>`,
  namkeen:`<svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M12 8 Q11 12 10 16 L10 28 Q10 30 18 30 Q26 30 26 28 L26 16 Q25 12 24 8 Z" fill="#ffd280" stroke="#e0a800" stroke-width="1.8"/><path d="M12 8 Q13 11 18 11 Q23 11 24 8" fill="#e0a800"/><path d="M10 16 Q18 19 26 16" stroke="#e0a800" stroke-width="1.2"/><text x="18" y="22" text-anchor="middle" font-size="4.5" fill="#7a3500" font-weight="900">NAMKEEN</text></svg>`,
};

const CATS = [
  {id:'all',        l:'All',         e:'🛍️'},
  {id:'loose',      l:'LOOSE ITEM',  e:'🧂'},
  {id:'biscuits',   l:'BISCUITS',    e:'🍪'},
  {id:'chips',      l:'CHIPS',       e:'🥔'},
  {id:'chocolate',  l:'CHOCOLATE',   e:'🍫'},
  {id:'stationery', l:'STATIONERY',  e:'✏️'},
  {id:'noodles',    l:'NOODLES',     e:'🍜'},
  {id:'drinks',     l:'COLD DRINKS', e:'🥤'},
  {id:'dairy',      l:'DAIRY',       e:'🥛'},
  {id:'namkeen',    l:'NAMKEEN',     e:'🫘'},
];

const BANNERS = [
  {bg:'linear-gradient(135deg,#ff6b9d 0%,#ffb347 100%)', type:'brand'},
  {bg:'linear-gradient(135deg,#f7971e 0%,#ffd200 100%)', type:'p', badge:'⚡ Express Delivery', title:'Deliver in\n4 Minutes!', sub:'Fresh groceries at your doorstep 🛵', cta:'Order Now', emoji:'⚡'},
  {bg:'linear-gradient(135deg,#fc4a1a 0%,#f7b733 100%)', type:'p', badge:'🔥 LIMITED OFFER',   title:'Flat 30% OFF',            sub:'Code: GROX30 — First 3 orders!',        cta:'Grab Now', emoji:'🎁'},
  {bg:'linear-gradient(135deg,#6a11cb 0%,#2575fc 100%)', type:'p', badge:'🆓 FREE DELIVERY',   title:'Above ₹199\nFree!',       sub:'No minimum on your 1st order 📦',       cta:'Shop Now', emoji:'📦'},
];

const BC = {POPULAR:'#1565c0',BESTSELLER:'#e65100',SALE:'#c62828',NEW:'#7b1fa2',HOT:'#b71c1c',FRESH:'#2e7d32'};

const P = [
  {id:1,  name:'Maggie Noodles',        brand:'Nestlé',       price:14,  mrp:14,  w:'70g',     cat:'noodles',    e:'🍜', b:'POPULAR',img:'images/maggie.png'},
  {id:2,  name:'Yippee Masala',        brand:'Sunfeast',     price:12,  mrp:14,  w:'70g',     cat:'noodles',    e:'🍝', b:'SALE',img:'images/yippe.png'},
  {id:3,  name:'Top Ramen',            brand:'Nissin',       price:12,  mrp:14,  w:'70g',     cat:'noodles',    e:'🫕', b:null,img:'images/ramen.png'},
  {id:4,  name:"Lay's Salted",         brand:'PepsiCo',      price:20,  mrp:20,  w:'26g',     cat:'chips',      e:'🥔', b:'BESTSELLER',img:'images/lays.png'},
  {id:5,  name:'Kurkure Masala',       brand:'PepsiCo',      price:10,  mrp:10,  w:'22g',     cat:'chips',      e:'🌽', b:'POPULAR',img:'images/kurkure.png'},
  {id:6,  name:'Doritos Cheese',       brand:'Frito-Lay',    price:30,  mrp:35,  w:'30g',     cat:'chips',      e:'🧀', b:'SALE',img:'images/doritos.png'},
  {id:7,  name:'Coca-Cola',            brand:'Coca-Cola',    price:40,  mrp:45,  w:'500ml',   cat:'drinks',     e:'🥤', b:'BESTSELLER',img:'images/coca.png'},
  {id:8,  name:'Pepsi',                brand:'PepsiCo',      price:40,  mrp:45,  w:'500ml',   cat:'drinks',     e:'🫙', b:'NEW',img:'images/pepsi.png'},
  {id:9,  name:'Sprite',               brand:'Coca-Cola',    price:40,  mrp:45,  w:'500ml',   cat:'drinks',     e:'🍋',  b:'BESTSELLER',img:'images/lays.png'},
  {id:10, name:'Thums Up',             brand:'Coca-Cola',    price:40,  mrp:45,  w:'500ml',   cat:'drinks',     e:'👍', b:'HOT',img:'images/thumsup.png'},
  {id:11, name:'Limca',                brand:'Coca-Cola',    price:35,  mrp:40,  w:'500ml',   cat:'drinks',     e:'🍈', b:null,img:'images/limca.png'},
  {id:12, name:'Mountain Dew',         brand:'PepsiCo',      price:38,  mrp:45,  w:'500ml',   cat:'drinks',     e:'🟢', b:'SALE',img:'images/dew.png'},
  {id:13, name:'Parle-G',              brand:'Parle',        price:10,  mrp:10,  w:'100g',    cat:'biscuits',   e:'🍪', b:'BESTSELLER',img:'images/parleg.png'},
  {id:14, name:'Oreo',                 brand:'Cadbury',      price:20,  mrp:20,  w:'120g',    cat:'biscuits',   e:'⚫', b:'POPULAR',img:'images/oreo.png'},
  {id:15, name:'Bourbon',              brand:'Britannia',    price:20,  mrp:22,  w:'150g',    cat:'biscuits',   e:'🟫', b:null,img:'images/marie.png'},
  {id:16, name:'Marie Gold',           brand:'Britannia',    price:20,  mrp:22,  w:'200g',    cat:'biscuits',   e:'🌟', b:null,img:'images/marie.png'},
  {id:17, name:'Dairy Milk Silk',      brand:'Cadbury',      price:99,  mrp:110, w:'60g',     cat:'chocolate',  e:'🍫', b:'POPULAR',img:'images/silk.png'},
  {id:18, name:'KitKat',               brand:'Nestlé',       price:40,  mrp:40,  w:'41.5g',   cat:'chocolate',  e:'🍬', b:null,img:'images/kitkat.png'},
  {id:19, name:'5 Star',               brand:'Cadbury',      price:20,  mrp:20,  w:'40g',     cat:'chocolate',  e:'⭐', b:'HOT',img:'images/star.png'},
  {id:20, name:'Munch',                brand:'Nestlé',       price:10,  mrp:10,  w:'26.6g',   cat:'chocolate',  e:'🌰', b:null,img:'images/munch.png'},
  {id:21, name:'Amul Milk',            brand:'Amul',         price:31,  mrp:31,  w:'500ml',   cat:'dairy',      e:'🥛', b:null,img:'images/milk.png'},
  {id:22, name:'Mother Dairy Curd',    brand:'Mother Dairy', price:55,  mrp:60,  w:'400g',    cat:'dairy',      e:'🫙', b:'FRESH',img:'images/curd.png'},
  {id:23, name:'Amul Butter',          brand:'Amul',         price:56,  mrp:60,  w:'100g',    cat:'dairy',      e:'🧈', b:null,img:'images/butter.png'},
  {id:24, name:"Haldiram's Bhujia",    brand:"Haldiram's",   price:30,  mrp:30,  w:'150g',    cat:'namkeen',    e:'🫘', b:'POPULAR',img:'images/bhujia.png'},
  {id:25, name:'Bikaji Khatta Meetha', brand:'Bikaji',       price:25,  mrp:28,  w:'200g',    cat:'namkeen',    e:'🌶️',b:'SALE',img:'images/meetha.png'},
  {id:26, name:"Haldiram's Mixture",   brand:"Haldiram's",   price:30,  mrp:30,  w:'150g',    cat:'namkeen',    e:'🎑', b:null,img:'images/mix.png'},
  {id:27, name:'Tata Salt',            brand:'Tata',         price:22,  mrp:25,  w:'1kg',     cat:'loose',      e:'🧂', b:null,img:'images/salt.png'},
  {id:28, name:'Aashirvaad Atta',      brand:'ITC',          price:260, mrp:280, w:'5kg',     cat:'loose',      e:'🌾', b:'BESTSELLER',img:'images/atta.png'},
  {id:29, name:'Sunflower Oil',        brand:'Saffola',      price:145, mrp:165, w:'1L',      cat:'loose',      e:'🫙', b:'SALE',img:'images/oil.png'},
  {id:30, name:'Classmate Notebook',   brand:'ITC',          price:45,  mrp:50,  w:'172pgs',  cat:'stationery', e:'📓', b:null,img:'images/copy.png'},
  {id:31, name:'Reynolds Pen',         brand:'Reynolds',     price:10,  mrp:10,  w:'Pack 5',  cat:'stationery', e:'✒️',b:'POPULAR',img:'images/pen.png'},
  {id:32, name:'Apsara Pencils',       brand:'Apsara',       price:30,  mrp:35,  w:'Pack 10', cat:'stationery', e:'✏️',b:null,img:'images/pencil.png'},
];

// bestsellers shown on home page
const BESTSELLERS = [13,17,7,4,23,1,18,24,21,28,2,14];

let cart={}, curPage='home', curCat='all', sq='', bi=0;

/* STRIP */
function buildStrip(){
  document.getElementById('csi').innerHTML=CATS.map((c,i)=>
    `<button class="cat-btn${i===0?' first':''}${curCat===c.id?' active':''}" onclick="selCat('${c.id}')">
      ${ICONS[c.id]||''}
      <span class="cl">${c.l}</span>
    </button>`).join('');
}
function selCat(id){curCat=id;buildStrip();showPage('products');}

/* BANNER */
function buildBanner(){
  const b=BANNERS[bi];
  const s=document.getElementById('banner-slide');
  const d=document.getElementById('banner-dots');
  s.style.background=b.bg;
  d.style.background=b.bg;
  if(b.type==='brand'){
    s.innerHTML=`
      <div class="big-emoji">🛍️</div>
      <div class="brand-text"><span class="b1">Grocer</span><span class="b2">X</span><span class="b3">INDIA</span></div>
      <div class="brand-tag">Your neighbourhood kirana, online ⚡</div>`;
  } else {
    s.innerHTML=`
      <div class="big-emoji">${b.emoji}</div>
      <div class="badge-pill">${b.badge}</div>
      <h2>${b.title}</h2>
      <p>${b.sub}</p>
      <button class="cta-btn" onclick="showPage('products')">${b.cta} →</button>`;
  }
  d.innerHTML=BANNERS.map((_,i)=>`<button class="dot${i===bi?' active':''}" onclick="jb(${i})"></button>`).join('');
}
function jb(i){bi=i;buildBanner();}
setInterval(()=>{bi=(bi+1)%BANNERS.length;buildBanner();},3500);

/* BESTSELLERS on home */
function buildBestsellers(){
  const items=BESTSELLERS.map(id=>P.find(p=>p.id===id)).filter(Boolean);
  document.getElementById('pgrid-home').innerHTML=items.map(p=>{
    const qty=cart[p.id]||0;
    return`<div class="pc-card fia">
      ${p.img ?`<img src="${p.img}"style="width:72px;height:72px;object-fit:contain;border-radius:10px;margin-bottom:8px;">`:`<div class="pc-emoji">${p.e}</div>`}
      <div class="pc-name">${p.name}</div>
      <div class="pc-weight">${p.w}</div>
      <div class="pc-bot">
        <span class="pc-price">₹${p.price}</span>
        ${qty===0
          ?`<button class="pc-add-btn" onclick="ac(${p.id})">+</button>`
          :`<div class="pc-qc"><button onclick="rc(${p.id})">−</button><span>${qty}</span><button onclick="ac(${p.id})">+</button></div>`}
      </div>
    </div>`;
  }).join('');
}

/* CATEGORY CARDS */
const CE={drinks:['🥤','🧃','🫙','🍶'],chips:['🥔','🌽','🧀'],biscuits:['🍪','🫓','🍞'],
  chocolate:['🍫','🍬','🍭'],noodles:['🍜','🍝','🥡'],dairy:['🥛','🧈','🫙'],
  namkeen:['🫘','🌶️','🥜'],loose:['🧂','🌾','🫙'],stationery:['📓','✏️','🖊️']};
function eg(cat,tall){
  const e=CE[cat]||['🛍️'];
  if(tall) return`<div class="cc-emojis-grid">${e.slice(0,4).map(x=>`<span>${x}</span>`).join('')}</div>`;
  return`<div class="cc-emojis">${e.slice(0,3).map(x=>`<span>${x}</span>`).join('')}</div>`;
}
function buildCards(){
  document.getElementById('cr1').innerHTML=`
    <div class="cc tall" onclick="selCat('drinks')"><h3>Cold Drinks &amp; Juices</h3>${eg('drinks',true)}</div>
    <div class="cc" onclick="selCat('chips')"><h3>Chips &amp; Namkeen</h3>${eg('chips',false)}</div>
    <div class="cc" onclick="selCat('biscuits')"><h3>Biscuits &amp; Bakery</h3>${eg('biscuits',false)}</div>`;
  document.getElementById('cr2').innerHTML=`
    <div class="cc" onclick="selCat('chocolate')"><h3>Chocolates &amp; Sweets</h3>${eg('chocolate',false)}</div>
    <div class="cc" onclick="selCat('noodles')"><h3>Instant Food</h3>${eg('noodles',false)}</div>`;
  document.getElementById('cr3').innerHTML=`
    <div class="cc" onclick="selCat('dairy')"><h3>Dairy &amp; Eggs</h3>${eg('dairy',false)}</div>
    <div class="cc" onclick="selCat('namkeen')"><h3>Namkeen &amp; Snacks</h3>${eg('namkeen',false)}</div>`;
}

/* PRODUCTS PAGE */
function renderProds(){
  const list=P.filter(p=>(curCat==='all'||p.cat===curCat)&&
    (p.name.toLowerCase().includes(sq)||p.brand.toLowerCase().includes(sq)));
  document.getElementById('ptitle').textContent=sq?`"${sq}"`:(CATS.find(c=>c.id===curCat)?.l||'All');
  document.getElementById('fsi').innerHTML=CATS.map(c=>
    `<button class="fbtn${curCat===c.id?' active':''}" onclick="fcat('${c.id}')">${c.e} ${c.l}</button>`).join('');
  const g=document.getElementById('pgrid'),nr=document.getElementById('nores');
  if(!list.length){g.innerHTML='';nr.style.display='block';return;}
  nr.style.display='none';
  g.innerHTML=list.map(p=>{
    const qty=cart[p.id]||0;
    const disc=Math.round(((p.mrp-p.price)/p.mrp)*100);
    return`<div class="pc-card fia">
      ${p.b?`<span class="pc-badge" style="background:${BC[p.b]}">${p.b}</span>`:''}
      ${disc>0?`<span class="pc-disc">${disc}%OFF</span>`:''}
      <div class="pc-emoji"><img src="${p.img}" style="width:60px;height:60px;object-fit:contain;" onerror="this.style.display='none'"/></div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-weight">${p.brand} · ${p.w}</div>
      <div class="pc-bot">
        <div><div class="pc-price">₹${p.price}</div>${p.mrp>p.price?`<div style="font-size:10px;color:#ccc;text-decoration:line-through">₹${p.mrp}</div>`:''}</div>
        ${qty===0
          ?`<button class="pc-add-btn" onclick="ac(${p.id})">+</button>`
          :`<div class="pc-qc"><button onclick="rc(${p.id})">−</button><span>${qty}</span><button onclick="ac(${p.id})">+</button></div>`}
      </div>
    </div>`;
  }).join('');
}
function fcat(id){curCat=id;renderProds();}

/* CART */
function ac(id){
  cart[id]=(cart[id]||0)+1;
  const b=document.getElementById('cbadge');
  b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
  upCart();
  if(curPage==='products')renderProds();
  if(curPage==='home')buildBestsellers();
}
function rc(id){
  if(!cart[id])return;
  cart[id]--;
  if(!cart[id])delete cart[id];
  upCart();
  if(curPage==='products')renderProds();
  if(curPage==='home')buildBestsellers();
  if(curPage==='cart')renderCartPg();
}
function upCart(){
  const cnt=Object.values(cart).reduce((a,b)=>a+b,0);
  const tot=Object.entries(cart).reduce((s,[id,q])=>{const p=P.find(x=>x.id===+id);return s+(p?p.price*q:0);},0);
  const cb=document.getElementById('cbadge');
  cb.textContent=cnt; cb.style.display=cnt>0?'flex':'none';
  // header cart badge
  const hcb=document.getElementById('hcbadge');
  if(hcb){hcb.textContent=cnt;hcb.style.display=cnt>0?'flex':'none';}
  const pill=document.getElementById('cpill');
  pill.style.display=(cnt>0&&curPage!=='cart')?'block':'none';
  document.getElementById('pcnt').textContent=cnt;
  document.getElementById('ptxt').textContent=`${cnt} item${cnt>1?'s':''} added`;
  document.getElementById('ppr').textContent=`₹${tot} →`;
}
function renderCartPg(){
  const its=Object.entries(cart).map(([id,qty])=>({...P.find(p=>p.id===+id),qty}));
  const tot=its.reduce((s,i)=>s+i.price*i.qty,0);
  const mt=its.reduce((s,i)=>s+i.mrp*i.qty,0);
  const sv=mt-tot;
  const em=document.getElementById('c-empty'),ci=document.getElementById('citems');
  const bl=document.getElementById('bill'),ob=document.getElementById('ord-btn');
  if(!its.length){em.style.display='block';ci.innerHTML='';bl.style.display='none';ob.style.display='none';return;}
  em.style.display='none';bl.style.display='block';ob.style.display='block';
  ob.textContent=`🛵 Order Karo · ₹${tot}`;
  ci.innerHTML=its.map(i=>`
    <div class="citem">
      <div class="cif">${i.e}</div>
      <div class="ci-info"><b>${i.name}</b><small>${i.brand} · ${i.w}</small></div>
      <div class="cart-qc">
        <button onclick="rc(${i.id})">−</button>
        <span>${i.qty}</span>
        <button onclick="ac(${i.id})">+</button>
      </div>
      <div class="ci-total">₹${i.price*i.qty}</div>
    </div>`).join('');
  document.getElementById('bm').textContent=`₹${mt}`;
  document.getElementById('bt').textContent=`₹${tot}`;
  const sr=document.getElementById('sr');
  if(sv>0){sr.style.display='flex';document.getElementById('bs').textContent=`-₹${sv}`;}
  else sr.style.display='none';
}
function placeOrder(){cart={};document.getElementById('ord-ok').style.display='flex';upCart();renderCartPg();}

/* CATEGORIES GRID */
function buildCatsGrid(){
  document.getElementById('cats-grid').innerHTML=CATS.filter(c=>c.id!=='all').map(c=>`
    <button class="cc2" onclick="selCat('${c.id}')">
      <div class="cc2-ico">${c.e}</div>
      ${ICONS[c.id]||''}
      <span class="clb">${c.l}</span>
      <span class="cct">${P.filter(p=>p.cat===c.id).length} items</span>
    </button>`).join('');
}

/* SEARCH */
function handleSearch(v){sq=v.toLowerCase();if(v.length>0)showPage('products');}

/* NAV */
function showPage(p){
  curPage=p;
  document.querySelectorAll('.page').forEach(e=>e.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  document.querySelectorAll('.nb').forEach(e=>e.classList.remove('active'));
  const nb=document.getElementById('nb-'+p);
  if(nb)nb.classList.add('active');
  upCart();
  if(p==='products')renderProds();
  if(p==='cart'){document.getElementById('ord-ok').style.display='none';renderCartPg();}
  if(p==='home'){buildBestsellers();}
  document.getElementById('main').scrollTop=0;
}
function goBack(){sq='';document.getElementById('si').value='';curCat='all';showPage('home');}

/* INIT */
buildStrip(); buildBanner(); buildCards(); buildBestsellers(); buildCatsGrid(); upCart();
document.getElementById('nb-home').classList.add('active');
