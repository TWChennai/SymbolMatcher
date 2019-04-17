import * as config from './configuration.json'
import { sampleSize } from 'lodash';

var symbols = []

var init = function() {
    symbols = sampleSize(config.symbols, config.questionsCount)
}

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
    init,
    getSymbols,
    getCompanies
}