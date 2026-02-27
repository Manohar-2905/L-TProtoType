# Aura Prototype: Launch Guide

This prototype showcases the "Autonomous Construction OS" features using a MERN stack + Python AI logic.

## Prerequisites
- Node.js (v18+)
- Python (v3.9+)

## Launch Sequence (Run in 3 separate terminals)

### 1. AI Service (Python)
```bash
cd ai-engine
pip install fastapi uvicorn
python main.py
```
*Accessible at: http://localhost:8000*

### 2. Orchestration Server (Node.js)
```bash
cd server
npm install
npm run dev
```
*Accessible at: http://localhost:5000*

### 3. Command Center UI (React)
```bash
cd client
npm install
npm run dev
```
*Accessible at: http://localhost:5173*

---

## What to Showcase to your Team Lead:
1.  **Top-Right "Live Stream":** Shows heartbeats from the Socket.io server.
2.  **3D Digital Twin:** Use mouse to rotate/zoom the construction site.
3.  **AI Insight Panel:** Real-time recommendations pulled from the Python service (e.g., "Shift Zone 3 pouring").
4.  **Predictive Risks:** Confidence-scored metrics for Weather and Supply Chain.
