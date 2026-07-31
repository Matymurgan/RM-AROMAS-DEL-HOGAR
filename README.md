# RM · Aromas para el Hogar — Sitio de catálogo

Sitio de una sola página (`index.html`) para mostrar el catálogo y recibir pedidos por WhatsApp.

## Estructura

```
rm-aromas-tienda/
├── index.html          <- el sitio completo (HTML + CSS + JS en un solo archivo)
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

Abrí `index.html` con cualquier editor de texto (Bloc de notas, VS Code, etc.) y buscá el bloque
`CONFIGURACIÓN — EDITÁ ACÁ TUS DATOS` cerca del final del archivo.

- **WhatsApp**: ya está cargado con `5491164985550` (54 9 11 6498-5550).
- **Precios**: cada producto tiene `precio: "Consultar"`. Cambialo por un valor fijo, por ejemplo `precio: "$5.500"`.
- **Fotos de producto**: cada producto tiene `foto: null`, que muestra un ícono como marcador de posición.
  Para poner una foto real:
  1. Subí la imagen a la carpeta `images/` (ej: `images/sahumerio-lavanda.jpg`).
  2. Cambiá `foto: null` por `foto: "images/sahumerio-lavanda.jpg"` en el producto correspondiente.
- **Nuevas categorías o productos**: copiá y pegá un bloque `{ ... }` dentro del array `CATEGORIES` o `productos` y completá los datos.

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
