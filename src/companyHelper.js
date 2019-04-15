import * as s from './symbols.js'

var slider = null;

var initCompany = function () {
    $('#companiesEle').html('')
    var companies = s.getCompanyItems();
    $('#companiesEle').html($("<ul>").attr("id", "lightSlider").append(companies));
    slider = $("#lightSlider").lightSlider({
        item: 2,
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

export {
    initCompany,
    isCompanyContainer,
    getSelectedCompany,
    moveToNextCompany
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)