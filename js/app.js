'use strict';

//establish global variables
var hoursOfOperation = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
var allStoreLocations = [];
var storeCookiesSalesTable = document.getElementById('store-sales-projection-table');

// math equation for inclusive random number within a range of customers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // from MDN docs
}

// build constructor function
function SalmonStand(storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesSoldPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.avgCustomerPerHour = [],
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0
  allStoreLocations.push(this)
}

//prototype for calc avg customer per hour
SalmonStand.prototype.calcAvgCustomerPerHour = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {    
    var randomCustomer = random(this.minCustomerPerHour, this.maxCustomerPerHour);
    
    this.avgCustomerPerHour.push(randomCustomer);
  }
  // console.log(this.avgCustomerPerHour)
}

//prototype for calc cookies per hour
SalmonStand.prototype.calcAvgCookiesPerHour = function() {
  this.calcAvgCustomerPerHour();
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var hourlyCookies = Math.ceil(this.avgCustomerPerHour[i] * this.avgCookiesSoldPerCustomer);
    
    this.cookiesSoldPerHour.push(hourlyCookies);
    this.dailyTotal += hourlyCookies;
  }
  // console.log(this.cookiesSoldPerHour)
}

//use constructor to instantiate stores

new SalmonStand('1st and Pike', 23, 65, 6.3);
new SalmonStand('SeaTac', 3, 24, 1.2);
new SalmonStand('Seattle Center', 11, 38, 3.7);
new SalmonStand('Capitol Hill', 20, 38, 2.3);
new SalmonStand('Alki', 2, 16, 4.6);

SalmonStand.prototype.render = function () {
  this.calcAvgCookiesPerHour();

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeLocation;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[0];
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[1];
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[2];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[3];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[4];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[5];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[6];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[7];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[8];
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[9];
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[10];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[11];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[12];
  trEl.appendChild(tdEl);
  
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesSoldPerHour[13];
  trEl.appendChild(tdEl);

  storeCookiesSalesTable.appendChild(trEl);
}

function renderAllStores() {
  for (var i = 0; i < allStoreLocations.length; i++) {
    allStoreLocations[i].render();
  }
}

renderAllStores();

