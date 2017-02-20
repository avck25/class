/*global myApp*/
var monthName = myApp.utils.getMonthName(3);
console.log("myApp.utils.getMonthName(3)", monthName);

var monthNumber = myApp.utils.getMonthNumber(monthName);
console.log("myApp.utils.getMonthNumber('" + monthName + "')", monthNumber);

console.log('myApp.utils.stringCaseInsensitiveEquals("apple", "APPLE")',
myApp.utils.stringCaseInsensitiveEquals("apple", "APPLE"));

console.log('myApp.utils.stringCaseInsensitiveEquals("apple", "Donut")',
myApp.utils.stringCaseInsensitiveEquals("apple", "Donut"));