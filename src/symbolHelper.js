import * as s from './symbols.js'

var initSymbol = function () {
    $('#symbolsEle').html('')
    var symbols = s.getSymbolsDiv();
    $('#symbolsEle').html(symbols)
}

var resetAll = function() {
    resetAllSelection()
    resetAllHiglights()
}

var resetAllSelection = function () {
    $('.symbol').removeClass("selected")
}

var resetAllHiglights = function () {
    $('.symbol').removeClass("highlighted")
}

var markHighlighted = function (ele) {
    var currentElement = $(ele)
    if (currentElement.hasClass("symbol")) {
        currentElement.addClass("highlighted")
    }
}

var markSelected = function () {
    var highlightedSymbol = $('.symbol.highlighted')
    if (highlightedSymbol != undefined) {
        resetAllSelection()
        return highlightedSymbol.addClass('selected')
    }
}

var getSelectedSymbolCompany = function () {
    var selectedSymbol = $('.symbol.selected')
    if (selectedSymbol != undefined) {
        return selectedSymbol.attr('company')
    }
    return ""
}

var removeSelected = function () {
    var selectedSymbol = $('.symbol.selected')
    if (selectedSymbol != undefined) {
        selectedSymbol.remove()
    }
}

var isSymbol = function (ele) {
    return $(ele).hasClass("symbol")
}

export {
    initSymbol,
    resetAllSelection,
    markSelected,
    isSymbol,
    getSelectedSymbolCompany,
    removeSelected,
    markHighlighted,
    resetAllHiglights,
    resetAll
}