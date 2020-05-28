

const redis = require("redis");
const subscriber = redis.createClient({password: 'foobared'});

subscriber.on("message", function(channel, message) {
  console.log("Subscriber received message in channel '" + channel + "': " + message);
});

subscriber.subscribe("a channel");

