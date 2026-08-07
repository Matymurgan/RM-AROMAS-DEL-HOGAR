/* =========================================================
   CONFIGURACIÓN — EDITÁ ACÁ TUS DATOS
   ========================================================= */

// Tu número de WhatsApp con código de país (54) + 9 + código de área + número.
const WHATSAPP_NUMBER = "5491164985550";

// Info de envíos que se muestra en el panel de pedido y se agrega al mensaje de WhatsApp.
const SHIPPING_INFO = "Envío gratis a CABA y GBA en compras superiores a $50.000. Por debajo de ese monto, se coordina un punto de entrega.";

/* =========================================================
   CATÁLOGO — Categoría → Subgrupo → Aromas/ítems.
   - foto/icon: foto en null = usa el ícono.
   - subgrupos[].precio: precio único para TODOS los ítems del subgrupo (ej: cualquier
     aroma de Tibetanos cuesta lo mismo). Dejalo en "Consultar" si todavía no está definido.
   - items: lista de aromas/variantes. Si un ítem puntual tiene su propio precio distinto
     al del subgrupo (ej: Porta Sahumerios según material), agregale `precio` a ESE ítem
     y va a pisar el precio general del subgrupo.
   ========================================================= */
// =========================================================
// CONEXIÓN A SUPABASE — completá con los datos de tu proyecto
// =========================================================
const SUPABASE_URL = "https://hvjxosjkfrqgglcfjchb.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2anhvc2prZnJxZ2dsY2ZqY2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwNzkzODksImV4cCI6MjEwMTY1NTM4OX0.PS_XsP3ababhIhdviNAWUEiAVFJ7L4I60M0cuoo9RFI";

let CATEGORIES = [];

async function cargarCatalogoDesdeSupabase(){
  const headers = { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY };

  const [catsRes, subsRes, itemsRes] = await Promise.all([
    fetch(SUPABASE_URL + "/rest/v1/categorias?select=*&order=numero", { headers }),
    fetch(SUPABASE_URL + "/rest/v1/subgrupos?select=*", { headers }),
    fetch(SUPABASE_URL + "/rest/v1/items?select=*", { headers })
  ]);

  const cats = await catsRes.json();
  const subs = await subsRes.json();
  const items = await itemsRes.json();

  CATEGORIES = cats.map(c => ({
    id: c.id, num: c.numero, titulo: c.titulo, texto: c.texto,
    foto: c.foto, icon: c.icono, reverse: false,
    subgrupos: subs.filter(s => s.categoria_id === c.id).map(s => ({
      nombre: s.nombre, desc: s.descripcion, foto: s.foto, icon: s.icono, precio: s.precio,
      items: items.filter(it => it.subgrupo_id === s.id).map(it => ({
        nombre: it.nombre, precio: it.precio || undefined, foto: it.foto || undefined
      }))
    }))
  }));
}

const ICONS = {
  incienso: '<path d="M8 21h8M9 21c0-5 1-6 1-9M15 21c0-5-1-6-1-9M10 12c-1-3 0-5 2-8 2 3 3 5 2 8"/>',
  base: '<path d="M4 19h16M6 19l1-4h10l1 4M9 15V9a3 3 0 016 0v6"/>',
  hornillo: '<path d="M7 8c0 3 2.2 5 5 5s5-2 5-5"/><path d="M12 13v4"/><path d="M8 21c0-2.2 1.8-4 4-4s4 1.8 4 4"/><path d="M9.5 3.5c0 1 .8 1 .8 2s-.8 1-.8 2M14.5 3.5c0 1-.8 1-.8 2s.8 1 .8 2"/>',
  velita: '<path d="M6 13.5h12V18a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 18v-4.5z"/><ellipse cx="12" cy="13.5" rx="6" ry="1.6"/><path d="M12 9.5c1.2-1.1 1.2-2.2 0-4.2-1.2 2-1.2 3.1 0 4.2z"/>',
  esencia: '<rect x="9" y="9.5" width="6" height="9.5" rx="1.4"/><path d="M10.4 9.5V5.8a1.6 1.6 0 013.2 0V9.5"/><path d="M12 3v1.6"/>',
  cascada: '<path d="M12 2c2 3 1 4-1 6s-3 3-1 6 1 4-1 6"/><path d="M4 21h16"/>',
  vela: '<path d="M9 21V10a3 3 0 016 0v11"/><path d="M6 21h12"/><path d="M12 7c1-1 1-2 0-4-1 2-1 3 0 4z"/>',
  difusor: '<path d="M8 21h8M9 21l-1-9a2 2 0 012-2h4a2 2 0 012 2l-1 9"/><path d="M10 10V6a2 2 0 014 0v4"/><path d="M9 3l3 2 3-2"/>',
  enchufe: '<rect x="7" y="3" width="10" height="14" rx="2"/><path d="M10 7v3M14 7v3M12 17v4M9 21h6"/>',
  spray: '<path d="M9 21V9a2 2 0 012-2h2a2 2 0 012 2v12"/><path d="M8 21h8"/><path d="M11 7V4h2v3"/><path d="M15 5l3-1M15 7l3 1M15 3l3-2"/>',
  auto: '<path d="M4 16l1.5-5A2 2 0 017.4 9.5h9.2A2 2 0 0118.5 11L20 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="18" r="1"/><circle cx="16.5" cy="18" r="1"/>',
  textil: '<path d="M8 4l-4 2 2 3h2v11h8V9h2l2-3-4-2c0 1.5-1.3 2.5-4 2.5S8 5.5 8 4z"/>',
  botella: '<path d="M10 2h4v3l2 2v13a2 2 0 01-2 2h-4a2 2 0 01-2-2V7l2-2V2z"/><path d="M9 12h6"/>'
};

/* =========================================================
   CARRITO — persistido en localStorage
   ========================================================= */
let cart = {};
try {
  cart = JSON.parse(localStorage.getItem('rm_cart') || '{}');
} catch (e) {
  cart = {};
}

function slug(str){
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}
function itemId(catTitulo, subNombre, itemNombre){
  return slug(catTitulo) + '__' + slug(subNombre) + '__' + slug(itemNombre);
}
function effectivePrice(item, sub){
  return item.precio || sub.precio || 'Consultar';
}
function parsePriceNumber(precioStr){
  // Devuelve un número si el precio es fijo y único (ej: "$4.500" -> 4500).
  // Devuelve null si es "Consultar" o un rango (ej: "$15.000 – $20.000").
  if (!precioStr || precioStr === 'Consultar' || /[–-]/.test(precioStr)) return null;
  const digits = precioStr.replace(/[^0-9]/g, '');
  return digits ? parseInt(digits, 10) : null;
}
function formatARS(n){
  return '$' + n.toLocaleString('es-AR');
}
function saveCart(){
  try { localStorage.setItem('rm_cart', JSON.stringify(cart)); } catch(e) {}
}
function cartTotalQty(){
  return Object.values(cart).reduce((sum, it) => sum + it.qty, 0);
}
function setQty(id, meta, qty){
  qty = Math.max(0, qty);
  if (qty === 0){
    delete cart[id];
  } else {
    cart[id] = Object.assign({}, meta, { qty: qty });
  }
  saveCart();
  updateQtyUI(id, qty);
  updateCartBadge();
  renderCartDrawer();
}

function updateQtyUI(id, qty){
  document.querySelectorAll('[data-id="' + CSS.escape(id) + '"]').forEach(row => {
    const val = row.querySelector('.qty-val');
    if (val) val.textContent = qty;
    row.classList.toggle('active', qty > 0);
  });
  const rowEl = document.querySelector('.item-row[data-id="' + CSS.escape(id) + '"]');
  const sub = rowEl ? rowEl.closest('.subgroup-body') : null;
  if (sub) updateSubgroupCount(sub);
}

function updateSubgroupCount(bodyEl){
  const head = bodyEl.previousElementSibling;
  const countEl = head ? head.querySelector('.subgroup-count') : null;
  if (!countEl) return;
  let total = 0;
  bodyEl.querySelectorAll('.item-row').forEach(row => {
    total += parseInt((row.querySelector('.qty-val') || {}).textContent || '0', 10);
  });
  if (total > 0){
    countEl.textContent = total + (total > 1 ? ' seleccionados' : ' seleccionado');
    countEl.classList.add('has-items');
  } else {
    countEl.textContent = '';
    countEl.classList.remove('has-items');
  }
}

function updateCartBadge(){
  const badge = document.getElementById('cartBadge');
  const total = cartTotalQty();
  badge.textContent = total;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 200);
}

function cartSubtotal(){
  let total = 0;
  let sinPrecio = 0;
  Object.values(cart).forEach(it => {
    const n = parsePriceNumber(it.precio);
    if (n === null){ sinPrecio += it.qty; }
    else { total += n * it.qty; }
  });
  return { total, sinPrecio };
}

function buildOrderMessage(){
  const lines = Object.values(cart).map(it => '• ' + it.qty + 'x ' + it.subgrupo + ' — ' + it.nombre + ' (' + it.precio + ')');
  const { total, sinPrecio } = cartSubtotal();
  let totalLine = '\n\nSubtotal: ' + formatARS(total);
  if (sinPrecio > 0){
    totalLine += ' + ' + sinPrecio + ' producto(s) a precio a consultar';
  }
  return 'Hola! Quiero hacer este pedido:\n\n' + lines.join('\n') + totalLine + '\n\n' + SHIPPING_INFO + '\n\n¡Gracias!';
}

function renderCartDrawer(){
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  const countEl = document.getElementById('cartCount');
  const items = Object.entries(cart);

  if (items.length === 0){
    body.innerHTML = '<p class="cart-empty">Todavía no agregaste productos. Elegí cantidades desde el catálogo y van a aparecer acá.</p>';
    foot.hidden = true;
    return;
  }

  body.innerHTML = items.map(([id, it]) => `
    <div class="cart-row">
      <div class="cart-row-info">
        <div class="cart-row-name">${it.qty}x ${it.nombre}</div>
        <div class="cart-row-sub">${it.categoria} · ${it.subgrupo} · ${it.precio}</div>
      </div>
      <button class="cart-row-remove" data-remove="${id}" aria-label="Quitar">&times;</button>
    </div>
  `).join('');
  foot.hidden = false;
  countEl.textContent = cartTotalQty();

  const { total, sinPrecio } = cartSubtotal();
  const totalsEl = document.getElementById('cartTotals');
  let totalsHtml = `<span class="cart-total-amount">Subtotal: ${formatARS(total)}</span>`;
  if (sinPrecio > 0){
    totalsHtml += `<span class="cart-total-note">+ ${sinPrecio} producto${sinPrecio > 1 ? 's' : ''} a precio a consultar</span>`;
  }
  totalsEl.innerHTML = totalsHtml;

  body.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove');
      setQty(id, cart[id], 0);
    });
  });

  document.getElementById('cartSendWa').href = waLink(buildOrderMessage());
}

/* ================== RENDER CATÁLOGO ================== */
function waLink(mensaje){
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(mensaje);
}

function mediaBlock(foto, icon, alt, cls){
  if (foto){
    return `<div class="${cls}"><img src="${foto}" alt="${alt}" loading="lazy"></div>`;
  }
  return `<div class="${cls}"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[icon] || ICONS.base}</svg></div>`;
}

function render(){
  const main = document.getElementById('catalogo');
  main.innerHTML = CATEGORIES.map(cat => {
    const fotoBlock = cat.foto
      ? `<div class="cat-photo"><img src="${cat.foto}" alt="${cat.titulo}" loading="lazy"></div>`
      : `<div class="cat-icon-box"><svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[cat.icon]}</svg></div>`;

    const subgroupsHtml = cat.subgrupos.map((sub, idx) => {
      const itemsHtml = sub.items.map(item => {
        const id = itemId(cat.titulo, sub.nombre, item.nombre);
        const qty = (cart[id] && cart[id].qty) || 0;
        const precio = effectivePrice(item, sub);
        return `
          <li class="item-row ${qty > 0 ? 'active' : ''}" data-id="${id}">
            ${item.foto ? `<div class="item-thumb"><img src="${item.foto}" alt="${item.nombre}" loading="lazy"></div>` : ''}
            <div class="item-info">
              <span class="item-name">${item.nombre}</span>
              <span class="item-price">${precio === 'Consultar' ? 'Consultar precio' : precio}</span>
            </div>
            <div class="qty-control">
              <button class="qty-btn minus" data-action="minus" data-id="${id}" aria-label="Restar">−</button>
              <span class="qty-val">${qty}</span>
              <button class="qty-btn plus" data-action="plus" data-id="${id}" aria-label="Sumar">+</button>
            </div>
          </li>
        `;
      }).join('');

      return `
        <div class="subgroup ${idx === 0 ? 'open' : ''}">
          <button class="subgroup-head" type="button">
            ${mediaBlock(sub.foto, sub.icon, sub.nombre, 'subgroup-media')}
            <div class="subgroup-title-wrap">
              <div class="subgroup-name">${sub.nombre}</div>
              <div class="subgroup-count"></div>
            </div>
            <svg class="chev" viewBox="0 0 24 24" width="20" height="20"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="subgroup-body">
            <p class="subgroup-desc">${sub.desc}</p>
            <ul class="item-list">${itemsHtml}</ul>
          </div>
        </div>
      `;
    }).join('');

    return `
      <section class="category" id="${cat.id}">
        <div class="wrap">
          <div class="cat-head ${cat.reverse ? 'reverse' : ''}">
            ${fotoBlock}
            <div class="cat-info">
              <span class="num serif">${cat.num}</span>
              <h2>${cat.titulo}</h2>
              <p>${cat.texto}</p>
            </div>
          </div>
          <div class="subgroups">${subgroupsHtml}</div>
        </div>
      </section>
    `;
  }).join('');

  document.querySelectorAll('.subgroup').forEach(sub => {
    const bodyEl = sub.querySelector('.subgroup-body');
    if (sub.classList.contains('open')){
      bodyEl.style.maxHeight = bodyEl.scrollHeight + 'px';
    }
  });
  document.querySelectorAll('.subgroup-head').forEach(head => {
    head.addEventListener('click', () => {
      const sub = head.closest('.subgroup');
      const bodyEl = sub.querySelector('.subgroup-body');
      const isOpen = sub.classList.toggle('open');
      bodyEl.style.maxHeight = isOpen ? bodyEl.scrollHeight + 'px' : null;
    });
  });

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const row = btn.closest('.item-row');
      const current = parseInt(row.querySelector('.qty-val').textContent, 10);
      const delta = btn.getAttribute('data-action') === 'plus' ? 1 : -1;
      const meta = findItemMeta(id);
      setQty(id, meta, current + delta);
      const bodyEl = row.closest('.subgroup-body');
      if (bodyEl && bodyEl.closest('.subgroup').classList.contains('open')){
        bodyEl.style.maxHeight = bodyEl.scrollHeight + 'px';
      }
    });
  });

  document.querySelectorAll('.subgroup-body').forEach(updateSubgroupCount);

  const genericLink = waLink('Hola! Quiero consultar el catálogo de RM Aromas para el Hogar.');
  document.querySelectorAll('#navWaBtn, .hero-wa-link, .cta-wa-link, .foot-wa-link, #floatWa').forEach(el => {
    el.href = genericLink;
  });

  updateCartBadge();
  renderCartDrawer();
}

function findItemMeta(id){
  for (const cat of CATEGORIES){
    for (const sub of cat.subgrupos){
      for (const item of sub.items){
        if (itemId(cat.titulo, sub.nombre, item.nombre) === id){
          return { nombre: item.nombre, precio: effectivePrice(item, sub), subgrupo: sub.nombre, categoria: cat.titulo };
        }
      }
    }
  }
  return null;
}

cargarCatalogoDesdeSupabase().then(render);

/* ================== MOBILE MENU ================== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ================== CART DRAWER OPEN/CLOSE ================== */
const floatCart = document.getElementById('floatCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const cartClear = document.getElementById('cartClear');

function openCart(){
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
}
function closeCart(){
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
}
floatCart.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
cartClear.addEventListener('click', () => {
  Object.keys(cart).forEach(id => {
    delete cart[id];
    updateQtyUI(id, 0);
  });
  saveCart();
  updateCartBadge();
  renderCartDrawer();
});
