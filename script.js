/* EXERCICI 1 */

const multiply = (num1, num2) => num1*num2;

const toCelsius = (fahrenheit) => (5/9) * (fahrenheit-32);

const padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       } 
    return numStr;
  } 

const power = (base, exponent) =>{ 
    var result=1; 
    for (var i=0; i < exponent; i++) { 
          result *=base; 
        } 
    return result;
    }

const greet = (who) => console.log("Hello " + who);

/* EXERCICI 2 */

 let users = 
 [{ firstName: 'Homer', lastName: 'Simpson' },
 { firstName: 'Marge', lastName: 'Simpson' },
 { firstName: 'Bart', lastName: 'Simpson' },
 { firstName: 'Lisa', lastName: 'Simpson' },
 { firstName: 'Maggie', lastName: 'Simpson' }];

 users.map(function (user) {
    user.firstName;
 });
 