import * as timerUtils from './timer.js'
import * as round from './round.js'
import * as state from './gameState.js'
import * as view from './gameView.js'
import * as dataProvider from './dataProvider.js'

var initGame = function () {
    timerUtils.initTimer(() => {
        nextRound()
    })
    dataProvider.init()
    state.init()
    view.init(state)
}

var endGame = function() {
    timerUtils.clear()
    state.clear()
    view.clear()
}

var nextRound = function() {
    state.handleEachRound()
    view.handleEachRound()
    var isgameOver = state.isGameOver()
    if (isgameOver) {
        alert("Status: " + state.shortStats())
        endGame()
        return;
    }
    timerUtils.reset()
}

var progress = function () {
    if (round.checkMatch()) {
        state.handleSuccessRound()
        view.handleSuccessRound()
    }
    nextRound()
}

export {
    initGame,
    progress,
}