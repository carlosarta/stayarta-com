export const routes = {
  main: {
    home: "/",
    start: "/inicio",
    about: "/nosotros",
    contact: "/contactanos",
    terms: "/terminos",
    privacy: "/privacidad",
    cookies: "/cookies",
    help: "/info-y-ayuda",
    search: "/busqueda",
    karta: "/karta",
  },
  shop: {
    root: "/tienda",
    cart: "/carrito",
    checkout: "/checkout",
    order: "/pedido",
    thanks: "/gracias",
    success: "/success",
    favorites: "/favoritos",
    productDetail: "/detalle-producto",
  },
  auth: {
    login: "/login",
    register: "/registro",
    account: "/cuenta",
  },
  services: {
    root: "/servicios",
    digital: "/servicios-digitales",
    automation: "/automatizacion-ia",
    express: "/implementacion-express",
    consulting: "/consultoria-tech",
    ecosystem: "/distribucion-ecosistema",
    custom: "/servicios-personalizados",
  },
  business: {
    distribute: "/distribuye",
    dropshipping: "/dropshipping-tech",
    whiteLabel: "/marca-blanca-ia",
    partners: "/alianzas-b2b",
  },
  nova: {
    root: "/nova",
    webApp: "/app-nova",
    telegram: "/app-telegram",
    enterprise: "/ia-empresarial",
    commandCenter: "/command-center",
  },
  launch: {
    sprint: "/lanzamiento",
  },
  // Updated Ecosystem Domains
  domains: {
    main: "https://stayarta.com",
    tech: "https://tech.stayarta.com",
    ecommerce: "https://ecommerce.stayarta.com",
    karta: "https://karta.stayarta.com",
    dashboard: "https://dashboard.stayarta.com", // NOVA Brain Dashboard
    webapp: "https://webapp.stayarta.com", // Chat NOVA + Shop
    command: "https://command.stayarta.com", // Command Center (CRM)
    miniapp: "https://miniapp.stayarta.com", // MiniApps Hub
    api: "https://api.stayarta.com", // API Server
    docs: "https://docs.stayarta.com", // Documentation
    telegram: "https://t.me/STAYArta_bot", // Telegram Bot
  },
  // Legacy/Categorized routes kept for compatibility if needed
  products: {
    tech: {
      accessories: "/product-category/accesorios-tech",
      office: "/product-category/gadgets-oficina",
      lighting: "/product-category/iluminacion-inteligente",
    },
    audio: {
      root: "/product-category/audio",
      headphones: "/product-category/audifonos",
      speakers: "/product-category/parlantes",
    },
    smart: {
      watches: "/product-category/smartwatches",
      home: "/product-category/hogar-inteligente",
    },
    gaming: {
      root: "/product-category/gaming",
      accessories: "/product-category/accesorios-gaming",
    },
  },
};

export const siteConfig = {
  name: "STAYArta",
  description:
    "Retro Pop Tech & Neon Soft 3D UI for eCommerce and AI Automation.",
  ogImage: "https://stayarta.com/og.jpg",
  links: {
    twitter: "https://twitter.com/stayarta",
    github: "https://github.com/stayarta",
  },
};