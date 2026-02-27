import React from 'react';
import {
    LayoutDashboard,
    Box,
    Compass,
    Activity,
    Zap,
    BarChart4,
    Settings,
    Sparkles
} from 'lucide-react';

const Sidebar = ({ activePanel, setActivePanel }) => {
    const links = [
        { id: 'digital-twin', icon: <Box size={18} />, label: 'Digital Twin' },
        { id: 'generative', icon: <Compass size={18} />, label: 'Generative Design' },
        { id: 'simulation', icon: <BarChart4 size={18} />, label: 'Simulation & Risk' },
        { id: 'data-streams', icon: <Activity size={18} />, label: 'Data Streams' },
        { id: 'optimization', icon: <Zap size={18} />, label: 'Optimization' },
        { id: 'executive', icon: <LayoutDashboard size={18} />, label: 'Reports' },
    ];

    return (
        <aside className="w-64 bg-[#050A14] flex flex-col h-full border-r border-white/5">
            {/* Branding */}
            <div className="p-6 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-aura-cyan/10 rounded flex items-center justify-center border border-aura-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.1)]">
                        <Sparkles className="text-aura-cyan" size={18} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-white leading-tight">Aura</h1>
                        <p className="text-[9px] text-aura-cyan font-mono uppercase tracking-[0.2em] opacity-80">Construction OS</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 space-y-1">
                {links.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => setActivePanel(link.id)}
                        className={`flex items-center gap-3.5 w-full px-4 py-3 rounded-xl transition-all group ${activePanel === link.id
                                ? 'bg-aura-cyan/10 text-aura-cyan border-l-2 border-aura-cyan rounded-l-none'
                                : 'text-gray-500 hover:text-white hover:bg-white/[0.03]'
                            }`}
                    >
                        <div className={`${activePanel === link.id ? 'text-aura-cyan' : 'text-gray-400 group-hover:text-white'}`}>
                            {link.icon}
                        </div>
                        <span className="text-[13px] font-medium tracking-tight">
                            {link.label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* Settings Footer */}
            <div className="p-4 border-t border-white/5">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:text-white transition-colors">
                    <Settings size={18} />
                    <span className="text-[13px] font-medium tracking-tight">Settings</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
