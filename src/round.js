import * as symbolHelper from './symbolHelper.js'
import * as companyHelper from './companyHelper.js'

var checkMatch = function() {
    var selectedSymbolCompany = symbolHelper.getSelectedSymbolCompany();
    var userSelectedCompany = companyHelper.getSelectedCompany();
    if (selectedSymbolCompany != "" && selectedSymbolCompany == userSelectedCompany) {
        return true;
    }
    return false;
}

export {
    checkMatch
}