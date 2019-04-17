
var setCurrentSymbol = function (symbol) {
    $('#symbolsEle').html('')
    var symbolDiv = getSymbolAsDiv(symbol);
    $('#symbolsEle').html(symbolDiv)
}

var getSelectedSymbolCompany = function() {
    return $('#symbolsEle .symbol').attr("company");
}

var getSymbolAsDiv = function (symbol) {
    var symbolDiv = $("<div>");
    symbolDiv.append(getSymbolImage(symbol.symbolImageUrl))
    .addClass("boxed symbol")
    .attr("company", symbol.companyName);
    return symbolDiv;
};

var getSymbolImage = function(imageUrl) {
    var img = $('<img>');
    img.attr('src', imageUrl);
    return img;
}

export {
    setCurrentSymbol,
   getSelectedSymbolCompany
}