import * as s from './symbols.js'

var initSymbol = function () {
    $('#symbolsEle').html('')
    var symbols = s.getSymbolsDiv();
    $('#symbolsEle').html(symbols)
}

var resetAllSelection = function () {
    $('.companyValue').val("")
}

var isDropSection = function (ele) {
    return $(ele).hasClass("companyValue")
}

var populateSelectedCompany = function(ele, value){
    $(ele).val(value)
}

var getTotalSymbolMatch = function () {
    var successCounter = 0;
    $('.symbol-div').each(function(){
        var currentSymbol = $(this)
        if (currentSymbol != undefined) {
            var symbolCompany = currentSymbol.find(".symbol").attr('company')
            var userSelectedCompany = currentSymbol.find(".companyValue").val()
            if (symbolCompany != "" && symbolCompany == userSelectedCompany){
                successCounter = successCounter + 1
            }
        }
    })
    return successCounter
}


export {
    initSymbol,
    resetAllSelection,
    isDropSection,
    populateSelectedCompany,
    getTotalSymbolMatch
}