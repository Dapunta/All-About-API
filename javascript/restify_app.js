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