import uvicorn

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/', response_class=JSONResponse)
async def test():
    response = {'status': 'success', 'message': 'Hello World!'}
    return JSONResponse(content=response)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000, log_level="debug")