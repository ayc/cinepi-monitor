const Redis =  require('ioredis');

const redis = new Redis({
  host: 'localhost',
  port: 6379
});
const subscriber = new Redis({
  host: 'localhost',
  port: 6379
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('error', (error) => {
  console.error('Error connecting to Redis:', error);
});

// controller.keys('*').then((keys) => {
//   console.log('Keys:', keys);
// }).catch((error) => {
//   console.error('Error fetching keys:', error);
// });


// Constants
const CP_DEF_WIDTH = 1920;
const CP_DEF_HEIGHT = 1080;
const CP_DEF_FRAMERATE = 30;
const CP_DEF_ISO = 400;
const CP_DEF_SHUTTER = 50;
const CP_DEF_AWB = 1;
const CP_DEF_COMPRESS = 0;
const CP_DEF_THUMBNAIL = 1;
const CP_DEF_THUMBNAIL_SIZE = 3;


/*
  RedisController will be a class that will handle all the Redis operations.
  controller will listen for key set events
 */
class CinepiController {
  constructor(redis) {
    this.redis = redis;
    this.subscriber = subscriber;

    this.CHANNEL_CONTROLS = 'cp_controls';
    this.CHANNEL_STATS = 'cp_stats';
    this.CHANNEL_HISTOGRAM = 'cp_histogram';

    this.CONTROL_TRIGGER_RECORD = "rec";
    this.CONTROL_TRIGGER_STILL = "stll";
    this.CONTROL_TRIGGER_TIMELASPSE = "tlps";

    this.CONTROL_KEY_RECORD = "is_recording";
    this.CONTROL_KEY_ISO = "iso";
    this.CONTROL_KEY_WB = "awb";
    this.CONTROL_KEY_COLORGAINS = "cg_rb";
    this.CONTROL_KEY_SHUTTER_ANGLE = "shutter_a";
    this.CONTROL_KEY_SHUTTER_SPEED = "shutter_s";

    this.CONTROL_KEY_FRAMERATE = "fps";
    this.CONTROL_KEY_WIDTH = "width";
    this.CONTROL_KEY_HEIGHT = "height";
    this.CONTROL_KEY_MODE = "mode";
    this.CONTROL_KEY_COMPRESSION = "compress";

    this.CONTROL_KEY_CAMERAINIT = "cam_init";

    this.subscriber.on('message', this._handleMessage.bind(this));
    this.subscriber.config('SET', 'notify-keyspace-events', 'KEA');

    // subscribe to channels set
    this._subscribeToChannel(this.CHANNEL_CONTROLS);
    this._subscribeToChannel(this.CHANNEL_STATS);
    this._subscribeToChannel(this.CHANNEL_HISTOGRAM);

    this._controlUpdateCallback = null;
    this._statsUpdateCallback = null;
    this._histogramUpdateCallback = null;

  }

  _subscribeToChannel(channel) {
    this.subscriber.subscribe(channel, (err, count) => {
      if (err) {
        console.error('Failed to subscribe to channel:', channel, err);
      } else {
        console.log(`Subscribed to ${count} channel. Listening for updates on the ${channel} key.`);
      }
    });
  }

  _handleMessage(channel, message) {
    console.log('Message received:', message);
    switch (channel) {
      case this.CHANNEL_CONTROLS:
        if (this._controlUpdateCallback) {
          this._controlUpdateCallback(message);
        }
        break;
      case this.CHANNEL_STATS:
        if (this._statsUpdateCallback) {
          this._statsUpdateCallback(message);
        }
        break;
      case this.CHANNEL_HISTOGRAM:
        if (this._histogramUpdateCallback) {
          this._histogramUpdateCallback(message);
        }
        break;
      default:
        console.log('Unknown channel:', channel);
    }
  }

  /**
   * callback hook that listens for updates
   * usage: onControlsUpdate((message) => { console.log('Controls updated:', message); });
   */
  onControlsUpdate(callback) {
    this._controlUpdateCallback = callback;
  }

  onStatsUpdate(callback) {
    this._statsUpdateCallback = callback;
  }
  onHistogramUpdate(callback) {
    this._histogramUpdateCallback = callback;
  }

  /**
   * Look up controller key 'is_recording'
   * returns bool true if recording, false if not
   */
  async getRecording() {
    const ret = await this.redis.get(this.CONTROL_KEY_RECORD);
    return ret === '1';
  }

  /**
   * Set 'is_recording' to True or False
   * @param on
   */
  async setRecording(on) {
    const value = on ? '1' : '0';
    await this.redis.set(this.CONTROL_KEY_RECORD, value);
  }

  async getIso() {
    return await this.redis.get(this.CONTROL_KEY_ISO);
  }

  /**
   * 100-6400?
   * @param iso
   */
  async setIso(iso) {
    await this.redis.set(this.CONTROL_KEY_ISO, iso);
  }

  async getHeight() {
    return await this.redis.get(this.CONTROL_KEY_HEIGHT);
  }
  async setHeight(height) {
    await this.redis.set(this.CONTROL_KEY_HEIGHT, height);
  }

  async getWidth() {
    return await this.redis.get(this.CONTROL_KEY_WIDTH);
  }
  async setWidth(width) {
    await this.redis.set(this.CONTROL_KEY_WIDTH, width);
  }

  async getAwb() {
    const ret = await this.redis.get(this.CONTROL_KEY_WB);
    return ret === '1';
  }

  /**
   * Set 'awb' to True or False
   * @param on
   */
  async setAwb(on) {
    const value = on ? '1' : '0';
    await this.redis.set(this.CONTROL_KEY_WB, value);
  }

  async getFramerate() {
    return await this.redis.get(this.CONTROL_KEY_FRAMERATE);
  }
  async setFramerate(fps) {
    await this.redis.set(this.CONTROL_KEY_FRAMERATE, fps);
  }

  /**
   * color gains is a string of two numbers separated by a comma
   * @returns {*}
   */
  async getColorGains() {
    return await this.redis.get(this.CONTROL_KEY_COLORGAINS);
  }

  /**
   * gains is a string of two numbers separated by a comma
   * ex: controller.set('cg_rb', '1.0,1.0')
   * values should be between 0.0 and 1.0
   * @param gains
   */
  async setColorGains(gains) {
    await this.redis.set(this.CONTROL_KEY_COLORGAINS, gains);
  }

  async getShutterAngle() {
    return await this.redis.get(this.CONTROL_KEY_SHUTTER_ANGLE);
  }
  async setShutterAngle(angle) {
    await this.redis.set(this.CONTROL_KEY_SHUTTER_ANGLE, angle);
  }

  async getShutterSpeed() {
    return await this.redis.get(this.CONTROL_KEY_SHUTTER_SPEED);
  }
  async setShutterSpeed(speed) {
    await this.redis.set(this.CONTROL_KEY_SHUTTER_SPEED, speed);
  }

}



// is_recording -
// iso -
// height -
// width -
// awb -
// fps -
// cg_rb
// ucm
// shutter_s
// shutter_a
// web
// thumbnail
// log_level
// mic_gain
// compress
// thumbnail_size

/*
'is_recording'
'cg_rb'
'fps'
'width'
'iso'
'ucm'
'shutter_s'
'shutter_a'
'web'
'height'
'thumbnail'
'log_level'
'mic_gain'
'compress'
'awb'
'thumbnail_size'
*/

module.exports = new CinepiController(redis);
