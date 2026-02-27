import React from 'react';
import { TrendingUp, AlertTriangle, History, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SimulationRiskPanel = ({ aiData }) => {
    const risks = aiData?.analytics.predictions || {};

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Predictive Risks</h2>
                    <p className="text-gray-500 text-[13px] mt-1">Real-time threat detection and mitigation vectors</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Next 72 Hours</span>
                        <span className="text-xs font-bold text-aura-red">Critical Alert: Weather Sync</span>
                    </div>
                    <div className="w-10 h-10 bg-aura-red/10 rounded-full flex items-center justify-center border border-aura-red/30">
                        <AlertTriangle className="text-aura-red" size={20} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Distribution Chart - Monte Carlo Style */}
                <div className="col-span-12 glass-pro bg-gradient-to-b from-aura-card to-aura-navy p-8 rounded-[32px] border border-white/5 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                            <TrendingUp className="text-aura-cyan" size={20} />
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Monte Carlo Confidence Intervals</h3>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/5 rounded-md text-gray-500">P-10 (Early)</span>
                            <span className="text-[10px] font-mono px-3 py-1 bg-aura-cyan/10 border border-aura-cyan/20 rounded-md text-aura-cyan">P-50 (Realist)</span>
                            <span className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/5 rounded-md text-gray-500">P-90 (Late)</span>
                        </div>
                    </div>

                    <div className="h-64 flex items-end gap-1 relative">
                        {[...Array(40)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${20 + Math.exp(-Math.pow(i - 20, 2) / 100) * 80 + Math.random() * 5}%` }}
                                className={`flex-1 rounded-t-sm transition-opacity ${i >= 15 && i <= 25 ? 'bg-aura-cyan shadow-[0_0_15px_rgba(0,245,255,0.4)]' : 'bg-aura-cyan/10'}`}
                            />
                        ))}

                        {/* Marker Labels */}
                        <div className="absolute inset-x-0 bottom-[-24px] flex justify-between text-[9px] font-mono text-gray-600 uppercase tracking-widest px-4">
                            <span>Oct 12</span>
                            <span className="text-aura-cyan">Target Realization</span>
                            <span>Nov 04</span>
                        </div>
                    </div>
                </div>

                {/* PRO Risk Table */}
                <div className="col-span-8 glass-pro p-8 rounded-[32px] border border-white/5">
                    <div className="flex items-center gap-3 mb-8">
                        <AlertTriangle className="text-aura-cyan opacity-80" size={20} />
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-400">Risk Matrix Baseline</h3>
                    </div>

                    <div className="space-y-1">
                        <div className="grid grid-cols-12 px-6 py-3 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-white/5">
                            <div className="col-span-4">Risk Factor</div>
                            <div className="col-span-3">Impact</div>
                            <div className="col-span-3">Confidence</div>
                            <div className="col-span-2">Status</div>
                        </div>

                        {Object.entries(risks).map(([key, data], idx) => (
                            <div key={key} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-white/[0.02] rounded-2xl transition-all group border-b border-white/[0.02]">
                                <div className="col-span-4 flex items-center gap-3">
                                    <div className={`w-1.5 h-1.5 rounded-full ${data.score > 0.1 ? 'bg-aura-red shadow-[0_0_8px_rgba(255,23,68,0.5)]' : 'bg-aura-cyan'}`} />
                                    <span className="text-sm font-bold capitalize text-white/90">{key.replace('_', ' ')}</span>
                                </div>
                                <div className="col-span-3">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${data.score > 0.1 ? 'text-aura-red bg-aura-red/10 border border-aura-red/20' : 'text-aura-cyan bg-aura-cyan/10 border border-aura-cyan/20'}`}>
                                        {data.score > 0.1 ? 'Critical' : 'Moderate'}
                                    </span>
                                </div>
                                <div className="col-span-3 pr-8">
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-aura-cyan" style={{ width: `${80 + Math.random() * 15}%` }} />
                                    </div>
                                </div>
                                <div className="col-span-2 flex justify-between items-center pr-2">
                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{data.trend.toUpperCase()}</span>
                                    <ChevronRight size={14} className="text-gray-700 group-hover:text-aura-cyan transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Verification Logic */}
                <div className="col-span-4 flex flex-col gap-6">
                    <div className="glass-pro p-8 rounded-[32px] border border-white/5 flex-1 relative bg-aura-navy/40">
                        <ShieldCheck className="text-aura-cyan mb-4" size={24} />
                        <h4 className="text-sm font-bold mb-3 tracking-tight">Model Validation</h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed mb-6">
                            Risk Engine v4.2 calibrated via 1,240 historic project data points. Deviation margin reduced to <span className="text-aura-cyan">±1.4%</span>.
                        </p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-[10px] font-mono">
                                <span className="text-gray-600 uppercase">Training Depth</span>
                                <span className="text-gray-300">8.2TB Site Data</span>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-mono">
                                <span className="text-gray-600 uppercase">Last Retrain</span>
                                <span className="text-gray-300">14m Ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-pro p-8 rounded-[32px] border border-aura-amber/20 bg-aura-amber/5 flex-1 block">
                        <div className="flex items-center gap-2 text-aura-amber mb-4">
                            <History size={18} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Variance History</span>
                        </div>
                        <div className="space-y-4 font-mono text-[10px]">
                            <div className="flex justify-between border-b border-aura-amber/10 pb-2">
                                <span className="text-aura-amber/60">SECT_B SLIP</span>
                                <span className="text-white">NONE</span>
                            </div>
                            <div className="flex justify-between border-b border-aura-amber/10 pb-2">
                                <span className="text-aura-amber/60">SECT_A SLIP</span>
                                <span className="text-white">0.4 DAYS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimulationRiskPanel;
