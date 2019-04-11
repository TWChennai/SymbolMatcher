import * as s from './symbols.js'

var initCompany = function () {
    var companies = s.getCompaniesDiv();
    $('#companiesEle').html(companies);
}

var resetAllSelection = function () {
    $('.company').removeClass("selected")
}

var markSelected = function (ele) {
    var currentElement = $(ele)
    if (currentElement.hasClass("company") && !currentElement.hasClass("done")) {
        currentElement.addClass("selected")
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

var removeDone = function() {
    $('.company.done').remove()
}

var markSelectedDone = function() {
    var selectedCompany = $('.company.selected')
    if (selectedCompany != undefined) {
        selectedCompany.addClass('done')
    }
}

export {
    initCompany,
    resetAllSelection,
    markSelected,
    isCompany,
    getSelectedCompany,
    markSelectedDone,
    removeDone
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)