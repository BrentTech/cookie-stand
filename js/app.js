'use strict';

//+++++++++++++++++++++ DATA +++++++++++++++++++++++++++
var hoursOfOperation = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
var allStoreLocations = [];
var storeCookiesSalesTable = document.getElementById('store-sales-projection-table');
var newStoreForm = document.getElementById('new-store-form');
var footer;


function SalmonStand(storeLocation, minCustomerPerHour, maxCustomerPerHour, avgCookiesSoldPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.avgCustomerPerHour = [];
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;

  allStoreLocations.unshift(this);
}

SalmonStand.prototype.calcAvgCustomerPerHour = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {    
    var randomCustomer = random(this.minCustomerPerHour, this.maxCustomerPerHour);
    
    this.avgCustomerPerHour.push(randomCustomer);
  }
}

SalmonStand.prototype.calcAvgCookiesPerHour = function() {
  this.calcAvgCustomerPerHour();
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var hourlyCookies = Math.ceil(this.avgCustomerPerHour[i] * this.avgCookiesSoldPerCustomer);
    
    this.cookiesSoldPerHour.push(hourlyCookies);
    this.dailyTotal += hourlyCookies;
  }
}

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

new SalmonStand('1st and Pike', 23, 65, 6.3);
new SalmonStand('SeaTac', 3, 24, 1.2);
new SalmonStand('Seattle Center', 11, 38, 3.7);
new SalmonStand('Capitol Hill', 20, 38, 2.3);
new SalmonStand('Alki', 2, 16, 4.6);


//+++++++++++++++++++++ Function Declarations +++++++++++++++++++++++++++
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // from MDN docs
}

function newElement(type, content, parent) {
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  newElement('th', 'Store Location', trEl);

  for (var i = 0; i< hoursOfOperation.length; i++) {
    newElement('th', hoursOfOperation[i], trEl);
    storeCookiesSalesTable.appendChild(trEl);
  }

  newElement('th', 'Total', trEl);
}

function makeFooterRow() {
  var tfootEl = document.createElement('tfoot');
  var footerContent = hourlyTotals();
  footer = tfootEl;

  newElement('td', 'Hourly Total', tfootEl);

  for (var i = 0; i< hoursOfOperation.length; i++) {
    newElement('td', footerContent[i], tfootEl);
    storeCookiesSalesTable.appendChild(tfootEl);
  }

  newElement('td', '', tfootEl);
}

function renderAllStores() {
  for (var i = 0; i < allStoreLocations.length; i++) {
    allStoreLocations[i].render();
  }
} 

function handleStoreLocationSubmit(event) {
  event.preventDefault();

  var location = event.target.storeLocation.value;
  var minCust = Number(event.target.minCustomers.value);
  var maxCust = Number(event.target.maxCustomers.value);
  var avgSale = Number(event.target.avgCookieSale.value);
  
  if (isNaN(avgSale)) {
    return alert('Please the average number of cookies sold per customer.');
  }

  new SalmonStand(location, minCust, maxCust, avgSale);
  
  event.target.storeLocation.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCookieSale.value = null;

  footer.remove();
  allStoreLocations[0].render();
  makeFooterRow();
}

function hourlyTotals() {
  var workingTotals = [];

  for(var i = 0; i < hoursOfOperation.length; i++) {
    var total = 0;

    for(var j = 0; j < allStoreLocations.length; j++) {
      total += allStoreLocations[j].cookiesSoldPerHour[i];
    }
    workingTotals.push(total);
  }
  return workingTotals;
}



//+++++++++++++++++++++ Exicutables +++++++++++++++++++++++++++
newStoreForm.addEventListener('submit', handleStoreLocationSubmit);

makeHeaderRow();

renderAllStores();
makeFooterRow();
console.log(footer, 'this is the footer');
//+++++++++++++++++++++ WIP +++++++++++++++++++++++++
