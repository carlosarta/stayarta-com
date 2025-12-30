import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ENV } from '../config/environment';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useAnalytics = () => {
  const location = useLocation();
  const previousPath = useRef<string>();

  useEffect(() => {
    // Inicializar Google Analytics
    if (ENV.gaMeasurementId && typeof window.gtag !== 'undefined') {
      window.gtag('config', ENV.gaMeasurementId, {
        page_title: document.title,
        page_location: ENV.baseUrl + location.pathname,
        page_path: location.pathname
      });

      // Track page view si cambió la ruta
      if (previousPath.current !== location.pathname) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: ENV.baseUrl + location.pathname,
          page_path: location.pathname
        });
        
        previousPath.current = location.pathname;
      }
    }
  }, [location.pathname, location.search]);

  // Función para trackear eventos personalizados
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (ENV.gaMeasurementId && typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, parameters);
    }
  };

  return { trackEvent };
};