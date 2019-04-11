import * as frameUtils from './frameUtils.js'
import * as utils from './utils.js'
import * as symbolUtils from './symbols_init.js'

var controllerOptions = {
  enableGestures: true
};

$(function () {
  symbolUtils.initSymbol()
  Leap.loop(controllerOptions, function (frame) {

    var frameString = "Frame ID: " + frame.id + "<br />" +
      "Timestamp: " + frame.timestamp + " &micro;s<br />";
    $('#frameData').html(frameString)

    setBasicValues(frame);
    if (frame.pointables.length > 0) {
      const windowCoordinates = frameUtils.getRightIndexFingerCoordinates(frame);
      setWindowCoordinates(windowCoordinates);
      if (!Number.isNaN(windowCoordinates[0] && !Number.isNaN(windowCoordinates[1]))){
        var eleInPosition = document.elementFromPoint(windowCoordinates[0], windowCoordinates[1])
        if (eleInPosition != null )
        $('#currentEle').html(eleInPosition.className)
      }
    }
  })
});



function setWindowCoordinates(windowPosition) {
  var windowCoordinates = document.getElementById('windowCoordinates');
  windowCoordinates.innerText = utils.vectorToStr(windowPosition, 0);
}

function setBasicValues(frame) {
  var fpsDisplay = document.getElementById('leapFPS');
  var handCountDisplay = document.getElementById('handCount');
  var fingerCountDisplay = document.getElementById('fingerCount');
  fpsDisplay.innerText = frame.currentFrameRate;
  handCountDisplay.innerText = frame.hands.length;
  fingerCountDisplay.innerText = frame.fingers.length;
}