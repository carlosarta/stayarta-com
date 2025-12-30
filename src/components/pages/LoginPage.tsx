import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../landing/Navbar';
import { Footer } from '../landing/Footer';
import { PageTransition } from '../ui/PageTransition';
import { DesignButton } from '../design-system/Buttons';
import { StayArtaLogo } from '../design-system/StayArtaLogo';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import { routes } from '../../config/routes';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard'); // Redirect to dashboard on success
    }, 1500);
  };

  return (
    <PageTransition className="min-h-screen flex flex-col bg-st-bonewhite font-ui text-st-darkblue">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-st-darkblue/10"
        >
           <div className="text-center mb-8">
              <div className="inline-block mb-4">
                 <StayArtaLogo variant="favicon" className="w-16 h-16 rounded-xl" />
              </div>
              <h1 className="text-3xl font-display font-bold">Welcome Back</h1>
              <p className="text-st-darkblue/60 mt-2">Access your STAYArta ecosystem account.</p>
           </div>

           <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Input */}
              <div className="space-y-2">
                 <label className="text-sm font-bold ml-1">Email Address</label>
                 <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-st-darkblue/40 group-focus-within:text-st-orange transition-colors" size={20} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-st-bonewhite border-2 border-transparent focus:border-st-orange outline-none rounded-xl py-3 pl-12 pr-4 transition-all"
                    />
                 </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                 <div className="flex justify-between items-center ml-1">
                    <label className="text-sm font-bold">Password</label>
                    <a href="#" className="text-xs text-st-orange font-bold hover:underline">Forgot?</a>
                 </div>
                 <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-st-darkblue/40 group-focus-within:text-st-orange transition-colors" size={20} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full bg-st-bonewhite border-2 border-transparent focus:border-st-orange outline-none rounded-xl py-3 pl-12 pr-12 transition-all"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-st-darkblue/40 hover:text-st-darkblue"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                 </div>
              </div>

              <DesignButton 
                variant="solid" 
                className="w-full justify-center h-12 text-lg" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="animate-pulse">Signing in...</span>
                ) : (
                  <>Sign In <ArrowRight size={20} className="ml-2" /></>
                )}
              </DesignButton>

           </form>

           <div className="mt-8 text-center text-sm">
              <span className="opacity-60">Don't have an account? </span>
              <a href={routes.auth.register} className="font-bold text-st-darkblue hover:text-st-orange transition-colors">Create one</a>
           </div>

        </motion.div>
      </main>

      <Footer />
    </PageTransition>
  );
};
