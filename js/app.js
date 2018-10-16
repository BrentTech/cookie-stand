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
  cookiesSoldPerHour: [],
  dailyTotal: 0
};

firstAndPike.hourlyCookies = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;
   
    firstAndPike.cookiesSoldPerHour.push(Math.ceil(cookies));
    this.dailyTotal += Math.ceil(cookies);
  }
  
  console.log('1st and Pike' + this.cookiesSoldPerHour);
  console.log(this.dailyTotal);
}


firstAndPike.render = function () {
  this.hourlyCookies();

  var firstAndPikeUl = document.getElementById('first-and-pike-hourly-projections');
  
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
    firstAndPikeUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total Cookies Sold Today: ${this.dailyTotal}!`;
  firstAndPikeUl.appendChild(liEl);
  
}

firstAndPike.render();



//seatac store location
var seatac = {
  storeLocation: 'SeaTac',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesSoldPerCustomer: 1.2,
  cookiesSoldPerHour: [],
  dailyTotal: 0
}

seatac.hourlyCookies = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;

    seatac.cookiesSoldPerHour.push(Math.ceil(cookies));
    this.dailyTotal += Math.ceil(cookies);
  }
  console.log('seatac', this.cookiesSoldPerHour);
}

seatac.render = function () {
  this.hourlyCookies();

  var seatacUl = document.getElementById('seatac-airport-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
    seatacUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total Cookies Sold Today: ${this.dailyTotal}!`;
  seatacUl.appendChild(liEl);
}

seatac.render();



// Seattle Center store location
var seattleCenter = {
  storeLocation: 'Seattle Center',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesSoldPerCustomer: 3.7,
  cookiesSoldPerHour: [],
  dailyTotal: 0
}

seattleCenter.hourlyCookies = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;

    seattleCenter.cookiesSoldPerHour.push(Math.ceil(cookies));
    this.dailyTotal += Math.ceil(cookies);
  }
  console.log('Seattle Center', this.cookiesSoldPerHour);
}

seattleCenter.render = function () {
  this.hourlyCookies();

  var seattleCenterUl = document.getElementById('seattle-center-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`
    seattleCenterUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total Cookies Sold Today: ${this.dailyTotal}!`;
  seattleCenterUl.appendChild(liEl);
}

seattleCenter.render();



//Capitol Hill store location
var capitolHill = {
  storeLocation: 'Capitol Hill',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldPerHour: [],
  dailyTotal: 0
}

capitolHill.hourlyCookies = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;

    capitolHill.cookiesSoldPerHour.push(Math.ceil(cookies));
    this.dailyTotal += Math.ceil(cookies);
  }
  console.log('Capitol Hill', this.cookiesSoldPerHour);
}

capitolHill.render = function() {
  this.hourlyCookies();

  var capitolHillUl = document.getElementById('capitol-hill-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${capitolHill.cookiesSoldPerHour[i]} cookies.`;
    capitolHillUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total Cookies Sold Today: ${this.dailyTotal}!`;
  capitolHillUl.appendChild(liEl);
}

capitolHill.render();



//Alki store location
var alki = {
  storeLocation: 'Alki',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesSoldPerCustomer: 4.6,
  cookiesSoldPerHour: [],
  dailyTotal: 0
}

alki.hourlyCookies = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;

    alki.cookiesSoldPerHour.push(Math.ceil(cookies));
    this.dailyTotal += Math.ceil(cookies);
  }
  console.log('Alki', this.cookiesSoldPerHour);
}

alki.render = function() {
  this.hourlyCookies();

  var alkiUl = document.getElementById('alki-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${alki.cookiesSoldPerHour[i]} cookies.`;
    alkiUl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total Cookies Sold Today: ${this.dailyTotal}!`;
  alkiUl.appendChild(liEl);
}

alki.render();
