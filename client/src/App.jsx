import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DigitalTwinPanel from './components/panels/DigitalTwinPanel';
import GenerativeDesignPanel from './components/panels/GenerativeDesignPanel';
import SimulationRiskPanel from './components/panels/SimulationRiskPanel';
import RealTimeDataPanel from './components/panels/RealTimeDataPanel';
import OptimizationPanel from './components/panels/OptimizationPanel';
import ExecutiveInsightsPanel from './components/panels/ExecutiveInsightsPanel';
import { io } from 'socket.io-client';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';
const socket = io(SERVER_URL);

function App() {
    const [activePanel, setActivePanel] = useState('digital-twin');
    const [telemetry, setTelemetry] = useState(null);
    const [aiData, setAiData] = useState(null);

    useEffect(() => {
        socket.on('telemetry_pulse', (data) => {
            setTelemetry(data);
        });

        const fetchAIData = async () => {
            try {
                const res = await axios.get(`${SERVER_URL}/api/ai/full-stack`);
                setAiData(res.data);
            } catch (e) { console.error("AI Offline"); }
        };
        fetchAIData();

        const interval = setInterval(fetchAIData, 10000); // Refresh AI data every 10s

        return () => {
            socket.off('telemetry_pulse');
            clearInterval(interval);
        }
    }, []);

    const renderPanel = () => {
        const props = { telemetry, aiData };
        switch (activePanel) {
            case 'digital-twin': return <DigitalTwinPanel {...props} />;
            case 'generative': return <GenerativeDesignPanel {...props} />;
            case 'simulation': return <SimulationRiskPanel {...props} />;
            case 'data-streams': return <RealTimeDataPanel {...props} />;
            case 'optimization': return <OptimizationPanel {...props} />;
            case 'executive': return <ExecutiveInsightsPanel {...props} />;
            default: return <DigitalTwinPanel {...props} />;
        }
    };

    return (
        <div className="flex h-screen bg-[#050A14] text-white overflow-hidden font-sans">
            <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto bg-[#050A14]">
                    <div className="p-8">
                        {renderPanel()}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
