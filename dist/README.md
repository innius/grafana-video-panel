# Video Panel
A panel to display video from a URL, YouTube ID, or an iFrame. 

# Configuration

### File 
-  `URL` : the url to a valid video file. Eg: `https://example.com/video.mp4`
-  `Autoplay` (optional): autoplay video
-  `Loop` (optional) : loop video

![screenshot](https://raw.githubusercontent.com/innius/grafana-video-panel/master/src/img/screenshots/video.png)

### YouTube 
-  `Video ID` : the value after watch?v= in the URL. Eg: `eQpyJQ2womo`
-  `Autoplay` (optional): autoplay video
-  `Loop` (optional) : loop video

![screenshot](https://raw.githubusercontent.com/innius/grafana-video-panel/master/src/img/screenshots/youtube.png)

### iFrame 
The iFrame source is useful when you're dealing with camera feeds.
-  `URL` : the url of the page. Eg: `https://example.com/your-camera-feed`

![screenshot](https://raw.githubusercontent.com/innius/grafana-video-panel/master/src/img/screenshots/iframe.png)

# Installation
1. Go to Grafana Plugins page and search Video Panel by Innius. 

2. The panel is available in the Dashboards section in your Grafana main menu, and can be added like any other core panel in Grafana.
