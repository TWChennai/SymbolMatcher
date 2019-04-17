import * as dataProvider from './dataProvider.js'

var slider = null;

var initCompany = function () {
    $('#companiesEle').html('')
    var companies = dataProvider.getCompanies();
    var companyLineItems = getCompanyItems(companies);
    $('#companiesEle').html($("<ul>").attr("id", "lightSlider").append(companyLineItems));
    slider = $("#lightSlider").lightSlider({
        item: 1,
        loop: true,
        rtl: false,
        gallery: true
      });
    slider.play();
}

var next = function(times) {
    var currentSlideCount = slider.getCurrentSlideCount()
   var totalCompanies = dataProvider.getCompanies().length
    if (currentSlideCount == dataProvider.getCompanies().length) {
        slider.goToSlide(1)
    }
    for (var i = 0; i < times && slider.getCurrentSlideCount() <= totalCompanies; i++){
        slider.goToNextSlide();
    }
}   

var reset = function(){
    slider.play()
}

var getSelectedCompany = function() {
    slider.pause(); 
    return $("#lightSlider li.active").attr("company");
}

var isCompany = function (ele) {
    return $(ele).hasClass("company")
}

var getCompanyItems = function (companies) {
    return companies.map(company => {
        var companyItem = $("<li>");
        companyItem.attr('data-thumb', company.imageUrl)
        companyItem.append(getCompanyImage(company.imageUrl));
        companyItem.addClass("company");
        companyItem.attr('company', company.name);
        return companyItem;
    })
}

var getCompanyImage = function(imageUrl) {
    var img = $('<img>');
    img.attr('src', imageUrl);
    return img;
}

export {
    initCompany,
    isCompany,
    getSelectedCompany,
    next,
    reset
}


// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)