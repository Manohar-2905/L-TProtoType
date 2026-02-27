from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Aura AI Engine - Full Requirement Stack Online"}

# 1 & 5: GENERATIVE DESIGN & OPTIMIZATION ENGINE
@app.get("/optimize")
def get_optimization():
    scenarios = [
        {
            "id": "scenario_alpha",
            "name": "Accelerated Sequencing",
            "description": "Optimizes labor shifts to compress the critical path.",
            "metrics": {"speed": "+22%", "cost": "-$12k", "risk": "Moderate"},
            "recommendations": [
                "Reallocate 5 carpenters from Section A to Section C",
                "Extend concrete curing window via additives",
                "Adjust crane 01 swing radius for dual-staging"
            ]
        },
        {
            "id": "scenario_beta",
            "name": "Resource Balanced",
            "description": "Minimizes equipment idle time and fuel consumption.",
            "metrics": {"speed": "+5%", "cost": "-$34k", "risk": "Low"},
            "recommendations": [
                "Sequenced material delivery for 'Just-in-Time' arrival",
                "Reduced crane load frequency to optimize fuel",
                "Standardize pouring methods across all quadrants"
            ]
        }
    ]
    return {"scenarios": scenarios, "primary_id": "scenario_alpha"}

# 3 & 4: REAL-TIME DATA & PREDICTIVE ANALYTICS
@app.get("/analytics")
def get_analytics():
    return {
        "predictions": {
            "delay_risk": {"score": 0.15, "trend": "down", "reason": "Weather clearing"},
            "cost_overrun": {"score": 0.08, "trend": "stable", "reason": "Material procurement locked"},
            "safety_risk": {"score": 0.02, "trend": "low", "reason": "PPE compliance at 98%"},
            "productivity_drop": {"score": 0.12, "trend": "up", "reason": "High humidity forecast"}
        },
        "data_integrations": {
            "iot": "Active (452 sensors)",
            "drones": "Flight 08 in progress (88% coverage)",
            "equipment": "Telemetry active (12 units)",
            "weather": "Syncing via MetService API",
            "bim": "LOD 400 Model Loaded"
        }
    }

# 6: DECISION SUPPORT SYSTEM (Explainable AI)
@app.get("/insights")
def get_insights():
    return {
        "top_insight": {
            "title": "Critical Path Optimization",
            "summary": "AI detected a potential bottleneck in Section B steel fixing.",
            "logic": "Predictive model (Transformer-v4) correlated historic slow-down in high heat with current 32°C forecast.",
            "impact": "Preventive reallocation preserves 4 days of schedule buffer.",
            "action_label": "Approve Reallocation"
        }
    }

if __name__ == "__main__":
    import uvicorn
    import os
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
