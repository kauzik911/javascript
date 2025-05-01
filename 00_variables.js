const accountID = 1322
let accountEmail = "avc@g.com"
var accountCity = "Ajmer" //not a recommended way
// accountPassword = "424"     // not a recommended way
 
/*
Prefer not to use var. Because of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountCity, accountEmail, accountID])