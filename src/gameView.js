import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'

var state = null

var init = function(stateParam) {
    state = stateParam;
    displaySymbol()
   companyHelper.initCompany()
}

var handleSuccessRound = function() {
    displaySymbol()
}

var handleEachRound = function() {
    companyHelper.reset()
}


var displaySymbol = function () {
    if (state.currentSymbol() == null) {
        return;
    }
    symbolHelper.setCurrentSymbol(state.currentSymbol())
}

export { init, handleSuccessRound, handleEachRound }