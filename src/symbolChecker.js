import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'


var checkSymbolMatch = function () {
    var companyFromSymbol = symbolHelper.getSelectedSymbolCompany()
    var selectedCompany = companyHelper.getSelectedCompany()
    if (companyFromSymbol == selectedCompany) {
        alert("success")
        symbolHelper.markSelectedDone()
        companyHelper.markSelectedDone()

    } else
        alert("sorry")
    symbolHelper.resetAllSelection()
    companyHelper.resetAllSelection()
}

var removeDone = function() {
    symbolHelper.removeDone()
    companyHelper.removeDone()
}


export {
    checkSymbolMatch, removeDone
}

