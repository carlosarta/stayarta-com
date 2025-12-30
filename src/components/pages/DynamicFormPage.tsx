import React, { useState } from "react";
import {
  useParams,
  Navigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { FORMS_DB } from "../../data/forms";
import { Navbar } from "../landing/Navbar";
import { Footer } from "../landing/Footer";
import {
  Mail,
  User,
  Phone,
  Briefcase,
  MessageSquare,
  Calendar,
  ChevronDown,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { SDS_Button } from "../design-system/SDS_Buttons";
import {
  SDS_Input,
  SDS_TextArea,
} from "../design-system/SDS_Inputs";

// Icon Mapper
const IconMap = {
  Mail,
  User,
  Phone,
  Briefcase,
  MessageSquare,
  Calendar,
};

export const DynamicFormPage = () => {
  const { formId: paramFormId } = useParams<{
    formId: string;
  }>();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Map specific paths to DB IDs
  const PATH_MAP: Record<string, string> = {
    "/contacto": "contacto",
    "/registro": "registro",
    "/agendar": "agendar",
  };

  const resolvedId = paramFormId || PATH_MAP[location.pathname];
  const formConfig = resolvedId ? FORMS_DB[resolvedId] : null;

  // State
  React.useEffect(() => {
    if (!formConfig) return;
    const initialData: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      initialData[key] = value;
    }
    setFormData((prev) => ({ ...prev, ...initialData }));
  }, [searchParams, formConfig]);

  if (!formConfig) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-ui selection:bg-[#FF00FF] selection:text-white">
      <Navbar />

      <main className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 items-start justify-center min-h-[80vh]">
        {/* LEFT: Context / Info */}
        <div className="w-full md:w-1/3 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {formConfig.title}
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              {formConfig.subtitle}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full" />
          </motion.div>
        </div>

        {/* RIGHT: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-2/3 max-w-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFFF]/5 rounded-full blur-[80px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  ¡Recibido!
                </h3>
                <p className="text-gray-400">
                  {formConfig.success_message}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-sm text-[#00FFFF] hover:underline"
                >
                  Volver al formulario
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formConfig.fields.map((field) => {
                    const Icon = field.icon_name
                      ? IconMap[field.icon_name]
                      : null;
                    const isFull = field.width === "full";
                    const IconComponent = Icon ? (
                      <Icon size={16} />
                    ) : null;

                    return (
                      <div
                        key={field.id}
                        className={`${isFull ? "md:col-span-2" : "md:col-span-1"}`}
                      >
                        {field.type === "textarea" ? (
                          <SDS_TextArea
                            label={field.label}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ""}
                            onChange={(e) =>
                              handleInputChange(
                                field.id,
                                e.target.value,
                              )
                            }
                          />
                        ) : field.type === "select" ? (
                          <div className="space-y-2 w-full relative">
                            <label className="text-xs font-mono font-medium text-st-bonewhite/60 uppercase tracking-wider">
                              {field.label}
                            </label>
                            <div className="relative">
                              <select
                                required={field.required}
                                value={formData[field.id] || ""}
                                onChange={(e) =>
                                  handleInputChange(
                                    field.id,
                                    e.target.value,
                                  )
                                }
                                className="flex h-11 w-full rounded-md border border-white/10 bg-st-dark/50 px-3 py-2 text-sm text-white ring-offset-st-black appearance-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-st-cyan focus-visible:border-st-cyan transition-all backdrop-blur-sm cursor-pointer"
                              >
                                <option value="" disabled>
                                  Seleccionar opción...
                                </option>
                                {field.options?.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-st-bonewhite/40 pointer-events-none"
                                size={16}
                              />
                            </div>
                          </div>
                        ) : (
                          <SDS_Input
                            type={field.type}
                            label={field.label}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ""}
                            onChange={(e) =>
                              handleInputChange(
                                field.id,
                                e.target.value,
                              )
                            }
                            icon={IconComponent}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4">
                  <SDS_Button
                    type="submit"
                    variant="primary"
                    className="w-full md:w-auto min-w-[200px]"
                    isLoading={isSubmitting}
                  >
                    {formConfig.submit_text}
                  </SDS_Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};