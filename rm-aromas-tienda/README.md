# RM · Aromas para el Hogar — Sitio de catálogo

Sitio de una sola página (`index.html`) para mostrar el catálogo y recibir pedidos por WhatsApp.

## Estructura

```
rm-aromas-tienda/
├── index.html          <- estructura de la página (HTML)
├── css/
│   └── style.css       <- todos los estilos (colores, tipografía, layout)
├── js/
│   └── script.js       <- catálogo de productos, precios y lógica del sitio
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── sahumerios.jpg
│   ├── velas.jpg
│   ├── difusores.jpg
│   └── aromatizantes.jpg
└── README.md
```

## Cómo editar

Para cambiar textos o estructura: `index.html`.
Para cambiar colores, tipografía o estilos: `css/style.css`.
Para cambiar productos, precios, fotos o el número de WhatsApp: `js/script.js`.

Abrí `js/script.js` con cualquier editor de texto (Bloc de notas, VS Code, etc.) y buscá el bloque
`CONFIGURACIÓN — EDITÁ ACÁ TUS DATOS` al principio del archivo.

- **WhatsApp**: ya está cargado con `5491164985550` (54 9 11 6498-5550).
- **Precios**: cada producto tiene `precio: "Consultar"`. Cambialo por un valor fijo, por ejemplo `precio: "$5.500"`.
- **Fotos de producto**: cada producto tiene `foto: null`, que muestra un ícono como marcador de posición.
  Para poner una foto real:
  1. Subí la imagen a la carpeta `images/` (ej: `images/sahumerio-lavanda.jpg`).
  2. Cambiá `foto: null` por `foto: "images/sahumerio-lavanda.jpg"` en el producto correspondiente.
- **Nuevas categorías o productos**: copiá y pegá un bloque `{ ... }` dentro del array `CATEGORIES` o `productos` y completá los datos.
- **Aromas/variantes de un producto**: cada producto tiene `variantes: []`. Completalo con una lista,
  por ejemplo `variantes: ["Lavanda", "Sándalo", "Vainilla"]`, y se muestran como chips debajo de la descripción.

## Próximo paso

Vamos a armar una planilla (tipo Excel) con el listado completo de productos y sus aromas
(sahumerios y sus fragancias, difusores y sus fragancias, etc.). Con esa planilla se completa
el campo `variantes` de cada producto y se suman las fotos que falten en `images/`.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Sitio RM Aromas para el Hogar"
git branch -M main
git remote add origin <URL-de-tu-repositorio>
git push -u origin main
```

## Publicarlo gratis (GitHub Pages)

1. En GitHub, andá a **Settings → Pages**.
2. En "Source" elegí la rama `main` y la carpeta `/ (root)`.
3. Guardá. En unos minutos el sitio queda online en `https://tu-usuario.github.io/tu-repositorio/`.
