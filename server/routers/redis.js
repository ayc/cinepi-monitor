const redis = require('redis');

const client = redis.createClient({
    host: '192.168.1.249',
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


client.on('error', function(error) {
    console.error(error);
});

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

listRedisKeys();
