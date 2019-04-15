import * as s from './symbols.js'

var displaySymbol = function (symbol) {
    $('#symbolsEle').html('')
    var symbolDiv = s.getSymbolAsDiv(symbol);
    $('#symbolsEle').html(symbolDiv)
}

var getSelectedSymbolCompany = function() {
    return $('#symbolsEle .symbol').attr("company");
}


export {
    displaySymbol,
   getSelectedSymbolCompany
}