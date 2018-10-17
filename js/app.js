'use strict';

//establish global variables
var hoursOfOperation = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
var allStoreLocations = [];
var storeCookiesSalesTable = document.getElementById('store-sales-projection-table');

// math equation for inclusive random number within a range of customers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // from MDN docs
}

function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

// build constructor function
function SalmonStand(storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesSoldPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.avgCustomerPerHour = [];
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;
  allStoreLocations.push(this);
}

//prototype for calc avg customer per hour
SalmonStand.prototype.calcAvgCustomerPerHour = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {    
    var randomCustomer = random(this.minCustomerPerHour, this.maxCustomerPerHour);
    
    this.avgCustomerPerHour.push(randomCustomer);
  }
}

//prototype for calc cookies per hour
SalmonStand.prototype.calcAvgCookiesPerHour = function() {
  this.calcAvgCustomerPerHour();
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var hourlyCookies = Math.ceil(this.avgCustomerPerHour[i] * this.avgCookiesSoldPerCustomer);
    
    this.cookiesSoldPerHour.push(hourlyCookies);
    this.dailyTotal += hourlyCookies;
  }
}

// SalmonStand.prototype.calcHourlyTotals = function() {
//   //variable for totals reset to 0
//   //loop to cycle through stores
//   //loop to cycle through hours
//   var totalPerHour = 0
//   for(var i = 0; i < hoursOfOperation.length; i++) {

//     for(var j = 0; allStoreLocations.length; i++) {
//       totalPerHour += 
//     }
//   }
// }


//use constructor to instantiate stores

new SalmonStand('1st and Pike', 23, 65, 6.3);
new SalmonStand('SeaTac', 3, 24, 1.2);
new SalmonStand('Seattle Center', 11, 38, 3.7);
new SalmonStand('Capitol Hill', 20, 38, 2.3);
new SalmonStand('Alki', 2, 16, 4.6);


SalmonStand.prototype.render = function () {
  this.calcAvgCookiesPerHour();
  var trEl = document.createElement('tr');
  newElement('td', this.storeLocation, trEl);

  for(var i = 0; i < hoursOfOperation.length; i++) {
    newElement('td', this.cookiesSoldPerHour[i], trEl);
    storeCookiesSalesTable.appendChild(trEl);
  }

  newElement('td', this.dailyTotal, trEl);
  storeCookiesSalesTable.appendChild(trEl);
}

// can these be self calling?
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  newElement('th', 'Store Location', trEl);

  for (var i = 0; i< hoursOfOperation.length; i++) {
    newElement('th', hoursOfOperation[i], trEl);
    storeCookiesSalesTable.appendChild(trEl);
  }

  newElement('th', 'Total', trEl);
}

function renderAllStores() {
  for (var i = 0; i < allStoreLocations.length; i++) {
    allStoreLocations[i].render();
  }
}

makeHeaderRow();
renderAllStores();
