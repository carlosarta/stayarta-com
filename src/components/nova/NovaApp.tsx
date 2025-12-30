import React, { useState } from 'react'
import { Send, Mic, Paperclip, Sparkles, MoreVertical, Menu, Search } from 'lucide-react'
import { DesignButton } from '../design-system/Buttons'
import { cn } from '../../lib/utils'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { media } from '@/lib/media'

const ChatBubble = ({ message, isAi, time }: { message: string, isAi: boolean, time: string }) => (
  <div className={cn("flex gap-4 max-w-3xl", isAi ? "" : "flex-row-reverse ml-auto")}>
    {isAi && (
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-st-turquoise to-st-darkblue p-[2px] shrink-0 shadow-[0_0_15px_rgba(87,180,186,0.5)]">
         <div className="w-full h-full rounded-full bg-st-black flex items-center justify-center overflow-hidden">
            <ImageWithFallback src={media.nova} alt="Nova" className="w-full h-full object-cover" />
         </div>
      </div>
    )}
    <div className={cn("flex flex-col", isAi ? "items-start" : "items-end")}>
      <div className={cn(
        "p-4 rounded-2xl relative shadow-lg text-sm md:text-base leading-relaxed",
        isAi 
          ? "bg-st-darkblue text-white rounded-tl-none border border-st-turquoise/30 shadow-[0_5px_20px_rgba(0,0,0,0.2)]" 
          : "bg-st-orange text-white rounded-tr-none shadow-[0_5px_20px_rgba(236,82,40,0.3)]"
      )}>
        {message}
      </div>
      <span className="text-xs text-st-bonewhite/40 mt-2 font-mono">{time}</span>
    </div>
  </div>
);

export const NovaApp = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex h-screen bg-st-black overflow-hidden font-ui">
      {/* Sidebar */}
      <aside className="w-80 hidden md:flex flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="p-6 flex items-center gap-3 border-b border-white/10">
           <div className="w-8 h-8 bg-st-turquoise rounded-lg flex items-center justify-center text-st-black font-bold">N</div>
           <h1 className="font-display text-xl text-white">Nova AI</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
           <div className="text-xs font-bold text-st-turquoise uppercase tracking-wider mb-4 px-2">Recent Chats</div>
           {['Project Alpha Strategy', 'Q4 Marketing Assets', 'Code Review: React Hooks', 'Travel Itinerary: Tokyo'].map((chat, i) => (
             <div key={i} className={cn("p-3 rounded-xl cursor-pointer hover:bg-white/10 text-st-bonewhite/80 transition-colors text-sm truncate", i === 0 ? "bg-white/10 text-white font-medium border border-white/5" : "")}>
                {chat}
             </div>
           ))}
        </div>

        <div className="p-4 border-t border-white/10">
           <DesignButton variant="glow" size="sm" className="w-full gap-2">
             <Sparkles size={16} /> New Chat
           </DesignButton>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(87,180,186,0.1),transparent_50%)]" />
        
        {/* Header */}
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-st-black/50 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-3">
             <div className="md:hidden"><Menu className="text-white" /></div>
             <div className="flex flex-col">
               <span className="text-white font-bold">Nova Assistant</span>
               <span className="text-xs text-st-turquoise flex items-center gap-1">
                 <span className="w-1.5 h-1.5 bg-st-turquoise rounded-full animate-pulse" />
                 Online
               </span>
             </div>
          </div>
          <div className="flex items-center gap-4 text-white/60">
             <div className="hover:text-white cursor-pointer"><Search size={20} /></div>
             <div className="hover:text-white cursor-pointer"><MoreVertical size={20} /></div>
          </div>
        </header>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10 scrollbar-hide">
           <div className="flex justify-center my-8">
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/40 border border-white/5">Today</span>
           </div>
           
           <ChatBubble 
             isAi={true} 
             message="Hello! I'm Nova, your advanced retro-tech assistant. I can help you design systems, optimize workflows, or just chat about cyberpunk aesthetics. How can I assist you today?" 
             time="10:42 AM"
           />
           
           <ChatBubble 
             isAi={false} 
             message="Hey Nova! I need some help generating color tokens for a new brand system. We're going for a 'Retro Pop Tech' vibe." 
             time="10:45 AM"
           />

           <ChatBubble 
             isAi={true} 
             message="That sounds exciting! For a Retro Pop Tech vibe, I suggest mixing high-contrast primaries with neon accents. Think International Orange (#EC5228) paired with a deep tech Blue (#273F4F). Would you like me to generate a full palette?" 
             time="10:45 AM"
           />
        </div>

        {/* Input Area */}
        <div className="p-6 relative z-20">
           <div className="bg-st-darkblue/50 border border-white/10 rounded-2xl p-2 flex items-end gap-2 shadow-2xl backdrop-blur-xl">
              <button className="p-3 text-st-turquoise hover:bg-white/5 rounded-xl transition-colors">
                 <Paperclip size={20} />
              </button>
              <textarea 
                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-white/30 resize-none py-3 max-h-32 min-h-[48px]" 
                placeholder="Message Nova..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="p-3 text-st-turquoise hover:bg-white/5 rounded-xl transition-colors">
                 <Mic size={20} />
              </button>
              <button className="p-3 bg-st-orange text-white rounded-xl shadow-[0_0_15px_rgba(236,82,40,0.4)] hover:scale-105 transition-transform">
                 <Send size={20} />
              </button>
           </div>
           <div className="text-center mt-2">
             <p className="text-[10px] text-white/20">Nova AI can make mistakes. Verify important information.</p>
           </div>
        </div>
      </main>
    </div>
  );
};
