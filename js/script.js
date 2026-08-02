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
const CATEGORIES = [
  {
    id: "cat-sahumerios",
    num: "01",
    titulo: "Sahumerios & Accesorios",
    texto: "Sahumerios en distintas fragancias, más todo lo necesario para quemarlos: porta sahumerios y conos cascada.",
    foto: "images/porta-sahumerios-generico.jpg",
    icon: "incienso",
    reverse: false,
    subgrupos: [
      {
        nombre: "Sahumerios Aromanza Tibetanos",
        desc: "Varillas largas, combustión pareja y prolongada.",
        foto: "images/aromanza-tibetanos.jpg",
        icon: "incienso",
        precio: "$4.500",
        items: [
          { nombre: "Real Champa" }, { nombre: "Vainillas Encantadas" }, { nombre: "Néctar de los Dioses" },
          { nombre: "Energía Limpia" }, { nombre: "Diamante Negro" }, { nombre: "Premium Lemon" },
          { nombre: "Dulces Frutillas" }, { nombre: "Frutos Rojos" }, { nombre: "Coco Nut" },
          { nombre: "Coco Vainilla" }, { nombre: "Chocolate" }, { nombre: "Capuchino" },
          { nombre: "Chocolate Dubai" }, { nombre: "Citronela" }, { nombre: "Mix de Fragancias" }
        ]
      },
      {
        nombre: "Sahumerios Aromanza Slim",
        desc: "Varillas finas, mismas fragancias que la línea Tibetanos.",
        foto: "images/aromanza-tibetanos.jpg",
        icon: "incienso",
        precio: "$3.500",
        items: [
          { nombre: "Real Champa" }, { nombre: "Vainillas Encantadas" }, { nombre: "Néctar de los Dioses" },
          { nombre: "Energía Limpia" }, { nombre: "Diamante Negro" }, { nombre: "Premium Lemon" },
          { nombre: "Dulces Frutillas" }, { nombre: "Frutos Rojos" }, { nombre: "Coco Nut" },
          { nombre: "Coco Vainilla" }, { nombre: "Chocolate" }, { nombre: "Capuchino" },
          { nombre: "Chocolate Dubai" }, { nombre: "Citronela" }, { nombre: "Mix de Fragancias" }
        ]
      },
      {
        nombre: "Sahumerios Aromanza Élixir — Edición de Lujo",
        desc: "Inspirados en grandes perfumes.",
        foto: "images/aromanza-elixir.jpg",
        icon: "incienso",
        precio: "$4.000",
        items: [
          { nombre: "Opium Black" }, { nombre: "Scandal" }, { nombre: "Invictus" },
          { nombre: "One Millón" }, { nombre: "212" }, { nombre: "La Vie Belle" }
        ]
      },
      {
        nombre: "Porta Sahumerios",
        desc: "Elegí el material.",
        foto: "images/porta-sahumerios-generico.jpg",
        icon: "base",
        precio: "Consultar",
        items: [
          { nombre: "Plástico", precio: "$800" },
          { nombre: "Madera", precio: "$1.600" },
          { nombre: "Cerámica", precio: "$2.000" }
        ]
      },
      {
        nombre: "Conos Cascada (Backflow)",
        desc: "Efecto cascada de humo, distintas personalidades/aromas.",
        foto: "images/aromanza-cascada.jpg",
        icon: "cascada",
        precio: "Consultar",
        items: [
          { nombre: "Templanza" }, { nombre: "Inspiración" }, { nombre: "Transformación" },
          { nombre: "Empoderamiento" }, { nombre: "Bienestar" }, { nombre: "Espiritualidad" },
          { nombre: "Sabiduría" }, { nombre: "Meditación" }
        ]
      }
    ]
  },
  {
    id: "cat-velas",
    num: "02",
    titulo: "Velas Aromáticas",
    texto: "Velas perfumadas para cada ambiente, acompañadas de porta velas para lucirlas en cualquier rincón de la casa.",
    foto: "images/velas.jpg",
    icon: "vela",
    reverse: true,
    subgrupos: [
      {
        nombre: "Velas Chicas",
        desc: "Ideal para baños y espacios pequeños.",
        foto: null,
        icon: "vela",
        precio: "Consultar",
        items: [ { nombre: "Aroma a definir 1" }, { nombre: "Aroma a definir 2" } ]
      },
      {
        nombre: "Velas Grandes",
        desc: "Mayor duración, fragancia envolvente.",
        foto: null,
        icon: "vela",
        precio: "Consultar",
        items: [ { nombre: "Aroma a definir 1" }, { nombre: "Aroma a definir 2" } ]
      },
      {
        nombre: "Porta Velas",
        desc: "Diseños en vidrio y cerámica.",
        foto: null,
        icon: "base",
        precio: "Consultar",
        items: [ { nombre: "Modelo Vidrio" }, { nombre: "Modelo Cerámica" } ]
      },
      {
        nombre: "Hornillos",
        desc: "Quemador para calentar esencias o velas para hornillo y perfumar el ambiente.",
        foto: "images/hornillo.jpg",
        icon: "hornillo",
        precio: "Consultar",
        items: [ { nombre: "Modelo único" } ]
      },
      {
        nombre: "Velas para Hornillos",
        desc: "Velas chicas calentadoras, para usar dentro del hornillo.",
        foto: "images/velas-hornillo.jpg",
        icon: "velita",
        precio: "Consultar",
        items: [ { nombre: "Aroma a definir 1" }, { nombre: "Aroma a definir 2" } ]
      },
      {
        nombre: "Esencias para Hornillos",
        desc: "Aceites esenciales para usar en el hornillo.",
        foto: "images/esencias-hornillo.jpg",
        icon: "esencia",
        precio: "Consultar",
        items: [
          { nombre: "Lavanda" }, { nombre: "Eucalipto" }, { nombre: "Menta" },
          { nombre: "Árbol de Té" }, { nombre: "Sándalo" }
        ]
      }
    ]
  },
  {
    id: "cat-difusores",
    num: "03",
    titulo: "Difusores & Dispersores",
    texto: "Difusores de varillas de bambú en dos tamaños, más los aparatos para dispersar aroma sin llama.",
    foto: "images/difusores.jpg",
    icon: "difusor",
    reverse: false,
    subgrupos: [
      {
        nombre: "Difusor Aromanza 60ml",
        desc: "Varillas de bambú, tamaño chico.",
        foto: "images/aromanza-difusores.jpg",
        icon: "difusor",
        precio: "$4.000",
        items: [
          { nombre: "Hawuai" }, { nombre: "Premium Lemon" }, { nombre: "Naranja Pimienta" },
          { nombre: "Mix Citric" }, { nombre: "Cereza y Pachuli" }, { nombre: "Gardenias" },
          { nombre: "Flores Blancas" }, { nombre: "Granada Mediterránea" }, { nombre: "Vainilla" }, { nombre: "Coco" }
        ]
      },
      {
        nombre: "Difusor Aromanza 120ml",
        desc: "Varillas de bambú, tamaño grande.",
        foto: "images/aromanza-difusores.jpg",
        icon: "difusor",
        precio: "$7.000",
        items: [
          { nombre: "Hawuai" }, { nombre: "Premium Lemon" }, { nombre: "Naranja Pimienta" },
          { nombre: "Mix Citric" }, { nombre: "Cereza y Pachuli" }, { nombre: "Gardenias" },
          { nombre: "Flores Blancas" }, { nombre: "Granada Mediterránea" }, { nombre: "Vainilla" }, { nombre: "Coco" }
        ]
      },
      {
        nombre: "Difusor Analógico (para Aerosol)",
        desc: "Aparato dispersor automático, funciona con las latas de aerosol para ambiente.",
        foto: "images/difusor-analogico.jpg",
        icon: "enchufe",
        precio: "$15.000 – $20.000",
        items: [ { nombre: "Modelo único" } ]
      },
      {
        nombre: "Difusor de Aromas Touch (Kit Completo)",
        desc: "Kit completo listo para usar: aparato + repuesto.",
        foto: "images/saphirus-touch-kit.jpg",
        icon: "enchufe",
        precio: "$5.000",
        items: [ { nombre: "Agua Marina" } ]
      },
      {
        nombre: "Repuesto Difusor Touch",
        desc: "Repuesto para el difusor touch.",
        foto: "images/saphirus-touch-repuesto.jpg",
        icon: "enchufe",
        precio: "$3.500",
        items: [ { nombre: "Agua Marina" } ]
      }
    ]
  },
  {
    id: "cat-sprays",
    num: "04",
    titulo: "Sprays & Aromatizantes",
    texto: "Aromatizantes de telas, aerosoles para ambiente y perfumadores para el auto.",
    foto: "images/aromatizantes.jpg",
    icon: "spray",
    reverse: true,
    subgrupos: [
      {
        nombre: "Aromatizante de Telas Saphirus",
        desc: "Para cortinas, sommiers, sábanas y ropa.",
        foto: "images/aromatizantes.jpg",
        icon: "textil",
        precio: "$4.500",
        items: [ { nombre: "Colección Disney" }, { nombre: "Rocío" }, { nombre: "Cony" } ]
      },
      {
        nombre: "Aromatizante de Telas Aromanza",
        desc: "Perfuma telas y ambientes.",
        foto: "images/aromanza-textil.jpg",
        icon: "textil",
        precio: "$6.000",
        items: [ { nombre: "Aroma a definir 1" }, { nombre: "Aroma a definir 2" }, { nombre: "Aroma a definir 3" } ]
      },
      {
        nombre: "Aerosol Ambiente Saphirus",
        desc: "Para ambientar cualquier habitación al instante.",
        foto: "images/saphirus-aerosol.jpg",
        icon: "spray",
        precio: "$6.000",
        items: [ { nombre: "Blue" }, { nombre: "One Million" }, { nombre: "Maracuyá" } ]
      },
      {
        nombre: "Aerosol Ambiente Aromanza",
        desc: "Para ambientar cualquier habitación al instante.",
        foto: "images/aromatizantes.jpg",
        icon: "spray",
        precio: "$7.000",
        items: [ { nombre: "Aroma a definir 1" }, { nombre: "Aroma a definir 2" }, { nombre: "Aroma a definir 3" } ]
      },
      {
        nombre: "Aromatizante para Auto Aromanza",
        desc: "Colgante para espejo retrovisor, larga duración.",
        foto: "images/aromanza-auto-sport.jpg",
        icon: "auto",
        precio: "$7.000",
        items: [
          { nombre: "Autosport" }, { nombre: "Uva" }, { nombre: "Hawuai" },
          { nombre: "Premium Lemon" }, { nombre: "Vainilla" }
        ]
      }
    ]
  },
  {
    id: "cat-limpieza",
    num: "05",
    titulo: "Línea Limpieza",
    texto: "Líquidos concentrados de limpieza, rendidores y perfumados, para dejar tu hogar impecable.",
    foto: "images/limpieza-generico.jpg",
    icon: "botella",
    reverse: false,
    subgrupos: [
      {
        nombre: "Concentrado Multisuperficies Shiny",
        desc: "Fórmula concentrada, rinde mucho más diluido.",
        foto: "images/shiny-mix-citrico.jpg",
        icon: "botella",
        precio: "Consultar",
        items: [
          { nombre: "Mix Cítrico", foto: "images/shiny-mix-citrico.jpg" },
          { nombre: "Pétalos Florales", foto: "images/shiny-petalos-florales.jpg" },
          { nombre: "Tropical", foto: "images/shiny-tropical.jpg" },
          { nombre: "Frutos Rojos", foto: "images/shiny-frutos-rojos.jpg" },
          { nombre: "Marina", foto: "images/shiny-marina.jpg" },
          { nombre: "Lavanda", foto: "images/shiny-lavanda.jpg" },
          { nombre: "Bebé", foto: "images/shiny-bebe.jpg" },
          { nombre: "Bamboo", foto: "images/shiny-bamboo.jpg" }
        ]
      },
      {
        nombre: "Concentrado para Pisos Shiny",
        desc: "Perfuma y limpia en profundidad.",
        foto: null,
        icon: "botella",
        precio: "Consultar",
        items: [ { nombre: "Presentación única" } ]
      },
      {
        nombre: "Limpiavidrios Shiny",
        desc: "Limpia sin dejar vetas, listo para usar.",
        foto: "images/shiny-limpiavidrios.jpg",
        icon: "botella",
        precio: "Consultar",
        items: [ { nombre: "Limpiavidrios & Multiusos" } ]
      },
      {
        nombre: "Desengrasante para Cocinas Shiny",
        desc: "Elimina la grasa más resistente.",
        foto: "images/shiny-desengrasante.jpg",
        icon: "botella",
        precio: "Consultar",
        items: [ { nombre: "Desengrasante" } ]
      }
    ]
  }
];

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

render();

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
