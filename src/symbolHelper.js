import * as s from './symbols.js'

var initSymbol = function () {
    var symbols = s.getSymbolsDiv();
    $('#symbolsEle').html(symbols)
}

var resetAllSelection = function () {
    $('.symbol').removeClass("selected")
}

var markSelected = function (ele) {
    var currentElement = $(ele)
    if (currentElement.hasClass("symbol") && !currentElement.hasClass("done")) {
        currentElement.addClass("selected")
    }
}

var getSelectedSymbolCompany = function() {
    var selectedSymbol = $('.symbol.selected')
    if (selectedSymbol != undefined) {
        return selectedSymbol.attr('company')
    }
    return ""
}

var markSelectedDone = function() {
    var selectedSymbol = $('.symbol.selected')
    if (selectedSymbol != undefined) {
        selectedSymbol.addClass('done')
    }
}

var removeDone = function() {
    $('.symbol.done').remove()
}

var isSymbol = function(ele) {
    return $(ele).hasClass("symbol")
}

export {
    initSymbol, resetAllSelection, markSelected, isSymbol, getSelectedSymbolCompany, markSelectedDone, removeDone
}