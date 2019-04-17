import * as config from './configuration.json'

var callbackFunc = null;
var timer = null

var initTimer = function (callback) {
    callbackFunc = callback;
    reset()
}

var deleteAndCreateTimer = function () {
    $(".timer").remove()
    var timerEle = $('<h1>').addClass('timer').attr("data-seconds-left", config.roundDuration);
    timerEle.insertAfter(".title")
}

var reset = function () {
    deleteAndCreateTimer()
    timer = $(".timer").startTimer({
        onComplete: function (ele) {
            callbackFunc()
        },
        loop: true,
        loopInterval: 1
    })
}

export {
    initTimer,
    reset
}