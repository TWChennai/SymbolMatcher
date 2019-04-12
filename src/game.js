import * as symbols from './symbols.js'
import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'
import * as symbolChecker from './symbolChecker.js'

var successCount = 0;
var totalCount = 0;

var initGame = function () {
    totalCount = symbols.getTotalSymbols()
    successCount = 0;
    symbolHelper.initSymbol()
    companyHelper.initCompany()
}

var progress = function () {
    var isSame = symbolChecker.checkSymbolMatch()
    if (isSame) {
        symbolHelper.removeSelected()
        companyHelper.removeSelected()
        incrementSuccessCounter()
    }
    symbolHelper.resetAllSelection()
    companyHelper.resetAllSelection()
}

var incrementSuccessCounter = function () {
    successCount = successCount + 1
}

var isGameOver = function () {
    return successCount == totalCount && totalCount > 0
}


export {
    initGame,
    incrementSuccessCounter,
    isGameOver,
    progress
}