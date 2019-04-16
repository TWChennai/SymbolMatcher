import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'
import * as timerUtils from './timer.js'
import * as round from './round.js'
import * as state from './gameState.js'

var initGame = function () {
    timerUtils.initTimer(() => progress())
    state.init()
    displaySymbol()
    companyHelper.initCompany()
}

var progress = function () {
    if (round.checkMatch()) {
        alert("true")
        state.handleSuccessRound()
        displaySymbol()
    } else {
        alert("false")
    }
    companyHelper.reset()
    var isgameOver = state.isGameOver()
    if (isgameOver) {
        alert("successfully completed game!!")
        restart()
        return;
    }
    timerUtils.start()
}

var restart = function () {
    game.initGame()
}

var displaySymbol = function () {
    if (state.currentSymbol() == null) {
        return;
    }
    symbolHelper.setCurrentSymbol(state.currentSymbol())
}

export {
    initGame,
    progress,
}