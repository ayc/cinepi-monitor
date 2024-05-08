const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379
});

// is_recording
// cg_rb
// fps
// width
// iso
// ucm
// shutter_s
// shutter_a
// web
// height
// thumbnail
// log_level
// mic_gain
// compress
// awb
// thumbnail_size

function listRedisKeys() {
    client.keys('*', function(err, keys) {
        if (err) {
            return console.log(err);
        }
        for(var i = 0, len = keys.length; i < len; i++) {
            console.log(keys[i]);
        }
    });
}

client.on('connect', function() {
    console.log('Connected to Redis');
    listRedisKeys();
});

client.on('error', function(error) {
    console.error(error);
});

console.log('Redis client created?');
