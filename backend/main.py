from fastapi import FastAPI
from pydantic import BaseModel
from backend import ai_summarize
from fastapi.middleware.cors import CORSMiddleware


class Text(BaseModel):
    text: str


app = FastAPI()

origins = [
    # Allowed origins here
    "http://localhost",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"msg": "lol"}


@app.post("/summarize")
async def summarize(text: Text):
    summarized = await ai_summarize.summarize_text(text.text)
    return {"content": summarized}
