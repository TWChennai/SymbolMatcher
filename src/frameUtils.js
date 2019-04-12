var handType = {
  right: "right",
  left: "left"
}

var getWindowCoordinates = function (frame, position) {
  var normalizedPosition = frame.interactionBox.normalizePoint(position, true);
  var windowPosition = [normalizedPosition[0] * window.innerWidth,
    window.innerHeight - (normalizedPosition[1] * window.innerHeight),
    0
  ];
  return windowPosition
}

var getHand = function (frame, type) {
  if (frame.pointables != undefined && frame.pointables.length <= 0) {
    return null
  }
  for (var h = 0; h < frame.hands.length; h++) {
    var hand = frame.hands[h];
    if (hand.type == type) {
      return hand
    }
  }
  return null
}

var getIndexFingerPosition = function (frame, type) {
  if (frame.pointables != undefined && frame.pointables.length <= 0) {
    return 0
  }
  var hand = getHand(frame, type)
  if (hand != null) {
    return hand.indexFinger.tipPosition
  }
  return 0
}

var getIndexFingerCoordinates = function (frame, type) {
  var tipPosition = getIndexFingerPosition(frame, type);
  var windowPosition = getWindowCoordinates(frame, tipPosition)
  return windowPosition
}

var getHandPinchStrength = function(frame, type) {
  var hand = getHand(frame, type)
  if (hand != null) {
    return hand.pinchStrength
  }
  return 0
}

export {
  getIndexFingerCoordinates, getHandPinchStrength, handType
}