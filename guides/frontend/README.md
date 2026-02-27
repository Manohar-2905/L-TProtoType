# Aura Frontend Guide: React & Digital Twin

This guide explains the frontend architecture of the Aura Autonomous Construction OS.

## Tech Stack
- **React (Vite)**: Chosen for rapid state management and fast build times.
- **Three.js (R3F)**: Used to render the 3D Digital Twin efficiently within React.
- **Tailwind CSS**: Implements the high-density, dark-mode "Mission Control" aesthetic.
- **Socket.io-client**: Connects to the backend for real-time telemetry pulses.

## Folder Structure
- `/src/components/layout`: Sidebar and global layout shells.
- `/src/components/dashboard`: Main command center widgets (StatCards, InsightPanels).
- `/src/components/digital-twin`: Three.js rendering logic and shaders.
- `/src/index.css`: Global glassmorphism and glow utilities.

## Core Concepts
### 1. The Digital Twin
The `DigitalTwinView.jsx` uses `@react-three/fiber`. It renders a simulated construction site using simple geometries. In a production environment, this would load **IFC** or **GLTF** models from a BIM source.

### 2. State Sync
The `App.jsx` maintains a websocket connection. Every 2 seconds, the `telemetry_pulse` updates the UI state, causing the `StatCard` values (Concrete Temp, Crane Load) to react immediately without a page refresh.

## Key Screens
- **Command Center**: The primary cockpit for Project Managers to monitor live site health.
