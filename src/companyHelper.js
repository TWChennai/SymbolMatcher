import * as s from './symbols.js'
import { getSelectedSymbolCompany } from './symbolHelper.js';

var initCompany = function () {
    $('#companiesEle').html('')
    var companies = s.getCompaniesDiv();
    $('#companiesEle').html(companies);
}

var resetAllSelection = function () {
    $('.company').removeClass("selected")
    $('#companySelected').val("")
}

var resetAllHighlights = function () {
    $('.company').removeClass("highlighted")
}

var resetAll = function() {
    resetAllSelection()
    resetAllHighlights()
}

var markSelected = function () {
    var highlightedCompany = $('.company.highlighted')
    if (highlightedCompany != undefined) {
        resetAllSelection()
        highlightedCompany.addClass('selected')
        setSelectedCompany(highlightedCompany.attr('company'))
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
    $('#companySelected').val()
}

var removeSelected = function () {
    $('.company.selected').remove()
    var selectedCompany = $('.company.selected')
    if (selectedCompany != undefined) {
        selectedCompany.remove()
    }
}

var setSelectedCompany = function(company) {
    $('#companySelected').val(company)
}

var isCompanyValueContainer = function(ele) {
    return $(ele).hasClass("companyValue")
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
    resetAll,
    isCompanyValueContainer
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)