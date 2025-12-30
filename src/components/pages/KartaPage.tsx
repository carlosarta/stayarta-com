import React from 'react'
import { motion } from 'motion/react'
import { Globe, Twitter, Instagram, Linkedin, Mail, Phone, ExternalLink, MapPin, Share2 } from 'lucide-react'
import { Navbar } from '../landing/Navbar'
import { Footer } from '../landing/Footer'
import { PageTransition } from '../ui/PageTransition'
import { DesignButton } from '../design-system/Buttons'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { media } from '@/lib/media'

// --- MOCK DATA ---
const KARTA_PROFILE = {
  name: 'STAYArta Ecosystem',
  handle: '@stayarta',
  bio: 'Building the future of eCommerce & AI Automation. Retro Pop Tech for the modern creator.',
  avatar: media.placeholders.avatar,
  location: 'Global / Digital',
  links: [
    { id: '1', label: 'Official Website', url: 'https://stayarta.com', icon: Globe, highlight: true },
    { id: '2', label: 'Shop Tech & Gadgets', url: 'https://ecommerce.stayarta.com', icon: ExternalLink, highlight: true },
    { id: '3', label: 'NOVA Brain (AI)', url: 'https://dashboard.stayarta.com', icon: ExternalLink },
    { id: '4', label: 'Book a Consultation', url: 'https://cal.com/stayarta', icon: Phone },
    { id: '5', label: 'Join Telegram Community', url: 'https://t.me/stayarta', icon: ExternalLink },
  ],
  socials: [
    { id: 's1', icon: Twitter, url: 'https://twitter.com/stayarta' },
    { id: 's2', icon: Instagram, url: 'https://instagram.com/stayarta' },
    { id: 's3', icon: Linkedin, url: 'https://linkedin.com/company/stayarta' },
    { id: 's4', icon: Mail, url: 'mailto:hello@stayarta.com' }
  ]
};

export const KartaPage = () => {
  return (
    <PageTransition className="min-h-screen flex flex-col bg-st-bonewhite font-ui">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-md space-y-8">
          
          {/* Profile Header */}
          <div className="text-center space-y-4">
            <div className="relative inline-block group">
              <div className="w-32 h-32 mx-auto bg-st-darkblue rounded-full border-4 border-st-orange shadow-xl overflow-hidden relative z-10">
                 <ImageWithFallback src={KARTA_PROFILE.avatar} alt="STAYArta avatar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-st-orange rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
            
            <div>
              <h1 className="text-3xl font-display font-bold text-st-darkblue">{KARTA_PROFILE.name}</h1>
              <p className="text-st-darkblue/60 font-medium">{KARTA_PROFILE.handle}</p>
            </div>
            
            <p className="text-st-darkblue/80 leading-relaxed">
              {KARTA_PROFILE.bio}
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-st-darkblue/50">
              <MapPin size={14} />
              <span>{KARTA_PROFILE.location}</span>
            </div>
          </div>

          {/* Social Row */}
          <div className="flex justify-center gap-4">
             {KARTA_PROFILE.socials.map(social => (
               <a 
                 key={social.id}
                 href={social.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-3 rounded-full bg-white border border-st-darkblue/10 text-st-darkblue hover:bg-st-darkblue hover:text-white hover:-translate-y-1 transition-all shadow-sm"
               >
                 <social.icon size={20} />
               </a>
             ))}
          </div>

          {/* Links Grid */}
          <div className="space-y-4">
            {KARTA_PROFILE.links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  flex items-center justify-between p-4 rounded-xl border-2 transition-all group
                  ${link.highlight 
                    ? 'bg-st-darkblue text-white border-st-darkblue hover:bg-st-orange hover:border-st-orange' 
                    : 'bg-white text-st-darkblue border-st-darkblue/10 hover:border-st-darkblue'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <link.icon size={20} className={link.highlight ? 'text-st-orange group-hover:text-white' : 'text-st-darkblue/50 group-hover:text-st-darkblue'} />
                  <span className="font-bold">{link.label}</span>
                </div>
                <Share2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
          
          <div className="pt-8 text-center">
             <DesignButton variant="ghost" size="sm" className="opacity-50 hover:opacity-100">
               Create your Karta
             </DesignButton>
          </div>

        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};
