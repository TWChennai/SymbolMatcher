import * as frameUtils from './frameUtils.js'
import * as utils from './utils.js'
import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'
import * as game from './game.js'

var controllerOptions = {
  enableGestures: true
};


$(function () {
  game.initGame()
  $('#check').click(function () {
    game.progress()
    var isgameOver = game.isGameOver()
    if (isgameOver) {
      alert("successfully completed game!!")
      game.initGame()
    }
  })

  Leap.loop(controllerOptions, function (frame) {
    setBasicValues(frame);
    highlightSymbol(frame);
    highlightCompany(frame)
  })
});



var highlightSymbol = function (frame) {
  const windowCoordinates = frameUtils.getIndexFingerCoordinates(frame, frameUtils.handType.left);
  setLeftWindowCoordinates(windowCoordinates);

  if (!Number.isNaN(windowCoordinates[0] && !Number.isNaN(windowCoordinates[1]))) {
    var eleInPosition = document.elementFromPoint(windowCoordinates[0], windowCoordinates[1]);
    if (eleInPosition != null) {
      if (symbolHelper.isSymbol(eleInPosition)) {
        symbolHelper.resetAllHiglights()
        symbolHelper.markHighlighted(eleInPosition)
      }
    }
    if (frameUtils.getHandPinchStrength(frame, frameUtils.handType.left) == 1){
      symbolHelper.markSelected()
    }
  }
}

var highlightCompany = function (frame) {
  const windowCoordinates = frameUtils.getIndexFingerCoordinates(frame, frameUtils.handType.right);
  setRightWindowCoordinates(windowCoordinates);

  if (!Number.isNaN(windowCoordinates[0] && !Number.isNaN(windowCoordinates[1]))) {
    var eleInPosition = document.elementFromPoint(windowCoordinates[0], windowCoordinates[1]);
    if (eleInPosition != null) {
      if (companyHelper.isCompany(eleInPosition)) {
        companyHelper.resetAllHighlights()
        companyHelper.markHighlighted(eleInPosition)
      }
    }
    if (frameUtils.getHandPinchStrength(frame, frameUtils.handType.right) == 1){
      companyHelper.markSelected()
    }
  }
}

function setLeftWindowCoordinates(windowPosition) {
  var windowCoordinates = document.getElementById('leftwindowCoordinates');
  windowCoordinates.innerText = utils.vectorToStr(windowPosition, 0);
}

function setRightWindowCoordinates(windowPosition) {
  var windowCoordinates = document.getElementById('rightwindowCoordinates');
  windowCoordinates.innerText = utils.vectorToStr(windowPosition, 0);
}

function setBasicValues(frame) {
  var fpsDisplay = document.getElementById('leapFPS');
  var handCountDisplay = document.getElementById('handCount');
  var fingerCountDisplay = document.getElementById('fingerCount');
  var rightPinchStrengthDisplay = document.getElementById('rightPinchStrength')
  var leftPinchStrengthDisplay = document.getElementById('leftPinchStrength')
  fpsDisplay.innerText = frame.currentFrameRate;
  handCountDisplay.innerText = frame.hands.length;
  fingerCountDisplay.innerText = frame.fingers.length;
  rightPinchStrengthDisplay.innerText = frameUtils.getHandPinchStrength(frame, frameUtils.handType.right)
  leftPinchStrengthDisplay.innerText = frameUtils.getHandPinchStrength(frame, frameUtils.handType.left)
}