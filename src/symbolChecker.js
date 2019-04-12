import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'


var checkSymbolMatch = function () {
    var companyFromSymbol = symbolHelper.getSelectedSymbolCompany()
    var selectedCompany = companyHelper.getSelectedCompany()
    if (companyFromSymbol == selectedCompany && companyFromSymbol != undefined) {
        // alert("success")
        return true
    } else {
        // alert("sorry")
        return false
    }
}


export {
    checkSymbolMatch
}

