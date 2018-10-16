'use strict';

//establish global variables
var hoursOfOperation = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

// math equation for inclusive random number within a range of customers
function calcAverageCustomerPerHour (minCustomer, maxCustomer) {
  return Math.random() * (maxCustomer - minCustomer + 1) + minCustomer;
}



//1st and Pike store location
var firstAndPike = {
  storeLocation: '1st & Pike',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldPerHour: []
}

firstAndPike.avgCustomer = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;
   
    firstAndPike.cookiesSoldPerHour.push(Math.floor(cookies));
  }
  console.log('1st and Pike', this.cookiesSoldPerHour);
}

firstAndPike.render = function () {
  this.avgCustomer();

  var firstAndPikeUl = document.getElementById('first-and-pike-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
    firstAndPikeUl.appendChild(liEl);
  }
}

firstAndPike.render();



//seatac store location
var seatac = {
  storeLocation: 'SeaTac',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesSoldPerCustomer: 1.2,
  cookiesSoldPerHour: []
}

seatac.avgCustomer = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;

    seatac.cookiesSoldPerHour.push(Math.floor(cookies));
  }
  console.log('seatac', this.cookiesSoldPerHour);
}

seatac.render = function () {
  this.avgCustomer();

  var seatacUl = document.getElementById('seatac-airport-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
    seatacUl.appendChild(liEl);
  }
}

seatac.render();



// Seattle Center store location
var seattleCenter = {
  storeLocation: 'Seattle Center',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesSoldPerCustomer: 3.7,
  cookiesSoldPerHour: []
}

seattleCenter.avgCustomer = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;

    seattleCenter.cookiesSoldPerHour.push(Math.floor(cookies));
  }
  console.log('Seattle Center', this.cookiesSoldPerHour);
}

seattleCenter.render = function () {
  this.avgCustomer();

  var seattleCenterUl = document.getElementById('seattle-center-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`
    seattleCenterUl.appendChild(liEl);
  }
}

seattleCenter.render();



//Capitol Hill - 20min 38max 2.3per
var capitolHill = {
  storeLocation: 'Capitol Hill',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldPerHour: []
}

capitolHill.avgCustomer = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;

    capitolHill.cookiesSoldPerHour.push(Math.floor(cookies));
  }
  console.log('Capitol Hill', this.cookiesSoldPerHour);
}

capitolHill.render = function() {
  this.avgCustomer();

  var capitolHillUl = document.getElementById('capitol-hill-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${capitolHill.cookiesSoldPerHour[i]} cookies.`;
    capitolHillUl.appendChild(liEl);

  }
}

capitolHill.render();



//Alki - 2min 16max 4.6per
