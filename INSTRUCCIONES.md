# Rica Pro PWA - Instrucciones de Deployment

## Antes de publicar — IMPORTANTE

### 1. Cambia tu número de WhatsApp
En `index.html`, busca esta línea (aparece 2 veces):
```
const phone = '573000000000';
```
Cámbiala por tu número real. Ejemplo para Colombia:
- Tu número: 315 123 4567
- Formato: `573151234567` (57 = código Colombia, sin el 0 inicial)

### 2. Actualiza los precios de productos
Busca en el HTML los precios y actualízalos según tus precios reales.

---

## Cómo publicar GRATIS en Vercel (5 pasos)

1. Ve a **vercel.com** y crea una cuenta gratis
2. Haz clic en **"Add New Project"**
3. Sube los 3 archivos: `index.html`, `manifest.json`, `sw.js`
4. Haz clic en **"Deploy"**
5. Vercel te da una URL como: `ricapro.vercel.app`

¡Listo! Comparte esa URL por WhatsApp con tus 20,000 contactos.

## Los 3 archivos que necesitas
- `index.html` — La app completa
- `manifest.json` — Para que funcione como app instalable
- `sw.js` — Para que funcione sin internet

## Funcionalidades incluidas
- ✅ 4 secciones: Inicio, Productos, Pedido, WhatsApp
- ✅ Catálogo de suplementos y snacks Rica
- ✅ Formulario de pedido completo (Nombre, CC, Teléfono, Dirección, Ciudad, Barrio, Producto, Valor)
- ✅ Envío automático del pedido por WhatsApp
- ✅ Registro de clientes por WhatsApp
- ✅ Colores Rica Pro (rojo, azul, blanco)
- ✅ Instalable como app en Android
- ✅ Funciona sin internet (modo offline)
- ✅ 100% en español
