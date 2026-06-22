from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.application_routes import (
    router as application_router
)
from app.routers.course_routes import router as course_router

app = FastAPI(
    title="SS_Linktree API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(course_router)
app.include_router(application_router)

@app.get("/")
def root():
    return {
        "message": "SS_Linktree API Running"
    }