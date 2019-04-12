var getWindowCoordinates = function (frame, position) {
  var normalizedPosition = frame.interactionBox.normalizePoint(position, true);
  var windowPosition = [normalizedPosition[0] * window.innerWidth,
    window.innerHeight - (normalizedPosition[1] * window.innerHeight),
    0
  ];
  return windowPosition
}

var getRightHand = function (frame) {
  if (frame.pointables.length <= 0) {
    return null
  }
  for (var h = 0; h < frame.hands.length; h++) {
    var hand = frame.hands[h];
    if (hand.type == "right") {
      return hand
    }
  }
  return null
}

var getRightIndexFingerPosition = function (frame) {
  if (frame.pointables.length <= 0) {
    return 0
  }
  var hand = getRightHand(frame)
  if (hand != null) {
    return hand.indexFinger.tipPosition
  }
  return 0
}

var getRightIndexFingerCoordinates = function (frame) {
  var tipPosition = getRightIndexFingerPosition(frame);
  var windowPosition = getWindowCoordinates(frame, tipPosition)
  return windowPosition
}

var getRightHandPinchStrength = function(frame) {
  var hand = getRightHand(frame)
  if (hand != null) {
    return hand.pinchStrength
  }
  return 0
}

export {
  getRightIndexFingerCoordinates, getRightHandPinchStrength
}