var getWindowCoordinates = function(frame, position) {
    var normalizedPosition = frame.interactionBox.normalizePoint(position, true);
    var windowPosition = [normalizedPosition[0] * window.innerWidth,
      window.innerHeight - (normalizedPosition[1] * window.innerHeight),
      0
    ];
    return windowPosition
}

export { getWindowCoordinates }