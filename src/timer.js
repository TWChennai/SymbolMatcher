var callbackFunc = null;

var initTimer = function (callback) {
    callbackFunc = callback;
    start()
}

var start = function() {
    $("#seconds_timer").countdowntimer({
        seconds: 25,
        size: "lg",
        timeUp: callbackFunc
    });
}

export {
    initTimer, start
}