import * as frameUtils from './frameUtils.js'
import * as utils from './utils.js'
import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'
import * as symbolChecker from './symbolChecker.js'

var controllerOptions = {
  enableGestures: true
};


$(function () {
  symbolHelper.initSymbol()
  companyHelper.initCompany()
  $('#check').click(function(){
    symbolChecker.checkSymbolMatch()
    symbolChecker.removeDone()
  })

  Leap.loop(controllerOptions, function (frame) {
    setBasicValues(frame);
    highlightSelectedBox(frame);
  })
});



var highlightSelectedBox = function (frame) {
  if (frame.pointables.length > 0) {
    const windowCoordinates = frameUtils.getRightIndexFingerCoordinates(frame);
    setWindowCoordinates(windowCoordinates);
    if (!Number.isNaN(windowCoordinates[0] && !Number.isNaN(windowCoordinates[1]))) {
      var eleInPosition = document.elementFromPoint(windowCoordinates[0], windowCoordinates[1]);
      if (eleInPosition != null) {
        if (symbolHelper.isSymbol(eleInPosition)) {
          symbolHelper.resetAllSelection()
          symbolHelper.markSelected(eleInPosition)
        }
        if (companyHelper.isCompany(eleInPosition)) {
          companyHelper.resetAllSelection()
          companyHelper.markSelected(eleInPosition)
        }
      }
    }
  }
}

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