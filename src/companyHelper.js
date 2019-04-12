import * as s from './symbols.js'

var initCompany = function () {
    $('#companiesEle').html('')
    var companies = s.getCompaniesDiv();
    $('#companiesEle').html(companies);
}

var resetAllSelection = function () {
    $('.company').removeClass("selected")
}

var resetAllHighlights = function () {
    $('.company').removeClass("highlighted")
}

var resetAll = function() {
    resetAllSelection()
    resetAllHighlights()
}

var markSelected = function () {
    var highlightedSymbol = $('.company.highlighted')
    if (highlightedSymbol != undefined) {
        resetAllSelection()
        return highlightedSymbol.addClass('selected')
    }
}

var markHighlighted = function (ele) {
    var currentElement = $(ele)
    if (currentElement.hasClass("company")) {
        currentElement.addClass("highlighted")
    }
}

var isCompany = function (ele) {
    return $(ele).hasClass("company")
}

var getSelectedCompany = function () {
    var selectedCompany = $('.company.selected')
    if (selectedCompany != undefined) {
        return selectedCompany.attr('company')
    }
    return ""
}

var removeSelected = function () {
    $('.company.selected').remove()
    var selectedCompany = $('.company.selected')
    if (selectedCompany != undefined) {
        selectedCompany.remove()
    }
}

export {
    initCompany,
    resetAllSelection,
    markSelected,
    isCompany,
    getSelectedCompany,
    removeSelected,
    markHighlighted,
    resetAllHighlights,
    resetAll
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)