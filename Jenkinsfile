{
  "os": "linux",
  "dist": "trusty",
  "group": "stable",
  "addons": {
    "chrome": "stable"
  },
  ".result": "configured",
  "node_js": [
    "6.0"
  ],
  "language": "node_js",
  "before_install": [
    "export DISPLAY=:99.0",
    "sh -e /etc/init.d/xvfb start",
    "/sbin/start-stop-daemon --start --quiet --pidfile /tmp/custom_xvfb_99.pid --make-pidfile --background --exec /usr/bin/Xvfb -- :99 -ac -screen 0 1280x1024x16"
  ]
}
