import * as timerUtils from './timer.js'
import * as round from './round.js'
import * as state from './gameState.js'
import * as view from './gameView.js'

var initGame = function () {
    timerUtils.initTimer(() => progress())
    state.init()
    view.init(state)
}

var progress = function () {
    if (round.checkMatch()) {
        state.handleSuccessRound()
        view.handleSuccessRound()
    }
    view.handleEachRound()
    var isgameOver = state.isGameOver()
    if (isgameOver) {
        alert("successfully completed game!!")
        initGame()
        return;
    }
    timerUtils.start()
}

export {
    initGame,
    progress,
}