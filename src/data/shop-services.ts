import { Box, Globe, TrendingUp, CheckCircle, Package, Truck, Headset, BarChart } from 'lucide-react';

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServicePageData {
  id: string;
  title: string;
  subtitle: string;
  hero_gradient: string; // CSS gradient class or hex
  description_long: string;
  benefits: string[];
  process: ServiceStep[];
  pricing_title?: string;
  cta_text: string;
  cta_link: string; // Usually links to a contact form or signup
}

export const SHOP_SERVICES_DB: Record<string, ServicePageData> = {
  'dropshipping': {
    id: 'dropshipping',
    title: 'Dropshipping Zero Riesgo',
    subtitle: 'Vende sin comprar inventario. Nosotros nos encargamos de la logística.',
    hero_gradient: 'from-[#00FFFF] to-[#0088FF]',
    description_long: 'El modelo ideal para validar ideas o iniciar tu primer negocio digital. Conectamos tu tienda directamente con nuestros almacenes. Cuando vendes, nosotros enviamos. Tú solo te preocupas por el marketing.',
    benefits: [
      'Sin inversión inicial en stock',
      'Catálogo con +10,000 productos virales',
      'Envíos en 24/48 horas a todo el país',
      'Marca blanca: Tus clientes nunca sabrán que somos nosotros',
      'Plataforma automatizada de pedidos'
    ],
    process: [
      { title: 'Conecta tu Tienda', description: 'Instala nuestro plugin en Shopify o WooCommerce en 1 click.' },
      { title: 'Importa Productos', description: 'Selecciona los productos ganadores y agrégalos a tu catálogo.' },
      { title: 'Vende', description: 'Tus clientes compran en tu web. Tú cobras el precio retail.' },
      { title: 'Nosotros Enviamos', description: 'El sistema nos notifica y despachamos el pedido automáticamente.' }
    ],
    cta_text: 'Empezar Dropshipping',
    cta_link: '/registro?plan=dropshipping'
  },
  'importaciones': {
    id: 'importaciones',
    title: 'Importación Mayorista',
    subtitle: 'Trae productos de China sin dolores de cabeza ni aduanas.',
    hero_gradient: 'from-[#FF00FF] to-[#8800FF]',
    description_long: 'Escala tus márgenes comprando directo a fábrica. Nuestro equipo en Shenzhen negocia por ti, verifica la calidad y gestiona toda la logística hasta la puerta de tu bodega. Precios DDP (Todo incluido).',
    benefits: [
      'Acceso directo a fábricas verificadas',
      'Control de Calidad (Inspección Pre-embarque)',
      'Consolidación de carga de múltiples proveedores',
      'Trámites aduaneros y arancelarios incluidos',
      'Factura fiscal local'
    ],
    process: [
      { title: 'Cotización', description: 'Envíanos el link o foto del producto que buscas.' },
      { title: 'Negociación', description: 'Conseguimos el mejor precio por volumen en China.' },
      { title: 'Muestra', description: 'Te enviamos una muestra física para tu aprobación.' },
      { title: 'Producción y Envío', description: 'Iniciamos producción masiva y coordinamos el flete marítimo o aéreo.' }
    ],
    cta_text: 'Solicitar Cotización',
    cta_link: '/contacto?topic=importacion'
  },
  'mentoria': {
    id: 'mentoria',
    title: 'Mentoría 1:1 Premium',
    subtitle: 'Acelera tu curva de aprendizaje con expertos reales.',
    hero_gradient: 'from-[#FFFF00] to-[#FF4D00]',
    description_long: 'No estás solo. Obtén acceso directo a consultores que facturan 7 cifras. Analizamos tu tienda, tus campañas y tu estructura de costos para desbloquear el siguiente nivel de crecimiento.',
    benefits: [
      'Auditoría completa de tu Ecommerce',
      'Estrategia personalizada de Facebook & TikTok Ads',
      'Optimización de Tasa de Conversión (CRO)',
      'Acceso a comunidad privada de dueños de negocio',
      'Llamadas semanales de seguimiento'
    ],
    process: [
      { title: 'Diagnóstico', description: 'Revisamos tus números y situación actual.' },
      { title: 'Plan de Acción', description: 'Diseñamos una hoja de ruta a 90 días.' },
      { title: 'Ejecución Acompañada', description: 'Implementas cambios con nuestro feedback constante.' },
      { title: 'Escalado', description: 'Identificamos lo que funciona e inyectamos capital inteligente.' }
    ],
    cta_text: 'Aplicar al Programa',
    cta_link: '/agendar'
  }
};
