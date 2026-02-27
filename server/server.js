const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

// Proxy AI Services
// Proxy AI Services
const AI_URL = process.env.AI_ENGINE_URL || 'http://localhost:8000';

app.get('/api/ai/full-stack', async (req, res) => {
    try {
        const [opt, ana, ins] = await Promise.all([
            axios.get(`${AI_URL}/optimize`),
            axios.get(`${AI_URL}/analytics`),
            axios.get(`${AI_URL}/insights`)
        ]);
        res.json({
            optimization: opt.data,
            analytics: ana.data,
            insights: ins.data
        });
    } catch (error) {
        res.status(500).json({ error: 'AI Service Offline' });
    }
});

// Enriched Real-Time Stream (Req 2 & 3)
setInterval(() => {
    const telemetry = {
        crane: { status: 'Active', load: `${Math.floor(40 + Math.random() * 20)}%` },
        drone: { status: 'Mapping', altitude: '45m', coverage: `${Math.floor(80 + Math.random() * 10)}%` },
        weather: { temp: `${(28 + Math.random() * 5).toFixed(1)}°C`, wind: '12km/h', alert: 'None' },
        progress: { visual_completion: `${Math.floor(65 + Math.random() * 5)}%` },
        timestamp: new Date()
    };
    io.emit('telemetry_pulse', telemetry);
}, 3000);

// Serve Static Frontend
app.use(express.static(path.join(__dirname, '../client/dist')));

// SPA Catch-all
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Aura Enhanced Server running on port ${PORT}`));
