import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'


var checkSymbolMatch = function() {
    var companyFromSymbol = symbolHelper.getSelectedSymbolCompany()
    var selectedCompany = companyHelper.getSelectedCompany()
    if (companyFromSymbol == selectedCompany)
        alert("success")
    else
       alert("sorry")
    
}


export { checkSymbolMatch }