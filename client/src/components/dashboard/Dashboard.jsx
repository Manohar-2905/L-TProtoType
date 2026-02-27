import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import AIInsightPanel from './AIInsightPanel';
import DigitalTwinView from '../digital-twin/DigitalTwinView';
import axios from 'axios';

const Dashboard = ({ telemetry }) => {
    const [aiData, setAiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/ai/full-stack');
                setAiData(response.data);
            } catch (err) {
                console.error("AI Service Offline");
            }
        };
        fetchData();
    }, []);

    return (
        <div className="max-w-[1700px] mx-auto space-y-6">
            {/* Header & Data Integrations (Req 3) */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Project Command Center</h2>
                    <div className="flex items-center gap-4 mt-2">
                        <p className="text-gray-400 text-sm">Terminal 4 Expansion | Infrastructure Core</p>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <div className="flex gap-3">
                            {aiData?.analytics.data_integrations && Object.entries(aiData.analytics.data_integrations).map(([key, val]) => (
                                <div key={key} className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                                    <div className="w-1.5 h-1.5 rounded-full bg-aura-cyan" />
                                    <span className="text-[9px] font-mono text-gray-300 uppercase underline decoration-aura-cyan/30 underline-offset-4">{key}: {val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border-aura-green/20">
                        <div className="w-2 h-2 rounded-full bg-aura-green animate-pulse" />
                        <span className="text-[10px] font-mono text-aura-green uppercase tracking-tighter">Live Telemetry Outbound</span>
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6 pb-8">
                {/* Left Column (Req 2: Digital Twin) */}
                <div className="col-span-8 flex flex-col gap-6">
                    <div className="h-[550px] relative rounded-3xl overflow-hidden glass border border-aura-border group">
                        <DigitalTwinView />

                        {/* Overlay Stream Data (Req 3) */}
                        <div className="absolute top-6 left-6 z-10 flex flex-col gap-3">
                            <div className="flex gap-2">
                                <span className="bg-black/60 backdrop-blur-md text-[9px] px-2 py-1 rounded-md border border-white/10 font-mono text-gray-300">STREAM_ID_DRONE_ALPHA</span>
                                <span className="bg-aura-cyan/10 backdrop-blur-md text-aura-cyan text-[9px] px-2 py-1 rounded-md border border-aura-cyan/20 font-mono uppercase tracking-widest">BIM Sync v4.1 Active</span>
                            </div>
                            <div className="glass bg-black/40 p-4 rounded-xl border border-white/5 space-y-2 w-48 transition-transform group-hover:translate-x-1">
                                <p className="text-[10px] text-gray-400 font-mono uppercase">Telemetry Output</p>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-500">Drone Alt:</span>
                                    <span className="text-aura-cyan font-mono">{telemetry?.drone.altitude || '45m'}</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-500">Coverage:</span>
                                    <span className="text-aura-cyan font-mono">{telemetry?.drone.coverage || '88%'}</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-500">Weather:</span>
                                    <span className="text-aura-amber font-mono">{telemetry?.weather.temp || '28°C'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Progress Tracking (Req 2) */}
                        <div className="absolute bottom-6 left-6 z-10 glass bg-black/40 px-6 py-4 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Structural Progress</span>
                                    <span className="text-2xl font-bold text-aura-green">{telemetry?.progress.visual_completion || '65%'}</span>
                                </div>
                                <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-aura-green" style={{ width: telemetry?.progress.visual_completion || '65%' }} />
                                </div>
                                <span className="text-[10px] text-aura-cyan font-mono uppercase underline underline-offset-4 cursor-pointer">View Scan Report</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row (Req 4 & 5 Integration) */}
                    <div className="grid grid-cols-4 gap-6">
                        <StatCard label="Delay Risk" value={(aiData?.analytics.predictions.delay_risk.score * 100).toFixed(0) + "%"} trend={aiData?.analytics.predictions.delay_risk.trend} color="amber" />
                        <StatCard label="Cost Forecast" value="-$4.2k" trend="Nominal" color="cyan" />
                        <StatCard label="Productivity" value="94.2%" trend="Inc" color="green" />
                        <StatCard label="Crane Load" value={telemetry?.crane.load || '42%'} trend="Stable" color="cyan" />
                    </div>
                </div>

                {/* Right Column (Req 1, 5, 6) */}
                <div className="col-span-4 h-full">
                    <AIInsightPanel aiData={aiData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
