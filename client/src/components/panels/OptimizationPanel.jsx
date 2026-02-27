import React, { useState } from 'react';
import { Cpu, Send, Zap, ListRestart, Terminal, ShieldAlert, Sparkles, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OptimizationPanel = ({ aiData }) => {
    const [chatInput, setChatInput] = useState('');
    const insight = aiData?.insights.top_insight;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white/90">AI Site Engineer</h2>
                    <p className="text-gray-500 text-[13px] mt-1">Autonomous Decision Intelligence v4.2-PRO</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 bg-aura-cyan/5 px-4 py-2 rounded-xl border border-aura-cyan/20">
                        <Sparkles size={14} className="text-aura-cyan" />
                        <span className="text-[10px] font-mono text-aura-cyan font-bold uppercase tracking-widest">Neural Sync Active</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 h-[calc(100vh-230px)]">
                {/* Main AI Interaction Hub */}
                <div className="col-span-8 flex flex-col gap-6 h-full">

                    {/* Primary Directive Card */}
                    <div className="glass-pro bg-gradient-to-br from-[#141C2F] to-[#0D1321] p-10 rounded-[40px] border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-aura-cyan/10 blur-[100px] rounded-full group-hover:bg-aura-cyan/20 transition-all duration-700" />

                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-12 h-12 bg-aura-cyan/10 rounded-2xl flex items-center justify-center border border-aura-cyan/30 text-aura-cyan">
                                <Wand2 size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-aura-cyan font-mono uppercase tracking-[0.3em] font-bold">Neural Optimization Directive</p>
                                <h3 className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-widest leading-none">Directive ID: TRF_OP_402</h3>
                            </div>
                        </div>

                        {insight ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative z-10"
                            >
                                <h4 className="text-4xl font-black text-white mb-6 leading-[1.1] tracking-tight max-w-2xl">{insight.title}</h4>

                                <div className="glass-pro bg-aura-cyan/5 p-8 rounded-3xl border border-aura-cyan/20 mb-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] bg-aura-cyan text-black px-2 py-0.5 rounded font-bold uppercase tracking-widest">Explainable Insight</span>
                                    </div>
                                    <p className="text-base text-gray-300 leading-relaxed font-medium">"{insight.summary}"</p>
                                    <div className="mt-6 pt-6 border-t border-white/5">
                                        <p className="text-[11px] text-aura-cyan/60 font-mono uppercase tracking-widest mb-2">Internal Logic Synthesis</p>
                                        <p className="text-[13px] text-gray-400 italic font-mono leading-relaxed">{insight.logic}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button className="aura-btn-primary flex items-center gap-3 px-8 py-4">
                                        Execute Directives <Zap size={18} />
                                    </button>
                                    <button className="px-8 py-4 rounded-xl glass-pro border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                                        Simulate Outcome
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-64 flex items-center justify-center text-gray-600 italic font-mono uppercase tracking-widest">Awaiting Neural Link...</div>
                        )}
                    </div>

                    {/* AI Command Bar (Bottom) */}
                    <div className="mt-auto glass-pro bg-black/40 p-4 rounded-3xl border border-white/10 flex items-center gap-4 shadow-2xl">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                            <Terminal size={18} />
                        </div>
                        <input
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Ask AI Engineer... (e.g. 'Optimize pouring sequence for Section B')"
                            className="flex-1 bg-transparent border-none outline-none text-[13px] text-gray-200 placeholder:text-gray-600 font-medium"
                        />
                        <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${chatInput ? 'bg-aura-cyan text-black' : 'bg-white/5 text-gray-700'}`}>
                            <Send size={18} />
                        </button>
                    </div>
                </div>

                {/* Sidebar Status Widgets */}
                <div className="col-span-4 flex flex-col gap-6 h-full">
                    <div className="glass-pro p-8 rounded-[40px] border border-white/5 flex-1 overflow-y-auto">
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center gap-3">
                                <ShieldAlert className="text-aura-cyan" size={20} />
                                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-400">Action Queue</h3>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { id: 1, type: 'critical', text: 'Section B Concrete Sync', gain: '+14%', active: true },
                                { id: 2, type: 'standard', text: 'Crane 03 Re-route', gain: '+4%', active: false },
                                { id: 3, type: 'standard', text: 'Labor Reallocation', gain: '+2%', active: false }
                            ].map((item) => (
                                <div key={item.id} className={`p-5 rounded-2xl border transition-all cursor-pointer ${item.active ? 'bg-aura-cyan/10 border-aura-cyan/40' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}>
                                    <div className="flex justify-between items-start mb-3">
                                        <span className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded ${item.type === 'critical' ? 'bg-aura-red text-white' : 'bg-gray-700 text-gray-300'}`}>
                                            {item.type}
                                        </span>
                                        <span className="text-xs font-black text-aura-cyan">{item.gain}</span>
                                    </div>
                                    <p className="text-[13px] font-bold text-white/90">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-pro p-8 rounded-[40px] border border-white/5 h-48 bg-[#0D1321]/40 overflow-hidden relative group">
                        <div className="flex items-center gap-2 mb-6">
                            <ListRestart className="text-gray-600" size={16} />
                            <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Autonomous Correction Log</span>
                        </div>
                        <div className="space-y-3 font-mono text-[10px]">
                            <div className="flex gap-4">
                                <span className="text-aura-cyan opacity-40">09:42</span>
                                <span className="text-gray-500">Crane 01 Idle detected. Re-routing staging.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-aura-cyan opacity-40">09:15</span>
                                <span className="text-gray-500">Humidity Spike. Auto-adjusting spec.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-aura-cyan opacity-40">08:30</span>
                                <span className="text-gray-500">Neural Sync: Baseline Recalibrated.</span>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0D1321] to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptimizationPanel;
