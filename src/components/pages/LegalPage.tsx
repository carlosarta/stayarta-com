import React from 'react';
import { Navbar, Footer } from '../landing/LandingPage';
import { DesignButton } from '../design-system/Buttons';

interface LegalPageProps {
  title: string;
  subtitle: string;
}

const COMPANY = {
  legalName: 'CARLOS ARTA LLC',
  address: '4320 SW 57TH AVE, MIAMI, FL 33155-5328, US',
  registeredAgent: 'CARLOS AREVALO MARTINEZ',
  fei: '37-2141395',
  purpose: 'E-COMMERCE',
  filedDate: 'Apr 29, 2025',
  email: 'hola@stayarta.com',
  phone: '+34 662 652 300'
};

export const LegalPage = ({ title, subtitle }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-st-bonewhite flex flex-col">
      <Navbar onNavigate={() => {}} />
      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-st-darkblue mb-4">{title}</h1>
          <p className="font-ui text-lg text-st-darkblue/60 mb-10">{subtitle}</p>

          <section className="bg-white border border-st-darkblue/10 rounded-2xl p-6 mb-8">
            <h2 className="font-display text-2xl text-st-darkblue mb-3">Datos legales</h2>
            <p className="text-sm text-st-darkblue/70 mb-2"><strong>Nombre legal:</strong> {COMPANY.legalName}</p>
            <p className="text-sm text-st-darkblue/70 mb-2"><strong>Dirección:</strong> {COMPANY.address}</p>
            <p className="text-sm text-st-darkblue/70 mb-2"><strong>Agente registrado:</strong> {COMPANY.registeredAgent}</p>
            <p className="text-sm text-st-darkblue/70 mb-2"><strong>FEI:</strong> {COMPANY.fei}</p>
            <p className="text-sm text-st-darkblue/70 mb-2"><strong>Actividad:</strong> {COMPANY.purpose}</p>
            <p className="text-sm text-st-darkblue/70"><strong>Fecha de reporte:</strong> {COMPANY.filedDate}</p>
          </section>

          <section className="bg-white border border-st-darkblue/10 rounded-2xl p-6 mb-8">
            <h2 className="font-display text-2xl text-st-darkblue mb-3">Contacto oficial</h2>
            <p className="text-sm text-st-darkblue/70 mb-2"><strong>Email:</strong> {COMPANY.email}</p>
            <p className="text-sm text-st-darkblue/70 mb-2"><strong>Teléfono:</strong> {COMPANY.phone}</p>
          </section>

          <section className="bg-white border border-st-darkblue/10 rounded-2xl p-6">
            <h2 className="font-display text-2xl text-st-darkblue mb-3">Alcance</h2>
            <p className="text-sm text-st-darkblue/70 mb-4">
              Esta página ofrece información legal y de contacto para fines de verificación y transparencia.
              Para consultas legales específicas o solicitudes formales, utiliza el correo oficial indicado.
            </p>
            <DesignButton variant="retro-outline" size="sm" onClick={() => window.location.href = '/contactanos'}>
              Ir a Contacto
            </DesignButton>
          </section>
        </div>
      </main>
      <Footer onNavigate={() => {}} />
    </div>
  );
};
