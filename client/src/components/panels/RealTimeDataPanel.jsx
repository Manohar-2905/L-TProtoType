import React from 'react';
import { Radio, Zap, Activity, Thermometer, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const Sparkline = ({ color }) => (
    <div className="flex items-end gap-[2px] h-8 w-32">
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ height: 4 }}
                animate={{ height: `${4 + Math.random() * 20}px` }}
                className={`w-[4px] rounded-full ${color}`}
            />
        ))}
    </div>
);

const RealTimeDataPanel = ({ telemetry }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Data Pulse</h2>
                    <p className="text-gray-500 text-[13px] mt-1">IoT Sensor Fabric & High-Velocity Telemetry</p>
                </div>
                <div className="flex items-center gap-2 bg-aura-cyan/10 px-3 py-1.5 rounded-lg border border-aura-cyan/30">
                    <div className="w-2 h-2 rounded-full bg-aura-cyan animate-pulse" />
                    <span className="text-[10px] font-mono text-aura-cyan uppercase tracking-widest font-bold">Streaming Active</span>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Main Stats Fabric */}
                <div className="col-span-12 glass-pro bg-[#0D1321]/40 p-8 rounded-[32px] border border-white/5 relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-10">
                        <Radio className="text-aura-cyan opacity-80" size={20} />
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Sensor Network Overview</h3>
                    </div>

                    <div className="grid grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Atmospheric Temp</p>
                            <div className="flex items-center gap-6">
                                <span className="text-4xl font-black text-white">{telemetry?.weather.temp || '28.5°C'}</span>
                                <Sparkline color="bg-aura-cyan" />
                            </div>
                        </div>
                        <div className="space-y-4 border-l border-white/5 pl-8">
                            <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Wind Velocity</p>
                            <div className="flex items-center gap-6">
                                <span className="text-4xl font-black text-aura-amber">{telemetry?.weather.wind || '12km/h'}</span>
                                <Sparkline color="bg-aura-amber" />
                            </div>
                        </div>
                        <div className="space-y-4 border-l border-white/5 pl-8">
                            <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Hydration Level</p>
                            <div className="flex items-center gap-6">
                                <span className="text-4xl font-black text-aura-green">64%</span>
                                <Sparkline color="bg-aura-green" />
                            </div>
                        </div>
                        <div className="space-y-4 border-l border-white/5 pl-8">
                            <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Structural Vibration</p>
                            <div className="flex items-center gap-6">
                                <span className="text-4xl font-black text-white">1.2g</span>
                                <Sparkline color="bg-gray-700" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Feed Grid */}
                <div className="col-span-8 glass-pro p-8 rounded-[32px] border border-white/5">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                            <Activity className="text-aura-cyan" size={20} />
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">Sub-Sector Telemetry</h3>
                        </div>
                        <span className="text-[10px] font-mono text-gray-600">452 Active Nodes</span>
                    </div>

                    <div className="grid grid-cols-6 gap-3">
                        {[...Array(18)].map((_, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-2xl flex flex-col items-center hover:bg-white/[0.04] transition-all cursor-default group">
                                <p className="text-[8px] font-mono text-gray-600 mb-2 group-hover:text-aura-cyan">SN_{i.toString().padStart(3, '0')}</p>
                                <p className={`text-sm font-black ${Math.random() > 0.1 ? 'text-gray-300' : 'text-aura-amber'}`}>
                                    {(20 + Math.random() * 30).toFixed(1)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-4 flex flex-col gap-6">
                    <div className="glass-pro p-8 rounded-[32px] border border-white/5 flex-1 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Thermometer size={120} />
                        </div>
                        <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Concrete State</h3>
                        <h4 className="text-2xl font-bold mb-6 italic">Curing Alpha-V</h4>
                        <div className="space-y-3 relative z-10">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Internal Temp</span>
                                <span className="text-white font-mono">31.4°C</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-500">Moisture Index</span>
                                <span className="text-aura-cyan font-mono">Low</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-4">
                                <div className="bg-aura-cyan h-full w-[74%]" />
                            </div>
                        </div>
                    </div>

                    <div className="glass-pro p-8 rounded-[32px] border border-white/5 flex-1 bg-aura-cyan/5">
                        <div className="flex items-center gap-2 text-aura-cyan mb-4">
                            <Zap size={18} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Direct Command</span>
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-gray-300">Requesting manual humidity scan for Sector C to verify AI calibration.</p>
                        <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                            Initiate Probe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealTimeDataPanel;
