import React from 'react';
import DigitalTwinView from '../digital-twin/DigitalTwinView';
import { Maximize2, Layers, Search, Video } from 'lucide-react';

const DigitalTwinPanel = ({ telemetry }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white/90">Digital Twin Platform</h2>
                    <p className="text-gray-500 max-w-2xl mt-1 text-[13px] leading-relaxed">
                        <span className="text-aura-cyan font-bold uppercase tracking-wider text-[11px] mr-2">Core Purpose:</span>
                        Synchronizes BIM models with real-world site conditions via sub-second LiDAR updates.
                    </p>
                </div>
            </div>

            <div className="h-[650px] relative rounded-3xl overflow-hidden glass-pro border border-white/5 group shadow-2xl">
                <DigitalTwinView />

                {/* PRO Overlays */}
                <div className="absolute top-6 left-6 z-10 flex flex-col gap-4">
                    <div className="flex gap-2">
                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                            <Video size={12} className="text-aura-cyan animate-pulse" />
                            <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">LIVESTREAM_DRONE_03</span>
                        </div>
                        <div className="bg-aura-cyan/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-aura-cyan/30">
                            <span className="text-[10px] font-mono text-aura-cyan uppercase tracking-widest font-bold">TELEPRESENCE ACTIVE</span>
                        </div>
                    </div>

                    <div className="glass-pro bg-black/40 p-5 rounded-2xl border border-white/10 w-64 translate-x-0 transition-transform group-hover:translate-x-1">
                        <p className="text-[10px] text-aura-cyan font-mono uppercase tracking-[0.2em] mb-4">Structural Analysis</p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-[11px] text-gray-500">Built Elevation:</span>
                                <span className="text-[11px] text-white font-mono">14.24m</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[11px] text-gray-500">Tolerance Diff:</span>
                                <span className="text-[11px] text-aura-green font-mono">0.02mm</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[11px] text-gray-500">Asset Count:</span>
                                <span className="text-[11px] text-white font-mono">1,054 units</span>
                            </div>
                        </div>
                        <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-aura-cyan h-full w-[82%]" />
                            </div>
                            <div className="flex justify-between text-[9px] text-gray-600 font-mono">
                                <span>LOD 100</span>
                                <span>LOD 400</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Viewport Controls */}
                <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
                    <button className="w-10 h-10 glass-pro rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Search size={18} />
                    </button>
                    <button className="w-10 h-10 glass-pro rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Layers size={18} />
                    </button>
                    <button className="w-10 h-10 glass-pro rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                        <Maximize2 size={18} />
                    </button>
                </div>

                {/* Progress Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                    <div className="glass-pro bg-black/40 px-8 py-5 rounded-3xl border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Total Completion</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-white">{telemetry?.progress.visual_completion || '65%'}</span>
                                    <span className="text-[10px] text-aura-green font-bold">+2.4% vs Manual</span>
                                </div>
                            </div>
                            <div className="w-64 h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                <div className="h-full bg-gradient-to-r from-aura-cyan to-blue-500" style={{ width: telemetry?.progress.visual_completion || '65%' }} />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-right">
                                <p className="text-[10px] text-gray-500 font-mono uppercase">Last Laser Scan</p>
                                <p className="text-xs font-bold text-gray-300">0.2s ago - Sector B</p>
                            </div>
                            <button className="aura-btn-primary flex items-center gap-2">
                                Generate Scan Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalTwinPanel;
