# All About API
Simple API for several programming languages

## Content

- [Python](#python)
  - [Flask](#flask)
  - [FastAPI](#fastapi)

- [Javascript](#javascript)
  - [Express](#express)
  - [Fastify](#fastify)
  - [Restify](#restify)

## Python

### Flask

**[ Requirements ]**

```sh
pip install flask
```

```sh
pip install flask_cors
```

**[ Code ]**

```py
import json

from flask import Flask, Response
from flask_cors import CORS

app = Flask(import_name=__name__)
CORS(app=app)

@app.route('/', methods=['GET'])
def test() -> Response:
    response = {
        'status':'success',
        'message':'Hello World!'
    }
    return Response(
        response=json.dumps(obj=response, sort_keys=False),
        mimetype='application/json'
    )

if __name__ == '__main__':
    app.run(debug=True)
```

### FastAPI

**[ Requirements ]**

```sh
pip install fastapi
```

```sh
pip install uvicorn
```

**[ Code ]**

```py
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
    response = {
        'status':'success',
        'message':'Hello World!'
    }
    return JSONResponse(content=response)

if __name__ == "__main__":
    uvicorn.run(
        app,
        host="127.0.0.1",
        port=3000,
        log_level="debug"
    )
```

## Javascript

### Express

**[ Requirements ]**

```sh
npm install express
```

```sh
npm install cors
```

**[ Code ]**

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    const response = {
        status:'success',
        message:'Hello World!'
    };
    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
```

### Fastify

**[ Requirements ]**

```sh
npm install fastify
```

```sh
npm install @fastify/cors
```

**[ Code ]**

```js
const fastify = require('fastify')();
const cors = require('@fastify/cors');

fastify.register(cors, {
    origin: '*',
});

fastify.get('/', async (request, reply) => {
    const response = {
        status:'success',
        message:'Hello World!'
    };
    return response;
});

const PORT = 3000;
fastify.listen(
    {port:PORT, host:'127.0.0.1'},
    (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running at ${address}`);
});
```

### Restify

**[ Requirements ]**

```sh
npm install restify
```

**[ Code ]**

```js
const restify = require('restify');

const server = restify.createServer({
    name: 'API Server',
    version: '1.0.0'
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.send(204);
        return next();
    }
    return next();
});

server.get('/', (req, res, next) => {
    const response = {
        status:'success',
        message:'Hello World!'
    };
    res.send(response);
    return next();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
```