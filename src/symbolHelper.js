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
    $('#symbolSelected').val("")
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

var setSelectedSymbol = function(company) {
    $('#symbolSelected').val(company)
}

var markSelected = function () {
    var highlightedSymbol = $('.symbol.highlighted')
    if (highlightedSymbol != undefined) {
        resetAllSelection()
        highlightedSymbol.addClass('selected')
        setSelectedSymbol(highlightedSymbol.attr('company'))
    }
}

var getSelectedSymbolCompany = function () {
    return $('#symbolSelected').val()
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

var isSymbolValueContainer = function(ele) {
    return $(ele).hasClass("symbolValue")
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
    resetAll,
    isSymbolValueContainer
}