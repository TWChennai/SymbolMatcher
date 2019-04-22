import * as dataProvider from './dataProvider.js'
import * as config from './configuration.json'

var currentSymbolIndex = 0;
var successCounter = 0;
var symbols = [];
var noOfTrials = 0;
var maxTrials = 0;

var won = "Won";
var inProgress = "In Progress";
var lost = "Lost";

var init = function () {
    currentSymbolIndex = 0;
    successCounter = 0;
    symbols = dataProvider.getSymbols()
    noOfTrials = 0
    maxTrials = config.maxTrials
}

var clear = function() {
    currentSymbolIndex = 0;
    successCounter = 0;
    symbols = []
    noOfTrials = 0
    maxTrials = 0
}

var handleSuccessRound = function () {
    successCounter += 1
    currentSymbolIndex += 1
}

var handleEachRound = function () {
    noOfTrials = noOfTrials + 1
}

var isGameOver = function () {
    return getStatus() != inProgress
}

var shortStats = function () {
    return getStatus()
}

var stats = function () {
    return {
        'status': getStatus(),
        'totalSymbols': symbols.length,
        'successCount': successCounter,
        'trialsLeft': maxTrials - noOfTrials
    }
}

var getStatus = function () {
    if (successCounter == config.successCriteria) {
        return won
    }
    if (noOfTrials < maxTrials) {
        return inProgress
    }
    return lost
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
    stats,
    shortStats,
    clear
}