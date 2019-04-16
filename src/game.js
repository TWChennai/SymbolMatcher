import * as timerUtils from './timer.js'
import * as round from './round.js'
import * as state from './gameState.js'
import * as view from './gameView.js'

var initGame = function () {
    timerUtils.initTimer(() => {
        progress()
    })
    state.init()
    view.init(state)
}

var progress = function () {
    if (round.checkMatch()) {
        alert('true')
        state.handleSuccessRound()
        view.handleSuccessRound()
    }
    else{
        alert('false')
    }
    view.handleEachRound()
    var isgameOver = state.isGameOver()
    if (isgameOver) {
        alert("successfully completed game!!")
        initGame()
        return;
    }
    timerUtils.reset()
}

export {
    initGame,
    progress,
}