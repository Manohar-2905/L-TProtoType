import React from 'react';
import { Cpu, Zap, AlertTriangle, PlayCircle, BarChart3, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const AIInsightPanel = ({ aiData }) => {
    if (!aiData) return (
        <div className="glass p-6 rounded-2xl h-full animate-pulse border border-aura-border">
            <div className="h-4 bg-white/5 rounded w-1/2 mb-8" />
            <div className="h-32 bg-white/5 rounded w-full mb-4" />
            <div className="h-32 bg-white/5 rounded w-full" />
        </div>
    );

    const { optimization, analytics, insights } = aiData;
    const primaryScenario = optimization.scenarios.find(s => s.id === optimization.primary_id);

    return (
        <div className="flex flex-col h-full gap-6">
            {/* 6. DECISION SUPPORT SYSTEM (Explainable AI) */}
            <div className="glass p-6 rounded-2xl border-l-4 border-l-aura-cyan relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                    <Cpu className="text-aura-cyan" size={18} />
                    <h3 className="font-bold text-sm tracking-tight">AI Site Engineer</h3>
                    <span className="ml-auto text-[8px] font-mono bg-aura-cyan/10 text-aura-cyan px-2 py-1 rounded">INSIGHT v4</span>
                </div>

                <div className="bg-aura-navy/40 p-4 rounded-xl border border-white/5 mb-4">
                    <p className="text-[10px] text-aura-cyan font-mono uppercase mb-2">Primary Recommendation</p>
                    <p className="text-xs font-bold text-white mb-2">{insights.top_insight.title}</p>
                    <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
                        {insights.top_insight.summary}
                    </p>

                    <div className="p-3 bg-white/5 rounded-lg border border-aura-border mb-4">
                        <div className="flex items-center gap-2 mb-1">
                            <Info size={12} className="text-aura-cyan" />
                            <span className="text-[10px] font-mono text-aura-cyan uppercase">Explainable Logic</span>
                        </div>
                        <p className="text-[10px] text-gray-400 italic">"{insights.top_insight.logic}"</p>
                    </div>

                    <button className="w-full bg-aura-cyan text-black py-2.5 rounded font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2">
                        <Zap size={14} /> {insights.top_insight.action_label}
                    </button>
                </div>
            </div>

            {/* 1 & 5. GENERATIVE DESIGN & OPTIMIZATION */}
            <div className="glass p-6 rounded-2xl border border-aura-border">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-[10px] font-mono uppercase text-gray-400 tracking-widest flex items-center gap-2">
                        <BarChart3 size={14} /> Scenario Comparison
                    </h3>
                    <span className="text-[9px] text-aura-cyan underline cursor-pointer">Compare All (2)</span>
                </div>

                <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-aura-cyan/5 border border-aura-cyan/20">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-[11px] font-bold text-aura-cyan">{primaryScenario.name}</span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 bg-aura-cyan text-black rounded uppercase">Selected</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mb-3">{primaryScenario.description}</p>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-[8px] text-gray-500 uppercase">Speed</span>
                                <span className="text-[10px] font-bold text-aura-green">{primaryScenario.metrics.speed}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] text-gray-500 uppercase">Cost</span>
                                <span className="text-[10px] font-bold text-aura-cyan">{primaryScenario.metrics.cost}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. PREDICTIVE ANALYTICS */}
            <div className="glass p-6 rounded-2xl border border-aura-border flex-1">
                <h3 className="text-[10px] font-mono uppercase text-gray-400 mb-6 flex items-center gap-2">
                    <AlertTriangle size={14} /> Predictive Risk Vectors
                </h3>
                <div className="space-y-5">
                    {Object.entries(analytics.predictions).map(([key, data], idx) => (
                        <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-[11px]">
                                <span className="capitalize">{key.replace('_', ' ')}</span>
                                <span className={`${data.score > 0.1 ? 'text-aura-amber' : 'text-gray-400'}`}>
                                    {data.trend === 'up' ? '▲' : '▼'} {data.trend.toUpperCase()}
                                </span>
                            </div>
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${data.score * 100}%` }}
                                    className={`h-full ${data.score > 0.1 ? 'bg-aura-amber' : 'bg-aura-cyan'}`}
                                />
                            </div>
                            <p className="text-[9px] text-gray-500 italic mt-1 leading-tight">Reason: {data.reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AIInsightPanel;
