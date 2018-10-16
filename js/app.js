'use strict';

//establish global variables
var hoursOfOperation = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

  // math equation for inclusive random number within a range
function calcAverageCustomerPerHour (minCustomer, maxCustomer) {
  return Math.random() * (maxCustomer - minCustomer + 1) + minCustomer;
}


var firstAndPike = {
  storeLocation: '1st & Pike',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldPerHour: []
};

firstAndPike.avgCustomer = function () {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var cookies = calcAverageCustomerPerHour(this.minCustomerPerHour, this.maxCustomerPerHour) * this.avgCookiesSoldPerCustomer;
   
    firstAndPike.cookiesSoldPerHour.push(Math.floor(cookies));
    console.log(this.cookiesSoldPerHour);
  }
}

firstAndPike.render = function () {
  this.avgCustomer();

  var firstAndPikeUl =document.getElementById('first-and-pike-hourly-projections');
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldPerHour[i]} cookies.`;
    firstAndPikeUl.appendChild(liEl);
  }
}

//var to push estimated customers


//var to push estimated hourly sales

//function for cacluating avg customers, sales, ect

