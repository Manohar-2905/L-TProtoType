import React from 'react';
import { Landmark, TrendingUp, Target, ShieldCheck, Zap, Server, Database, Cloud, Network } from 'lucide-react';

const ExecutiveInsightsPanel = ({ aiData }) => {
    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* Page Header */}
            <div className="flex justify-between items-baseline border-b border-white/5 pb-8 px-2">
                <div className="space-y-1">
                    <p className="text-[10px] font-mono text-aura-cyan uppercase tracking-[0.4em] font-bold">Version 1.2.0 • INTERNAL USE ONLY</p>
                    <h1 className="text-5xl font-black tracking-tight text-white mb-2">Aura: System Blueprint & ROI</h1>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Last Sync: Oct 2023</p>
                </div>
            </div>

            {/* 1. Vision Statement */}
            <section className="space-y-6">
                <div className="flex items-center gap-4">
                    <span className="text-aura-cyan font-bold text-xl font-mono italic">01.</span>
                    <h2 className="text-2xl font-bold tracking-tight">Vision</h2>
                </div>
                <div className="glass-pro bg-[#141C2F]/40 p-10 rounded-[40px] border border-aura-cyan/10 relative overflow-hidden">
                    <p className="text-2xl font-medium leading-relaxed text-gray-200 indent-8">
                        "To revolutionize construction by replacing reactive management with <span className="text-aura-cyan italic">proactive AI-driven autonomy</span>. Aura serves as a living, breathing operating system for the physical job site."
                    </p>
                </div>
            </section>

            {/* 2. System Architecture Layers */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <span className="text-aura-cyan font-bold text-xl font-mono italic">02.</span>
                    <h2 className="text-2xl font-bold tracking-tight">System Architecture</h2>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="glass-pro p-8 rounded-3xl border border-white/5 bg-[#0D1321]/40 hover:border-aura-cyan/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-aura-amber/10 rounded-xl flex items-center justify-center border border-aura-amber/20">
                                <Network className="text-aura-amber" size={20} />
                            </div>
                            <h3 className="font-black uppercase tracking-widest text-sm text-gray-300">Edge Layer</h3>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">IoT Sensors, Drones (DJI/Skydio), Crane Telemetry and on-site processing units for immediate threat detection.</p>
                    </div>
                    <div className="glass-pro p-8 rounded-3xl border border-white/5 bg-[#0D1321]/40 hover:border-aura-cyan/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-aura-cyan/10 rounded-xl flex items-center justify-center border border-aura-cyan/20">
                                <Database className="text-aura-cyan" size={20} />
                            </div>
                            <h3 className="font-black uppercase tracking-widest text-sm text-gray-300">Data Pipeline</h3>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">Apache Kafka for real-time streaming, Snowflake for the Data Lake architecture to support high-scale analytics.</p>
                    </div>
                    <div className="glass-pro p-8 rounded-3xl border border-white/5 bg-[#0D1321]/40 hover:border-aura-cyan/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-aura-green/10 rounded-xl flex items-center justify-center border border-aura-green/20">
                                <Zap className="text-aura-green" size={20} />
                            </div>
                            <h3 className="font-black uppercase tracking-widest text-sm text-gray-300">AI Stack</h3>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">PyTorch for predictive models, LangChain for the 'AI Site Engineer' interface, Three.js for Digital Twin rendering.</p>
                    </div>
                    <div className="glass-pro p-8 rounded-3xl border border-white/5 bg-[#0D1321]/40 hover:border-aura-cyan/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-aura-cyan/5 rounded-xl flex items-center justify-center border border-white/10">
                                <Cloud className="text-gray-500" size={20} />
                            </div>
                            <h3 className="font-black uppercase tracking-widest text-sm text-gray-300">Cloud Infra</h3>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">AWS Ecosystem (EKS) for microservices orchestration, SageMaker for specialized ML training and deployment.</p>
                    </div>
                </div>
            </section>

            {/* 3. Business Impact / ROI */}
            <section className="space-y-8 pt-8">
                <div className="flex items-center gap-4">
                    <span className="text-aura-cyan font-bold text-xl font-mono italic">03.</span>
                    <h2 className="text-2xl font-bold tracking-tight">Business Impact</h2>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="glass-pro bg-black/40 p-10 rounded-[40px] border border-white/5 text-center flex flex-col items-center justify-center">
                        <span className="text-6xl font-black text-aura-cyan italic mb-2">22%</span>
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">Schedule Delays Reduction</p>
                    </div>
                    <div className="glass-pro bg-black/40 p-10 rounded-[40px] border border-white/5 text-center flex flex-col items-center justify-center">
                        <span className="text-6xl font-black text-white italic mb-2">15%</span>
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">Material Waste Reduction</p>
                    </div>
                    <div className="glass-pro bg-black/40 p-10 rounded-[40px] border border-white/5 text-center flex flex-col items-center justify-center">
                        <span className="text-6xl font-black text-aura-green italic mb-2">30%</span>
                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">Site Safety Improvement</p>
                    </div>
                </div>
            </section>

            {/* Footer Nav */}
            <div className="flex justify-between items-center pt-20 border-t border-white/5 mt-20 opacity-40">
                <button className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">← Executive Summary</button>
                <button className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">Implementation Roadmap →</button>
            </div>
        </div>
    );
};

export default ExecutiveInsightsPanel;
