import * as s from './symbols.js'

var initCompany = function () {
    var companies = s.getCompaniesDiv();
    $('#companiesEle').html(companies);
}

var resetAllSelection = function () {
    $('.company').removeClass("selected")
}

var markSelected = function (ele) {
    if ($(ele).hasClass("company")) {
        $(ele).addClass("selected")
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

export {
    initCompany,
    resetAllSelection,
    markSelected,
    isCompany,
    getSelectedCompany
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)