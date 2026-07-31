/* =========================================================
   CONFIGURACIÓN — EDITÁ ACÁ TUS DATOS
   ========================================================= */

// 1) Tu número de WhatsApp con código de país (54) + 9 + código de área + número.
const WHATSAPP_NUMBER = "5491164985550";

// 2) Categorías y productos.
//    foto: dejalo en null para mostrar un ícono, o poné la ruta de una imagen
//    (ej: "images/sahumerio-lavanda.jpg") una vez que la subas a la carpeta /images.
//    precio: "Consultar"  -> se muestra "Consultar precio"
//    precio: "$5.500"     -> se muestra ese precio fijo
//    variantes: lista opcional de aromas/colores disponibles (se muestra como chips debajo
//    de la descripción). Dejala en [] si todavía no tenés el listado — la vamos a completar
//    con la planilla de aromas.
const CATEGORIES = [
  {
    id: "cat-sahumerios",
    num: "01",
    titulo: "Sahumerios & Accesorios",
    texto: "Líneas Aromanza en distintas fragancias, más todo lo necesario para quemarlos: porta sahumerios, conitos y cascadas de humo.",
    foto: "images/aromanza-tibetanos.jpg",
    icon: "incienso",
    reverse: false,
    productos: [
      { nombre: "Sahumerios Tibetanos", desc: "Línea Aromanza, varillas largas de combustión pareja.", precio: "Consultar", icon: "incienso", foto: "images/aromanza-tibetanos.jpg", variantes: [] },
      { nombre: "Sahumerios Élixir — Edición de Lujo", desc: "Inspirados en grandes perfumes: Vie Belle, 212, Opium de YSL, Scandal, One Million, Invictus.", precio: "Consultar", icon: "incienso", foto: "images/aromanza-elixir.jpg", variantes: ["Vie Belle","212","Opium de YSL","Scandal","One Million","Invictus"] },
      { nombre: "Porta Sahumerios", desc: "Base en cerámica o madera, distintos diseños.", precio: "Consultar", icon: "base", foto: null, variantes: [] },
      { nombre: "Conos Cascada (Backflow)", desc: "Efecto cascada de humo, 12 variantes/personalidades distintas.", precio: "Consultar", icon: "cascada", foto: "images/aromanza-cascada.jpg", variantes: [] }
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
    productos: [
      { nombre: "Vela Aromática Chica", desc: "Ideal para baños y espacios pequeños.", precio: "Consultar", icon: "vela", foto: null, variantes: [] },
      { nombre: "Vela Aromática Grande", desc: "Mayor duración, fragancia envolvente.", precio: "Consultar", icon: "vela", foto: null, variantes: [] },
      { nombre: "Porta Velas", desc: "Diseños en vidrio y cerámica.", precio: "Consultar", icon: "base", foto: null, variantes: [] }
    ]
  },
  {
    id: "cat-difusores",
    num: "03",
    titulo: "Difusores & Dispersores",
    texto: "Difusores de varillas con esencia concentrada y aparatos eléctricos para dispersar aroma de forma continua.",
    foto: "images/aromanza-difusores.jpg",
    icon: "difusor",
    reverse: false,
    productos: [
      { nombre: "Difusor de Varillas Saphirus", desc: "Frasco de vidrio + varillas de ratán, aroma constante.", precio: "Consultar", icon: "difusor", foto: "images/difusores.jpg", variantes: [] },
      { nombre: "Difusores Aromanza", desc: "Varios colores y fragancias, incluido Candy Grape.", precio: "Consultar", icon: "difusor", foto: "images/aromanza-difusores.jpg", variantes: ["Candy Grape"] },
      { nombre: "Aparato Difusor Eléctrico", desc: "Dispersor ultrasónico para ambientar sin llama.", precio: "Consultar", icon: "enchufe", foto: null, variantes: [] }
    ]
  },
  {
    id: "cat-sprays",
    num: "04",
    titulo: "Sprays & Aromatizantes",
    texto: "Aerosoles para ambientes, textiles y auto: perfumá cortinas, sommiers, el interior del auto y más.",
    foto: "images/aromatizantes.jpg",
    icon: "spray",
    reverse: true,
    productos: [
      { nombre: "Aerosol / Room Spray Saphirus", desc: "Para ambientar cualquier habitación al instante.", precio: "Consultar", icon: "spray", foto: "images/aromatizantes.jpg", variantes: [] },
      { nombre: "Aromatizante Ambiente/Textil Aromanza", desc: "Perfuma telas y ambientes, varias fragancias.", precio: "Consultar", icon: "textil", foto: "images/aromanza-textil.jpg", variantes: [] },
      { nombre: "Aromatizante para Auto Aromanza", desc: "Colgante para espejo retrovisor, larga duración.", precio: "Consultar", icon: "auto", foto: "images/aromanza-auto-sport.jpg", variantes: ["Auto Sport","Dulce Uva","Citric Lemon"] },
      { nombre: "Aromatizante Textil Saphirus", desc: "Para cortinas, sommiers, sábanas y ropa.", precio: "Consultar", icon: "textil", foto: null, variantes: [] }
    ]
  },
  {
    id: "cat-limpieza",
    num: "05",
    titulo: "Línea Limpieza Shiny",
    texto: "Líquidos concentrados de limpieza Shiny, rendidores y perfumados, para dejar tu hogar impecable.",
    foto: null,
    icon: "botella",
    reverse: false,
    productos: [
      { nombre: "Concentrado Multiuso Shiny", desc: "Alto rendimiento, diluible según uso.", precio: "Consultar", icon: "botella", foto: null, variantes: [] },
      { nombre: "Concentrado para Pisos Shiny", desc: "Perfuma y limpia en profundidad.", precio: "Consultar", icon: "botella", foto: null, variantes: [] }
    ]
  }
];

const ICONS = {
  incienso: '<path d="M8 21h8M9 21c0-5 1-6 1-9M15 21c0-5-1-6-1-9M10 12c-1-3 0-5 2-8 2 3 3 5 2 8"/>',
  base: '<path d="M4 19h16M6 19l1-4h10l1 4M9 15V9a3 3 0 016 0v6"/>',
  cono: '<path d="M12 3l4 15H8l4-15z"/><path d="M6 21h12"/>',
  cascada: '<path d="M12 2c2 3 1 4-1 6s-3 3-1 6 1 4-1 6"/><path d="M4 21h16"/>',
  vela: '<path d="M9 21V10a3 3 0 016 0v11"/><path d="M6 21h12"/><path d="M12 7c1-1 1-2 0-4-1 2-1 3 0 4z"/>',
  difusor: '<path d="M8 21h8M9 21l-1-9a2 2 0 012-2h4a2 2 0 012 2l-1 9"/><path d="M10 10V6a2 2 0 014 0v4"/><path d="M9 3l3 2 3-2"/>',
  enchufe: '<rect x="7" y="3" width="10" height="14" rx="2"/><path d="M10 7v3M14 7v3M12 17v4M9 21h6"/>',
  spray: '<path d="M9 21V9a2 2 0 012-2h2a2 2 0 012 2v12"/><path d="M8 21h8"/><path d="M11 7V4h2v3"/><path d="M15 5l3-1M15 7l3 1M15 3l3-2"/>',
  auto: '<path d="M4 16l1.5-5A2 2 0 017.4 9.5h9.2A2 2 0 0118.5 11L20 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><circle cx="7.5" cy="18" r="1"/><circle cx="16.5" cy="18" r="1"/>',
  textil: '<path d="M8 4l-4 2 2 3h2v11h8V9h2l2-3-4-2c0 1.5-1.3 2.5-4 2.5S8 5.5 8 4z"/>',
  botella: '<path d="M10 2h4v3l2 2v13a2 2 0 01-2 2h-4a2 2 0 01-2-2V7l2-2V2z"/><path d="M9 12h6"/>'
};

/* ================== RENDER ================== */
function waLink(mensaje){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

function mediaBlock(foto, icon, alt){
  if (foto){
    return `<div class="card-media"><img src="${foto}" alt="${alt}" loading="lazy"></div>`;
  }
  return `<div class="card-media"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[icon] || ICONS.base}</svg></div>`;
}

function render(){
  const main = document.getElementById('catalogo');
  main.innerHTML = CATEGORIES.map(cat => {
    const fotoBlock = cat.foto
      ? `<div class="cat-photo"><img src="${cat.foto}" alt="${cat.titulo}" loading="lazy"></div>`
      : `<div class="cat-icon-box"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[cat.icon]}</svg></div>`;

    const cards = cat.productos.map(p => `
      <div class="card">
        ${mediaBlock(p.foto, p.icon, p.nombre)}
        <div class="card-body">
          <h3>${p.nombre}</h3>
          <p>${p.desc}</p>
          ${(p.variantes && p.variantes.length) ? `<div class="chips">${p.variantes.map(v => `<span class="chip">${v}</span>`).join('')}</div>` : ''}
          <div class="card-foot">
            <span class="price">${p.precio === 'Consultar' ? 'Consultar precio' : `<span class="price-tag">${p.precio}</span>`}</span>
            <a class="ask-btn" target="_blank" rel="noopener" href="${waLink('Hola! Quiero consultar por: ' + p.nombre)}">
              Pedir
              <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.1-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1.7.3 1.2.4 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3c-.9-1.4-1.4-3-1.4-4.6 0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.4-8.5 8.4z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

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
          <div class="prod-grid">${cards}</div>
        </div>
      </section>
    `;
  }).join('');

  const genericLink = waLink('Hola! Quiero consultar el catálogo de RM Aromas para el Hogar.');
  document.querySelectorAll('#navWaBtn, .hero-wa-link, .cta-wa-link, .foot-wa-link, #floatWa').forEach(el => {
    el.href = genericLink;
  });
}
render();

/* ================== MOBILE MENU ================== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
