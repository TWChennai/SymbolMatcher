import * as symbols from './symbols.js'
import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'

var totalCount = 0;

var initGame = function () {
    totalCount = symbols.getTotalSymbols()
    symbolHelper.initSymbol()
    companyHelper.initCompany()
}

var isGameOver = function () {
    var successCount = symbolHelper.getTotalSymbolMatch()
    var isGameOver = successCount == totalCount && totalCount > 0
    if (isGameOver) {
        return true;
    } else {
        alert("Some matches are wrong!!")
        symbolHelper.resetAllSelection()
        companyHelper.resetAllHighlights()
        return false;
    }
}


export {
    initGame,
    isGameOver
}