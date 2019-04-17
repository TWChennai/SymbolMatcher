var symbols = [{
        name: 'Symbol1',
        symbolImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyName: 'Company1'
    },
    {
        name: 'Symbol2',
        symbolImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyName: 'Company2'
    },
    {
        name: 'Symbol3',
        symbolImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyName: 'Company3'
    },
    {
        name: 'Symbol4',
        symbolImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyName: 'Company4'
    },
    {
        name: 'Symbol5',
        symbolImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyImageUrl: 'img/selenium_thoughtworks.jpeg',
        companyName: 'Company5'
    }
    // },
    // {
    //     name: 'Symbol6',
    //     symbolImageUrl: 'url3',
    //     companyImageUrl: 'url3',
    //     companyName: 'Company6'
    // },
    // {
    //     name: 'Symbol7',
    //     symbolImageUrl: 'url3',
    //     companyImageUrl: 'url3',
    //     companyName: 'Company7'
    // },
    // {
    //     name: 'Symbol8',
    //     symbolImageUrl: 'url3',
    //     companyImageUrl: 'url3',
    //     companyName: 'Company8'
    // },
    // {
    //     name: 'Symbol9',
    //     symbolImageUrl: 'url3',
    //     companyImageUrl: 'url3',
    //     companyName: 'Company9'
    // },
    // {
    //     name: 'Symbol10',
    //     symbolImageUrl: 'url3',
    //     companyImageUrl: 'url3',
    //     companyName: 'Company10'
    // }
]

var getSymbols = function () {
    return symbols;
}

var getCompanies = function () {
    return symbols.map(symbol => {
        return {
            'name': symbol.companyName,
            'imageUrl': symbol.companyImageUrl,
        }
    })
}

export {
    getSymbols,
    getCompanies
}