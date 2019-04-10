import * as s from './symbols.js'

$(function () {
  var symbols = s.getSymbolsDiv();
  $('#symbolsEle').html(symbols)
  var companies = s.getCompaniesDiv();
  $('#companiesEle').html(companies);
});