import * as dataProvider from './dataProvider.js'
import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'
import * as timerUtils from './timer.js'

var currentSymbolIndex = 0;
var successCounter = 0;
var symbols = [];

var initGame = function () {
    timerUtils.initTimer(() => progress())
    currentSymbolIndex = 0;
    successCounter = 0;
    symbols = dataProvider.getSymbols()
    displaySymbol()
    companyHelper.initCompany()
}

var progress = function () {
    var selectedSymbolCompany = symbolHelper.getSelectedSymbolCompany();
    var userSelectedCompany = companyHelper.getSelectedCompany();
    if (selectedSymbolCompany != "" && selectedSymbolCompany == userSelectedCompany) {
        alert("true")
        successCounter += 1
        currentSymbolIndex += 1
        displaySymbol()
    } else {
        alert("false")
    }
    companyHelper.reset()
    var isgameOver = isGameOver()
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
    if (currentSymbolIndex >= symbols.length) {
        return;
    }
    symbolHelper.setCurrentSymbol(symbols[currentSymbolIndex])
}

var isGameOver = function () {
    return successCounter == symbols.length;
}


export {
    initGame,
    progress,
    isGameOver
}