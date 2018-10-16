'use strict';

//establish global variables
var hoursOfOperation = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

var allStoreLocations = [];
var storeCookiesSalesTable = document.getElementById('store-sales-projection-table');

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
  console.log(this.avgCustomerPerHour)
}
//prototype for calc cookies per hour
// SalmonStand.prototype.calcAvgCookiesPerHour = function() {
//   this.calcAvgCookiesPerHour();
//   for(var i = 0; i < hoursOfOperation; i++) {

//   }

// }


//use constructor to instantiate stores

new SalmonStand('1st and Pike', 23, 65, 6.3);
new SalmonStand('SeaTac', 3, 24, 1.2);
new SalmonStand('Seattle Center', 11, 38, 3.7);
new SalmonStand('Capitol Hill', 20, 38, 2.3);
new SalmonStand('Alki', 2, 16, 4.6);


// math equation for inclusive random number within a range of customers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // from MDN docs
}


// //1st and Pike store location
// var firstAndPike = {
//   storeLocation: '1st & Pike',
//   minCustomerPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiesSoldPerCustomer: 6.3,
//   cookiesSoldPerHour: [],
//   dailyTotal: 0
// };

// firstAndPike.hourlyCookies = function () {
//   for(var i = 0; i < hoursOfOperation.length; i++) {
//     var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;
   
//     firstAndPike.cookiesSoldPerHour.push(Math.ceil(cookies));
//     this.dailyTotal += Math.ceil(cookies);
//   }
  
//   console.log('1st and Pike' + this.cookiesSoldPerHour);
//   console.log(this.dailyTotal);
// }


// firstAndPike.render = function () {
//   this.hourlyCookies();

//   var firstAndPikeUl = document.getElementById('first-and-pike-hourly-projections');
  
//   for(var i = 0; i < hoursOfOperation.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
//     firstAndPikeUl.appendChild(liEl);
//   }
//   liEl = document.createElement('li');
//   liEl.textContent = `Total Cookies Sold Today: ${this.dailyTotal}!`;
//   firstAndPikeUl.appendChild(liEl);
  
// }

// firstAndPike.render();


