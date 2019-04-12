import * as s from './symbols.js'

var initSymbol = function () {
    $('#symbolsEle').html('')
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

var removeSelected = function() {
    var selectedSymbol = $('.symbol.selected')
    if (selectedSymbol != undefined) {
        selectedSymbol.remove()
    }
}

var isSymbol = function(ele) {
    return $(ele).hasClass("symbol")
}

export {
    initSymbol, resetAllSelection, markSelected, isSymbol, getSelectedSymbolCompany, removeSelected
}