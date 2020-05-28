
const redis = require("redis");
const publisher = redis.createClient({password: 'foobared'});

publisher.publish("a channel", "a message");
publisher.publish("a channel", "another message");

console.log("sent 2 messages!")

publisher.quit(()=>{
  console.log("bye!")
})
