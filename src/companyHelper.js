import * as s from './symbols.js'

var initCompany = function () {
    $('#companiesEle').html('')
    var companies = s.getCompaniesDiv();
    $('#companiesEle').html(companies);
}

var resetAllHighlights = function () {
    $('.company').removeClass("highlighted")
}

var markHighlighted = function (ele) {
    var currentElement = $(ele)
    if (currentElement.hasClass("company")) {
        currentElement.addClass("highlighted")
    }
}

var getHiglightedCompany = function() {
    var highlightedCompany = $('.company.highlighted')
    if (highlightedCompany != undefined) {
        return highlightedCompany.attr('company')
    }

    return ""
}

var isCompany = function (ele) {
    return $(ele).hasClass("company")
}

export {
    initCompany,
    isCompany,
    getHiglightedCompany,
    markHighlighted,
    resetAllHighlights,
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)