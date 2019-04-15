
var setCurrentSymbol = function (symbol) {
    $('#symbolsEle').html('')
    var symbolDiv = getSymbolAsDiv(symbol);
    $('#symbolsEle').html(symbolDiv)
}

var getSelectedSymbolCompany = function() {
    return $('#symbolsEle .symbol').attr("company");
}

var getSymbolAsDiv = function (symbol) {
    var symbolDiv = document.createElement("div");
    symbolDiv.innerHTML = symbol.name;
    symbolDiv.className = "boxed symbol";
    symbolDiv.setAttribute("company", symbol.companyName);
    return symbolDiv;
};

export {
    setCurrentSymbol,
   getSelectedSymbolCompany
}