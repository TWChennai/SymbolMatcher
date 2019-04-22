import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'
import * as scoreboardHelper from './scoreboardHelper.js'

var state = null

var init = function(stateParam) {
    state = stateParam;
    displaySymbol()
   companyHelper.initCompany()
   scoreboardHelper.init()
}

var clear = function() {
    symbolHelper.clear()
    companyHelper.clear()
    scoreboardHelper.clear()
}

var handleSuccessRound = function() {
    displaySymbol()
}

var handleEachRound = function() {
    companyHelper.reset()
    scoreboardHelper.update()
}


var displaySymbol = function () {
    if (state.currentSymbol() == null) {
        return;
    }
    symbolHelper.setCurrentSymbol(state.currentSymbol())
}

export { init, handleSuccessRound, handleEachRound, clear }