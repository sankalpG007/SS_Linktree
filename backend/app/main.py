from fastapi import FastAPI

app = FastAPI(
    title="SS_Linktree API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "SS_Linktree API Running"
    }