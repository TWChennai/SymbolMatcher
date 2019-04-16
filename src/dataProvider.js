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
    },
    // {
    //     name: 'Symbol4',
    //     url: 'url3',
    //     companyName: 'Company4'
    // },
    // {
    //     name: 'Symbol5',
    //     url: 'url3',
    //     companyName: 'Company5'
    // },
    // {
    //     name: 'Symbol6',
    //     url: 'url3',
    //     companyName: 'Company6'
    // },
    // {
    //     name: 'Symbol7',
    //     url: 'url3',
    //     companyName: 'Company7'
    // },
    // {
    //     name: 'Symbol8',
    //     url: 'url3',
    //     companyName: 'Company8'
    // },
    // {
    //     name: 'Symbol9',
    //     url: 'url3',
    //     companyName: 'Company9'
    // },
    // {
    //     name: 'Symbol10',
    //     url: 'url3',
    //     companyName: 'Company10'
    // }
]

var getSymbols = function() {
    return symbols;
}

var getCompanies = function () {
    return [...new Set(symbols.map(symbol => symbol.companyName))]
}

export {
    getSymbols, getCompanies
}