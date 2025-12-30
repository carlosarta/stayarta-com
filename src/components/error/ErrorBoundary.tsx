import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
    
    // En producción, enviar a servicio de monitoreo
    // Usamos verificación segura de entorno para Vite
    const isProduction = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PROD;
    
    if (isProduction) {
      // Aquí iría la integración con Sentry, LogRocket, etc.
    }
  }

  render() {
    const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;

    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-st-bonewhite p-4">
          <div className="text-center max-w-md">
            <div className="bg-st-orange/10 text-st-orange p-4 rounded-2xl mb-6">
              <h1 className="text-2xl font-display font-bold mb-2">¡Ups! Algo salió mal</h1>
              <p className="text-st-darkblue/70">
                Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
              </p>
            </div>
            
            <button 
              onClick={() => window.location.reload()}
              className="bg-st-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-st-orange/90 transition-colors mb-4"
            >
              Recargar Página
            </button>
            
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-st-darkblue text-white px-6 py-3 rounded-lg font-semibold hover:bg-st-darkblue/90 transition-colors ml-4"
            >
              Volver al Inicio
            </button>

            {isDev && this.state.error && (
              <details className="mt-6 text-left bg-white rounded-lg p-4 border border-st-darkblue/10">
                <summary className="cursor-pointer font-semibold text-st-darkblue">
                  Detalles del Error (Desarrollo)
                </summary>
                <div className="mt-2 text-sm">
                  <p className="font-mono text-red-600 mb-2">{this.state.error.toString()}</p>
                  <pre className="text-xs text-st-darkblue/50 overflow-auto max-h-40">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}