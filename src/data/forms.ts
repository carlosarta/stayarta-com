import { Mail, User, Phone, Briefcase, MessageSquare, Calendar } from 'lucide-react';

export interface FormField {
  id: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'date';
  label: string;
  placeholder?: string;
  icon_name?: 'Mail' | 'User' | 'Phone' | 'Briefcase' | 'MessageSquare' | 'Calendar';
  required?: boolean;
  options?: string[]; // For select inputs
  width?: 'full' | 'half';
}

export interface FormConfig {
  id: string;
  title: string;
  subtitle: string;
  submit_text: string;
  success_message: string;
  fields: FormField[];
}

export const FORMS_DB: Record<string, FormConfig> = {
  'contacto': {
    id: 'contact_general',
    title: 'Hablemos de Negocios',
    subtitle: '¿Tienes dudas sobre importaciones o servicios? Te respondemos en < 24h.',
    submit_text: 'Enviar Mensaje',
    success_message: 'Mensaje recibido. Un asesor te contactará pronto.',
    fields: [
      { id: 'name', type: 'text', label: 'Nombre Completo', placeholder: 'Ej. Juan Pérez', icon_name: 'User', width: 'half', required: true },
      { id: 'email', type: 'email', label: 'Correo Corporativo', placeholder: 'tu@empresa.com', icon_name: 'Mail', width: 'half', required: true },
      { id: 'topic', type: 'select', label: 'Asunto', options: ['Importación China', 'Soporte Dropshipping', 'Alianzas', 'Otros'], width: 'full' },
      { id: 'message', type: 'textarea', label: '¿Cómo podemos ayudarte?', placeholder: 'Describe tu requerimiento...', icon_name: 'MessageSquare', width: 'full', required: true }
    ]
  },
  'registro': {
    id: 'register_drop',
    title: 'Únete al Ecosistema',
    subtitle: 'Crea tu cuenta para acceder al catálogo mayorista y precios de distribuidor.',
    submit_text: 'Crear Cuenta',
    success_message: '¡Bienvenido! Revisa tu correo para activar la cuenta.',
    fields: [
      { id: 'fullname', type: 'text', label: 'Nombre del Responsable', icon_name: 'User', width: 'full', required: true },
      { id: 'email', type: 'email', label: 'Email', icon_name: 'Mail', width: 'full', required: true },
      { id: 'password', type: 'text', label: 'Contraseña', placeholder: 'Mínimo 8 caracteres', width: 'full', required: true }, // In real app, type password
      { id: 'business_model', type: 'select', label: 'Modelo de Negocio', options: ['Dropshipping (Sin Stock)', 'E-commerce (Stock Propio)', 'Tienda Física', 'Apenas iniciando'], width: 'full' }
    ]
  },
  'agendar': {
    id: 'booking_mentor',
    title: 'Mentoria Estratégica',
    subtitle: 'Reserva tu sesión de diagnóstico con uno de nuestros expertos.',
    submit_text: 'Confirmar Solicitud',
    success_message: 'Solicitud enviada. Te enviaremos los horarios disponibles.',
    fields: [
      { id: 'name', type: 'text', label: 'Tu Nombre', icon_name: 'User', width: 'half', required: true },
      { id: 'whatsapp', type: 'tel', label: 'WhatsApp', icon_name: 'Phone', width: 'half', required: true },
      { id: 'current_revenue', type: 'select', label: 'Facturación Mensual Actual', options: ['$0 - $1,000', '$1,000 - $10,000', '$10,000+', 'Prefiero no decir'], width: 'full' },
      { id: 'goals', type: 'textarea', label: '¿Cuál es tu mayor obstáculo hoy?', width: 'full', required: true }
    ]
  }
};
