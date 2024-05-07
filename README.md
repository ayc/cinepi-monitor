# cinepi-monitor
Use your mobile phone to interface with Cinepi with a react app

## Steps to install on Cinepi SDK
1. make sure node and npm are installed
2. clone repo
3. navigate to dir cinepi-monitor
4. run `npm install`
5. run `sudo npm start` (rpi requires sudo for port 80)
6. open browser and navigate to `http://cinepi:80`

## _notes_ 

mpjeg streams don't appear to close when the component containing the image tag is unmounted, If the img tag is used in multiple locations, the browser opens multiple streams, taking up bandwidth.

because of this, I've opted to render the stream outside of the react app and interface with it directly

```

```
