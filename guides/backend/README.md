# Aura Backend Guide: Node.js Orchestration

The Aura backend acts as the "Central Nervous System," connecting the physical site (simulated) to the AI engine and the frontend.

## Tech Stack
- **Express.js**: Lightweight framework for the orchestration API.
- **Socket.io**: Powers the real-time "Data Pulse" event stream.
- **Axios**: Proxies requests to the Python AI service.

## Core Logic
### 1. AI Proxying
The Node server does not perform heavy AI computation. Instead, it exposes `/api/ai/*` endpoints that translate frontend requests into internal calls to the Python `ai-engine` running on port 8000. This pattern separates concerns:
- Node handles user sessions, concurrency, and real-time streams.
- Python handles data science and heavy optimization math.

### 2. Telemetry Simulation
The `server.js` includes a `setInterval` block that mimics on-site IoT sensors. It emits a `telemetry_pulse` via Socket.io. This is designed to show stakeholders how Aura handles high-velocity data.

## Development Workflow
Run `npm run dev` to start the server with **Nodemon**, which automatically restarts the server on any code change in `server.js`.
