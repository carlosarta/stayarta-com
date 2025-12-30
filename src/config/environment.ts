interface EnvironmentConfig {
  baseUrl: string;
  isProduction: boolean;
  apiUrl: string;
  gaMeasurementId?: string;
}

export const getEnvironmentConfig = (): EnvironmentConfig => {
  // Detectar entorno Vite vs otros
  const isVite = typeof import.meta !== 'undefined' && import.meta.env;
  
  // Determinar si es producción
  const isProduction = isVite 
    ? import.meta.env.PROD 
    : false; // Fallback seguro
  
  return {
    baseUrl: isProduction 
      ? 'https://stayarta.com' 
      : 'http://localhost:3000',
    isProduction,
    apiUrl: isProduction
      ? 'https://api.stayarta.com'
      : 'http://localhost:8000',
    // Soporte para variables de entorno VITE_
    gaMeasurementId: isVite ? import.meta.env.VITE_GA_MEASUREMENT_ID : undefined
  };
};

// Variables para diferentes entornos
export const ENV = getEnvironmentConfig();