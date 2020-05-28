
var Client = require('strong-pubsub');
var Adapter = require('strong-pubsub-redis');

const redis = require("redis");
const client = redis.createClient({password: 'foobared'});

var client2 = new Client({host: 'localhost', port: 6378 }, Adapter);
client.publish('a channel', 'my message');

console.log("sent 1 msg!");
