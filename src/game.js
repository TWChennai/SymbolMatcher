import * as symbols from './symbols.js'
import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'

var currentSymbolIndex = 0;
var successCounter = 0;
var symbolItems = [];

var initGame = function () {
    currentSymbolIndex = 0;
    successCounter = 0;
    symbolItems = symbols.getAll()
    displaySymbol()
    companyHelper.initCompany()
}

var progress = function() {
    var selectedSymbolCompany = symbolHelper.getSelectedSymbolCompany();
    var userSelectedCompany = companyHelper.getSelectedCompany();
    if (selectedSymbolCompany != "" && selectedSymbolCompany == userSelectedCompany) {
        alert("true")
        successCounter += 1
        currentSymbolIndex += 1
        displaySymbol()
    }
    else {
        alert("false")
    }
}

var displaySymbol = function() {
    if (currentSymbolIndex >= symbolItems.length) {
        return;
    }
    symbolHelper.displaySymbol(symbolItems[currentSymbolIndex])
}

var isGameOver = function () {
    return successCounter == symbolItems.length;
}


export {
    initGame,
    progress,
    isGameOver
}