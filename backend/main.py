from fastapi import FastAPI
from pydantic import BaseModel
from backend import ai_summarize


class Text(BaseModel):
    text: str


app = FastAPI()


@app.get("/")
def read_root():
    return {"msg": "lol"}


@app.post("/summarize")
async def summarize(text: Text):
    print('ok hitting endpoint.')
    summarized = await ai_summarize.summarize_text(text.text)
    return {"content": summarized}
