var symbols = [{
        name: 'Symbol1',
        url: 'url1',
        companyName: 'Company1'
    },
    {
        name: 'Symbol2',
        url: 'url2',
        companyName: 'Company2'
    },
    {
        name: 'Symbol3',
        url: 'url3',
        companyName: 'Company3'
    }
]

var getSymbolDiv = function (symbol) {
    var symbolDiv = document.createElement("div");
    symbolDiv.innerHTML = symbol.name;
    symbolDiv.className = "boxed";
    symbolDiv.setAttribute('company', symbol.companyName);
    return symbolDiv;
};

var getSymbolsDiv = function () {
    return symbols.map(symbol => getSymbolDiv(symbol));
}

var getCompanies = function () {
    return [...new Set(symbols.map(symbol => symbol.companyName))]
}

var getCompaniesDiv = function () {
    return getCompanies().map(company => {
        var companyDiv = document.createElement("div");
        companyDiv.innerHTML = company;
        companyDiv.className = "boxed";
        companyDiv.setAttribute('company', company);
        return companyDiv;
    })
}

export {
    getSymbolsDiv, getCompaniesDiv
}