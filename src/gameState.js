import * as dataProvider from './dataProvider.js'

var currentSymbolIndex = 0;
var successCounter = 0;
var symbols = [];


var init = function() {
    currentSymbolIndex = 0;
    successCounter = 0;
    symbols = dataProvider.getSymbols()
}

var handleSuccessRound = function() {
    successCounter += 1
    currentSymbolIndex += 1
}

var isGameOver = function() {
    return successCounter == symbols.length;
}

var currentSymbol = function() {
    if (currentSymbolIndex >= symbols.length) {
        return null;
    }

    return symbols[currentSymbolIndex];
}

export { init, handleSuccessRound, isGameOver, currentSymbol }