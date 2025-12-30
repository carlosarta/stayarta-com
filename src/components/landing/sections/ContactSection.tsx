import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Checkbox } from '../../ui/checkbox';
import { DesignButton } from '../../design-system/Buttons';

export const ContactSection = () => {
  return (
    <section className="py-24 bg-st-bonewhite relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-st-darkblue/5 skew-x-12 origin-top-right z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
             <span className="text-st-orange font-bold uppercase tracking-widest text-sm mb-4">Contacto</span>
             <h2 className="font-display text-5xl text-st-darkblue mb-6">Hablemos de tu <br/> proyecto.</h2>
             <p className="text-xl text-st-darkblue/70 mb-12 font-ui">
               Respuesta en menos de 24 horas. Sin compromisos. Solo buenas ideas y soluciones reales.
             </p>

             <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-st-darkblue"><Mail /></div>
                  <div>
                    <p className="font-mono text-xs text-st-darkblue/50 uppercase mb-1">Email</p>
                    <p className="font-display text-xl text-st-darkblue">hola@stayarta.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-st-darkblue"><Phone /></div>
                  <div>
                    <p className="font-mono text-xs text-st-darkblue/50 uppercase mb-1">Teléfono</p>
                    <p className="font-display text-xl text-st-darkblue">+34 662 652 300</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-st-darkblue"><MapPin /></div>
                  <div>
                    <p className="font-mono text-xs text-st-darkblue/50 uppercase mb-1">Ubicación</p>
                    <p className="font-display text-xl text-st-darkblue">Miami, FL 33155-5328, US</p>
                  </div>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-st-orange">
                 <p className="font-display text-3xl text-st-darkblue mb-1">&lt;24h</p>
                 <p className="text-xs font-bold text-st-darkblue/40 uppercase">Tiempo Respuesta</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-st-turquoise">
                 <p className="font-display text-3xl text-st-darkblue mb-1">100%</p>
                 <p className="text-xs font-bold text-st-darkblue/40 uppercase">Satisfacción</p>
               </div>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-st-darkblue/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="TU NOMBRE" className="bg-st-bonewhite/30 border-st-darkblue/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="TU@EMAIL.COM" type="email" className="bg-st-bonewhite/30 border-st-darkblue/10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input id="company" placeholder="TU EMPRESA" className="bg-st-bonewhite/30 border-st-darkblue/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (opcional)</Label>
                    <Input id="phone" placeholder="+34 600 000 000" className="bg-st-bonewhite/30 border-st-darkblue/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>¿Qué te interesa?</Label>
                  <Select>
                    <SelectTrigger className="bg-st-bonewhite/30 border-st-darkblue/10">
                      <SelectValue placeholder="SELECCIONA UNA OPCIÓN" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">eCommerce & Tiendas</SelectItem>
                      <SelectItem value="web">Diseño Web & Landing</SelectItem>
                      <SelectItem value="automation">Automatización & IA</SelectItem>
                      <SelectItem value="consulting">Consultoría</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cuéntanos sobre tu proyecto</Label>
                  <Textarea 
                    id="message" 
                    placeholder="DESCRIBE TU IDEA..." 
                    className="bg-st-bonewhite/30 border-st-darkblue/10 min-h-[150px]" 
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="privacy" />
                  <label
                    htmlFor="privacy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-st-darkblue/60"
                  >
                    Acepto la política de privacidad y el tratamiento de mis datos
                  </label>
                </div>

                <DesignButton variant="glow" size="lg" className="w-full md:w-auto mt-4">
                  Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                </DesignButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
