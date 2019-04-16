import * as dataProvider from './dataProvider.js'

var currentSymbolIndex = 0;
var successCounter = 0;
var symbols = [];
var noOfTrials = 0;
var maxTrials = 0;


var init = function () {
    currentSymbolIndex = 0;
    successCounter = 0;
    symbols = dataProvider.getSymbols()
    noOfTrials = 0
    maxTrials = symbols.length + 2
}

var handleSuccessRound = function () {
    successCounter += 1
    currentSymbolIndex += 1
}

var handleEachRound = function () {
    noOfTrials = noOfTrials + 1
}

var isGameOver = function () {
    if (noOfTrials == maxTrials) {
        return true;
    }
    return successCounter == symbols.length;
}

var stats = function () {
    var success = successCounter == symbols.length
    return {
        'status': success ? "Won" : "Lost",
        'summary': "Total Symbols: "+ symbols.length + "Correctly found symbols: " + successCounter,
    }
}

var currentSymbol = function () {
    if (currentSymbolIndex >= symbols.length) {
        return null;
    }

    return symbols[currentSymbolIndex];
}

export {
    init,
    handleSuccessRound,
    handleEachRound,
    isGameOver,
    currentSymbol,
    stats
}