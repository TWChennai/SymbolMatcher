import * as frameUtils from './frameUtils.js'
import * as utils from './utils.js'

var controllerOptions = {
  enableGestures: true
};

$(function () {
  Leap.loop(controllerOptions, function (frame) {
    var frameString = "Frame ID: " + frame.id + "<br />" +
      "Timestamp: " + frame.timestamp + " &micro;s<br />";
    $('#frameData').html(frameString)

    setBasicValues(frame);
    setWindowCoordinates(frame);
  })
});

function setWindowCoordinates(frame) {
  var windowCoordinates = document.getElementById('windowCoordinates');
  if (frame.pointables.length > 0) {
    var tipPosition = frameUtils.getRightIndexFingerPosition(frame);
    var windowPosition = frameUtils.getWindowCoordinates(frame, tipPosition)
    windowCoordinates.innerText = utils.vectorToStr(windowPosition, 0);
  }
}

function setBasicValues(frame) {
  var fpsDisplay = document.getElementById('leapFPS');
  var handCountDisplay = document.getElementById('handCount');
  var pointableCountDisplay = document.getElementById('pointableCount');
  var fingerCountDisplay = document.getElementById('fingerCount');
  var toolCountDisplay = document.getElementById('toolCount');
  var gestureCountDisplay = document.getElementById('gestureCount');
  fpsDisplay.innerText = frame.currentFrameRate;
  handCountDisplay.innerText = frame.hands.length;
  pointableCountDisplay.innerText = frame.pointables.length;
  fingerCountDisplay.innerText = frame.fingers.length;
  toolCountDisplay.innerText = frame.tools.length;
  gestureCountDisplay.innerText = frame.gestures.length;
}