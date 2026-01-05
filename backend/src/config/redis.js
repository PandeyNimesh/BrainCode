const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
  socket: {
        host: 'redis-10480.c10.us-east-1-4.ec2.cloud.redislabs.com',
        port: 10480
    }
});


module.exports = redisClient;