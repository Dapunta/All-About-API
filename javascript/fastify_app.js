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