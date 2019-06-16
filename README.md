# Restaurant Review Application

### Overview:

This **Restaurant Reviews** app is a mobile-ready web application converted from a static webpage. It performs responsiveness on different sized screens, accessibility for screen reader use, and independent connectivity for seamless offline experience for users.


### Get Start

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and start paly around the Restaurant Revieew App. look around for a bit to see what the current experience looks like.


### Design

* Service worker:
This application registered a service worker to serve assets from local cache. Service worker lets the app load faster on subsequent visits in production, and gives the app offline capabilities.

* Leaflet.js and Mapbox:
This application uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You can replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

* ES6:
Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.
