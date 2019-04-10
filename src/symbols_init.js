import * as s from './symbols.js'

$(function () {
  var symbols = s.getSymbolsDiv();
  $('#symbolsEle').html(symbols)
  var companies = s.getCompaniesDiv();
  $('#companiesEle').html(companies);
  });

// document.getElementsByClassName("symbol")[1].getBoundingClientRect()

// document.elementFromPoint(8, 8)