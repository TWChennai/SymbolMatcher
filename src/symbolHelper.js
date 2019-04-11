import * as s from './symbols.js'

var initSymbol = function () {
    var symbols = s.getSymbolsDiv();
    $('#symbolsEle').html(symbols)
    var companies = s.getCompaniesDiv();
    $('#companiesEle').html(companies);
}

var resetAllSelection = function () {
    $('.symbol').removeClass("selected")
}

var markSelected = function (ele) {
    if ($(ele).hasClass("symbol")) {
        $(ele).addClass("selected")
    }
}

var getSelectedSymbolCompany = function() {
    var selectedSymbol = $('.symbol.selected')
    if (selectedSymbol != undefined) {
        return selectedSymbol.attr('company')
    }
    return ""
}

var isSymbol = function(ele) {
    return $(ele).hasClass("symbol")
}

export {
    initSymbol, resetAllSelection, markSelected, isSymbol, getSelectedSymbolCompany
}