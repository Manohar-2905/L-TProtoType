import React from 'react';
import { Search, Bell, AlertTriangle, ChevronDown, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#050A14]">
            {/* Title & Project Picker */}
            <div className="flex items-center gap-6">
                <h2 className="text-sm font-medium text-gray-300 tracking-tight">Project Command Center - Terminal 4 Exp...</h2>

                <div className="relative">
                    <div className="flex items-center gap-3 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/5 cursor-pointer hover:bg-white/[0.05] transition-all">
                        <Search size={14} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search systems, assets, or cre..."
                            className="bg-transparent border-none outline-none text-[11px] w-56 text-gray-300 placeholder:text-gray-600"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-aura-cyan text-black px-3 py-1.5 rounded-md font-bold text-[10px] uppercase tracking-wide cursor-pointer shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                    Terminal 4 <ChevronDown size={14} />
                </div>
            </div>

            {/* Actions & Profile */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 bg-aura-red/10 border border-aura-red/30 px-3 py-1.5 rounded-md cursor-pointer hover:bg-aura-red/20 transition-all">
                    <AlertTriangle className="text-aura-red" size={14} />
                    <span className="text-[10px] font-bold text-aura-red uppercase tracking-wide">2 Safety Risks</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-[11px] font-bold text-white">Marcus Thome</p>
                        <p className="text-[9px] text-gray-500 font-mono uppercase">Site Engineer</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-aura-card border border-white/10 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                            <User size={18} className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
