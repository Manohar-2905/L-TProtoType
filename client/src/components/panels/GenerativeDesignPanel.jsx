import React from 'react';
import { Layout, GitCompare, Box, Hammer, Target, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const GenerativeDesignPanel = ({ aiData }) => {
    const scenarios = aiData?.optimization.scenarios || [];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white/90">Generative Design Engine</h2>
                    <p className="text-gray-500 text-[13px] mt-1">Autonomous Plan Sequencing & Spatial Layouts</p>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Main Workspace - Scenario Comparison */}
                <div className="col-span-9 space-y-6">
                    <div className="glass-pro p-10 rounded-[40px] border border-white/5 bg-[#0D1321]/30">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-aura-cyan/10 rounded-xl flex items-center justify-center border border-aura-cyan/20">
                                    <Layout className="text-aura-cyan" size={20} />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight">Scenario Matrix</h3>
                            </div>
                            <div className="flex gap-2">
                                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-[10px] uppercase font-bold text-gray-400">Sort by ROI</div>
                                <div className="px-4 py-2 bg-aura-cyan text-black rounded-lg text-[10px] uppercase font-bold">New Exploration</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {scenarios.map((scenario) => (
                                <motion.div
                                    key={scenario.id}
                                    whileHover={{ y: -5 }}
                                    className={`p-8 rounded-[32px] border transition-all relative overflow-hidden group ${scenario.id === aiData?.optimization.primary_id
                                            ? 'bg-aura-cyan/5 border-aura-cyan/30 shadow-[0_0_40px_rgba(0,245,255,0.05)]'
                                            : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
                                        }`}
                                >
                                    {scenario.id === aiData?.optimization.primary_id && (
                                        <div className="absolute top-0 right-10 -translate-y-1/2 bg-aura-cyan text-black px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest pt-5">
                                            Aura Baseline
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-6">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-black text-white/90">{scenario.name}</h4>
                                            <p className="text-xs text-gray-500 font-medium">{scenario.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mb-8 pt-8 border-t border-white/5">
                                        <div className="space-y-1">
                                            <p className="text-[9px] text-gray-600 uppercase font-mono tracking-widest">Execution Speed</p>
                                            <span className={`text-sm font-black ${scenario.metrics.speed.includes('+') ? 'text-aura-green' : 'text-gray-400'}`}>{scenario.metrics.speed}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[9px] text-gray-600 uppercase font-mono tracking-widest">Resource Delta</p>
                                            <span className="text-sm font-black text-aura-cyan">{scenario.metrics.cost}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[9px] text-gray-600 uppercase font-mono tracking-widest">Risk Factor</p>
                                            <span className={`text-sm font-black ${scenario.metrics.risk.includes('Low') ? 'text-aura-green' : 'text-aura-amber'}`}>{scenario.metrics.risk}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className={`flex-1 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${scenario.id === aiData?.optimization.primary_id
                                                ? 'bg-aura-cyan text-black'
                                                : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                            }`}>
                                            Activate Plan
                                        </button>
                                        <button className="w-12 h-12 glass-pro rounded-xl flex items-center justify-center text-gray-500 hover:text-aura-cyan transition-colors">
                                            <GitCompare size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="glass-pro p-8 rounded-[40px] border border-white/5 bg-[#0D1321]/30 relative overflow-hidden h-64 group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Hammer size={120} />
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <Box className="text-aura-cyan" size={18} />
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Spatial Solver Engine</h3>
                            </div>
                            <p className="text-[13px] text-gray-500 max-w-xs leading-relaxed">
                                NVIDIA Jetson clusters are currently iterating <span className="text-aura-cyan font-bold">1,045</span> layout permutations/sec for Section C foundations.
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ x: [-48, 48] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                        className="w-1/2 h-full bg-aura-cyan"
                                    />
                                </div>
                                <span className="text-[10px] font-mono text-aura-cyan">Processing...</span>
                            </div>
                        </div>

                        <div className="glass-pro p-8 rounded-[40px] border border-white/5 bg-[#0D1321]/30 h-64">
                            <div className="flex items-center gap-3 mb-8">
                                <Sparkles className="text-aura-cyan" size={18} />
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Method Optimization</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs items-center group cursor-pointer">
                                    <span className="text-gray-500 group-hover:text-white transition-colors underline decoration-aura-cyan/20 decoration-2">Modular vs Stick Build</span>
                                    <span className="text-aura-green font-mono">+12% Gain</span>
                                </div>
                                <div className="flex justify-between text-xs items-center group cursor-pointer">
                                    <span className="text-gray-500 group-hover:text-white transition-colors underline decoration-aura-cyan/20 decoration-2">Robotic Grade Control</span>
                                    <span className="text-aura-cyan font-mono">+84pts Accuracy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Targets */}
                <div className="col-span-3 space-y-6">
                    <div className="glass-pro p-8 rounded-[40px] border border-white/5 h-full bg-gradient-to-br from-aura-card to-aura-navy">
                        <div className="flex items-center gap-3 mb-10">
                            <Target className="text-aura-cyan" size={24} />
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-200">KPI Benchmarks</h3>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Labor Efficiency</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-white">1,452h</span>
                                    <span className="text-xs text-aura-green font-bold">-12.4%</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full">
                                    <div className="h-full bg-aura-cyan w-[88%]" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Concrete Utilization</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-white">325m³</span>
                                    <span className="text-xs text-aura-cyan font-bold">OPTIMIZED</span>
                                </div>
                                <div className="w-full h-1 bg-white/5 rounded-full">
                                    <div className="h-full bg-aura-amber w-[45%]" />
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/5">
                                <button className="flex items-center justify-between w-full text-xs font-bold text-gray-400 hover:text-aura-cyan transition-all">
                                    Export Scenario Report <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerativeDesignPanel;
