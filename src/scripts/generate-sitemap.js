const fs = require('fs');
// Mock ENV for script since we can't import TS directly in JS node script easily without ts-node
const ENV = {
  baseUrl: 'https://stayarta.com'
};

const routes = [
  '',
  '/servicios',
  '/servicios/automatizacion',
  '/servicios/digital',
  '/servicios/consultoria',
  '/nova',
  '/nova/command-center',
  '/business/distribucion',
  '/business/dropshipping',
  '/business/marca-blanca',
  '/design-system',
  '/launch-sprint'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${ENV.baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  // Ensure public directory exists
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
  }

  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('✅ Sitemap generado correctamente');
};

generateSitemap();