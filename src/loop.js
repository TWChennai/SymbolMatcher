import * as frameUtils from './frameUtils.js'
import * as utils from './utils.js'
import * as companyHelper from './companyHelper.js'
import * as game from './game.js'

var controllerOptions = {
  enableGestures: true
};

var check = function () {
  game.progress()
}

$(function () {
  game.initGame()
  $('#check').click(check)

  Leap.loop(controllerOptions, function (frame) {
      swipeAndChooseCompany(frame)
    })
    .on("gesture", function (gesture) {
      if (gesture.type != "swipe" && gesture.state == "start") {
        check()
      }
    })
});

var swipeAndChooseCompany = function (frame) {
  var swipeGesture = frameUtils.getGesture(frame, "swipe")
  if (swipeGesture != undefined && swipeGesture != 0) {
    if (swipeGesture.speed != undefined)
      var speed = swipeGesture.speed
      if (speed < 100) {
        companyHelper.next(1)
      }
      else 
        companyHelper.next(Math.ceil(speed / 100))
      }
}

var circleCompany = function (frame) {
  const windowCoordinates = frameUtils.getCircleGestureCoordinates(frame, frameUtils.handType.right);
  setRightWindowCoordinates(windowCoordinates);

  if (!Number.isNaN(windowCoordinates[0] && !Number.isNaN(windowCoordinates[1]))) {
    var eleInPosition = document.elementFromPoint(windowCoordinates[0], windowCoordinates[1]);
    if (eleInPosition != null) {
      if (companyHelper.isCompany(eleInPosition)) {
        alert(eleInPosition.textContent)
      }
    }
  }
}

function setRightWindowCoordinates(windowPosition) {
  var windowCoordinates = document.getElementById('rightwindowCoordinates');
  windowCoordinates.innerText = utils.vectorToStr(windowPosition, 0);
}