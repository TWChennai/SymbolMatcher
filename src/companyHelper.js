import * as dataProvider from './dataProvider.js'

var slider = null;

var initCompany = function () {
    $('#companiesEle').html('')
    var companies = dataProvider.getCompanies();
    var companyLineItems = getCompanyItems(companies);
    $('#companiesEle').html($("<ul>").attr("id", "lightSlider").append(companyLineItems));
    slider = $("#lightSlider").lightSlider({
        item: 3,
        loop: true
      });
}

var moveToNextCompany = function() {
    slider.goToNextSlide();
}

var getSelectedCompany = function() {
    return $("#lightSlider li.active").attr("company");
}

var isCompanyContainer = function (ele) {
    return $(ele).hasClass("companies") || $(ele).attr("id") == "main"
}

var getCompanyItems = function (companies) {
    return companies.map(company => {
        var companyItem = $("<li>");
        companyItem.text(company);
        companyItem.addClass("company");
        companyItem.attr('company', company);
        return companyItem;
    })
}

export {
    initCompany,
    isCompanyContainer,
    getSelectedCompany,
    moveToNextCompany
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)