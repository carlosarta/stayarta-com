import React from 'react';
import { Navbar, Footer } from '../landing/LandingPage';
import { DesignButton } from '../design-system/Buttons';
import { Shield, Database, Code, Terminal, Activity, Folder, Lock, Server, Github } from 'lucide-react';

export const CommandCenter = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <div className="min-h-screen bg-st-black text-st-bonewhite font-mono">
      <Navbar onNavigate={onNavigate} />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <Terminal className="text-st-turquoise" />
               <h1 className="font-display text-3xl md:text-4xl text-white">Command Center</h1>
            </div>
            <p className="text-white/50">System Status & Orchestration Hub</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
             <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded border border-green-500/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-xs font-bold">SYSTEM ONLINE</span>
             </div>
             <div className="flex items-center gap-2 bg-st-orange/10 px-3 py-1 rounded border border-st-orange/30">
                <Activity size={14} className="text-st-orange" />
                <span className="text-st-orange text-xs font-bold">BOT ACTIVE</span>
             </div>
          </div>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {/* Bot Core */}
           <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-st-turquoise/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                 <Github size={40} />
              </div>
              <h3 className="text-st-turquoise font-bold mb-2 text-lg">NovaSTAYBot</h3>
              <p className="text-sm text-white/60 mb-6 min-h-[40px]">Core bot logic, handlers, and automation workflows.</p>
              
              <div className="space-y-3 text-xs text-white/40 font-mono mb-6">
                 <div className="flex justify-between"><span>Status</span> <span className="text-green-400">Running</span></div>
                 <div className="flex justify-between"><span>Version</span> <span>v2.4.0</span></div>
                 <div className="flex justify-between"><span>Uptime</span> <span>99.9%</span></div>
              </div>
              
              <a href="https://github.com/stayarta/novastaybot" target="_blank" rel="noreferrer" className="w-full block text-center py-2 bg-white/10 hover:bg-white/20 rounded text-sm font-bold transition-colors">
                 View Repository
              </a>
           </div>

           {/* Command Center Repo */}
           <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-st-yellow/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                 <Server size={40} />
              </div>
              <h3 className="text-st-yellow font-bold mb-2 text-lg">Command Center</h3>
              <p className="text-sm text-white/60 mb-6 min-h-[40px]">Orchestrator, internal tools, and AI services.</p>
              
              <div className="space-y-3 text-xs text-white/40 font-mono mb-6">
                 <div className="flex justify-between"><span>Sync</span> <span className="text-green-400">Active</span></div>
                 <div className="flex justify-between"><span>Modules</span> <span>8 Loaded</span></div>
                 <div className="flex justify-between"><span>Last Deploy</span> <span>2h ago</span></div>
              </div>
              
              <a href="https://github.com/stayarta/stayarta-command-center" target="_blank" rel="noreferrer" className="w-full block text-center py-2 bg-white/10 hover:bg-white/20 rounded text-sm font-bold transition-colors">
                 View Repository
              </a>
           </div>

           {/* API Gateway */}
           <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-st-orange/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                 <Database size={40} />
              </div>
              <h3 className="text-st-orange font-bold mb-2 text-lg">Dashboard API</h3>
              <p className="text-sm text-white/60 mb-6 min-h-[40px]">Backend connection for Nova and Telegram.</p>
              
              <div className="space-y-3 text-xs text-white/40 font-mono mb-6">
                 <div className="flex justify-between"><span>Endpoint</span> <span className="truncate max-w-[100px]">.../api/</span></div>
                 <div className="flex justify-between"><span>Latency</span> <span>45ms</span></div>
                 <div className="flex justify-between"><span>Requests</span> <span>1.2k/m</span></div>
              </div>
              
              <a href="https://dashboard.stayarta.com/api/" target="_blank" rel="noreferrer" className="w-full block text-center py-2 bg-white/10 hover:bg-white/20 rounded text-sm font-bold transition-colors">
                 Check Health
              </a>
           </div>
        </div>

        {/* Operational Modules */}
        <h2 className="text-xl font-bold mb-6 text-white/80 flex items-center gap-2">
           <Folder size={20} /> Operational Modules
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { name: "Entities", desc: "Legal Structure", locked: false },
             { name: "Brand Assets", desc: "Design System", locked: false },
             { name: "Financials", desc: "Restricted Access", locked: true },
             { name: "Operations", desc: "Inventory & Logistics", locked: false },
             { name: "Projects", desc: "Active Deployments", locked: false },
             { name: "Marketing", desc: "Campaigns & Analytics", locked: false },
             { name: "Tech Docs", desc: "Architecture", locked: false },
             { name: "Archive", desc: "Legacy Data", locked: true },
           ].map((mod, i) => (
             <div key={i} className={`p-4 rounded-lg border ${mod.locked ? 'bg-white/5 border-red-500/20 opacity-50 cursor-not-allowed' : 'bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer'} transition-all`}>
                <div className="flex justify-between items-start mb-2">
                   <span className={`text-sm font-bold ${mod.locked ? 'text-red-400' : 'text-white'}`}>{mod.name}</span>
                   {mod.locked && <Lock size={14} className="text-red-400" />}
                </div>
                <p className="text-xs text-white/40">{mod.desc}</p>
             </div>
           ))}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};
