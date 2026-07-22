# ApexPulse Backend API
# Developer 1 - Backend Lead
# Framework: FastAPI

# Import the FastAPI framework
from fastapi import FastAPI

# Import CORS middleware
from fastapi.middleware.cors import CORSMiddleware

# Import Python's built-in JSON module
import json

# Create an instance of the FastAPI application
app = FastAPI(
    title="ApexPulse Operations Dashboard API",
    description="REST API for monitoring servers, KPIs and system logs.",
    version="1.0.0"
)

# Allow the Vue.js frontend to communicate with this API
origins = [
    "http://localhost:5173"
]

# Adding CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Load the dashboard data from a JSON file
with open("data/dashboard_data.json", "r") as file:
    dashboard_data = json.load(file)

# HOME ROUTE
@app.get("/")
def home():
    return {
        "message": "Welcome to ApexPulse Backend API"
    }

# KPI SUMMARY
@app.get("/api/summary")
def get_summary():
    return dashboard_data["summary"]

# ALL SERVERS
@app.get("/api/servers")
def get_servers(status: str = None):

    servers = dashboard_data["server_fleet"]

    if status:
        servers = [
            server
            for server in servers
            if server["status"].lower() == status.lower()
        ]

    return servers

# ALL LOGS
@app.get("/api/logs")
def get_logs(level: str = None):

    logs = dashboard_data["logs"]

    if level:
        logs = [
            log
            for log in logs
            if log["level"].lower() == level.lower()
        ]

    return logs