const accountID = 122456
let accountEmail = "Hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState = "Uttar Pradesh";


//accountID = 2 // not allowed
accountEmail = "aka@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"
console.log(accountID);

/* prefer not to use var
because fo issue in block scope and functional scope*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

