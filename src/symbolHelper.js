import * as s from './symbols.js'

var initSymbol = function () {
    var symbols = s.getSymbolsDiv();
    $('#symbolsEle').html(symbols)
    var companies = s.getCompaniesDiv();
    $('#companiesEle').html(companies);
}

export { initSymbol }

// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)