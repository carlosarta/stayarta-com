import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DesignSystemPage as StyleGuide } from './components/design-system/DesignSystemPage';
import { LandingPage as Home } from './components/landing/LandingPage';
import { ServicesHub } from './components/pages/ServicesHub';
import { EcommercePage } from './components/pages/EcommercePage';
import { KartaPage } from './components/pages/KartaPage';
import { CartPage } from './components/pages/CartPage';
import { FavoritesPage } from './components/pages/FavoritesPage';
import { LoginPage } from './components/pages/LoginPage';
import { NovaApp as NovaLanding } from './components/nova/NovaApp';
import { LegalPage } from './components/pages/LegalPage';

// Placeholder components
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#0A0F1A] text-white">
    <div className="text-center">
      <h1 className="text-4xl font-display font-bold mb-4">{title}</h1>
      <p className="text-[#9CA3AF]">Esta página está en construcción.</p>
    </div>
  </div>
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <header className="bg-white border-b p-4">
      <h1 className="font-bold">STAYArta Dashboard</h1>
    </header>
    <main className="flex-1 p-6">
      {children}
    </main>
  </div>
);

import { DatabaseProvider } from './contexts/DatabaseContext';
import { NavigationProvider } from './contexts/NavigationContext';

import { TokyoLayout } from './components/layouts/TokyoLayout';

import { EcommerceServicesPage } from './components/pages/EcommerceServicesPage';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { DynamicFormPage } from './components/pages/DynamicFormPage';
import { DesignSystemPage } from './components/pages/DesignSystemPage';

export default function App() {
  return (
    <DatabaseProvider>
      <Router>
        <NavigationProvider>
          <Routes>
        {/* Main Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />

        {/* --- DESIGN SYSTEM AUDIT --- */}
        <Route path="/design" element={<DesignSystemPage />} />
        
        {/* Shop Subdomain Routes (Wrapped in TokyoLayout) */}
        <Route path="/tienda" element={
            <TokyoLayout>
                <EcommerceServicesPage />
            </TokyoLayout>
        } />
        
        {/* Specific Service Pages (Using Template) */}
        <Route path="/tienda/dropshipping" element={
            <TokyoLayout>
                <ServiceDetailPage />
            </TokyoLayout>
        } />
        <Route path="/tienda/importaciones" element={
            <TokyoLayout>
                <ServiceDetailPage />
            </TokyoLayout>
        } />
        <Route path="/tienda/mentoria" element={
            <TokyoLayout>
                <ServiceDetailPage />
            </TokyoLayout>
        } />

        {/* Dynamic Service Routes */}
        <Route path="/tienda/servicio/:serviceId" element={
            <TokyoLayout>
                <ServiceDetailPage />
            </TokyoLayout>
        } />
        
        {/* Dynamic Form Routes - Mapped to Database */}
        <Route path="/contacto" element={<DynamicFormPage />} />
        <Route path="/registro" element={<DynamicFormPage />} />
        <Route path="/agendar" element={<DynamicFormPage />} />
        
        {/* Generic Form Handler */}
        <Route path="/form/:formId" element={<DynamicFormPage />} />

        <Route path="/tienda/catalogo" element={
            <TokyoLayout>
                <EcommercePage />
            </TokyoLayout>
        } />
        {/* Alias for compatibility if needed */}
        <Route path="/tienda/shop" element={
            <TokyoLayout>
                <EcommercePage />
            </TokyoLayout>
        } />

        <Route path="/detalle-producto" element={<Placeholder title="Detalle de Producto" />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
        <Route path="/checkout" element={<Placeholder title="Checkout" />} />
        
        {/* Karta Route */}
        <Route path="/karta" element={<KartaPage />} />

        {/* Services Routes */}
        <Route path="/servicios" element={<ServicesHub />} />
        <Route path="/servicios-digitales" element={<Placeholder title="Servicios Digitales" />} />
        <Route path="/automatizacion-ia" element={<Placeholder title="Automatización & IA" />} />
        <Route path="/implementacion-express" element={<Placeholder title="Implementación Express" />} />
        <Route path="/consultoria-tech" element={<Placeholder title="Consultoría Tech" />} />
        <Route path="/distribucion-ecosistema" element={<Placeholder title="Distribución" />} />
        <Route path="/servicios-personalizados" element={<Placeholder title="Servicios Personalizados" />} />

        {/* Nova / AI Routes */}
        <Route path="/nova" element={<NovaLanding />} />
        <Route path="/app-nova" element={<Placeholder title="App Nova" />} />
        
        {/* Business / B2B */}
        <Route path="/distribuye" element={<Placeholder title="Distribuye STAYArta" />} />
        <Route path="/dropshipping-tech" element={<Placeholder title="Dropshipping Tech" />} />
        <Route path="/marca-blanca-ia" element={<Placeholder title="Marca Blanca IA" />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<Placeholder title="Registro" />} />
        
        {/* Corporate */}
        <Route path="/contactanos" element={<Placeholder title="Contáctanos" />} />
        <Route path="/nosotros" element={<Placeholder title="Sobre Nosotros" />} />
        <Route
          path="/terminos"
          element={<LegalPage title="Términos Legales" subtitle="Información legal y condiciones de uso." />}
        />
        <Route
          path="/privacidad"
          element={<LegalPage title="Política de Privacidad" subtitle="Cómo protegemos tus datos." />}
        />

        {/* Dashboard (Existing Layout) */}
        <Route path="/dashboard/*" element={
          <DashboardLayout>
             <Placeholder title="Dashboard Overview" />
          </DashboardLayout>
        } />
        
        <Route path="/style-guide" element={
           <div className="bg-[#0A0F1A] min-h-screen p-8">
              <StyleGuide />
           </div>
        } />

        {/* Fallback */}
        <Route path="*" element={<Placeholder title="404 - Not Found" />} />
      </Routes>
      </NavigationProvider>
      </Router>
    </DatabaseProvider>
  );
}
