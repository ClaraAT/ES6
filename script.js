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

 /* EXERCICI 3 */

 var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
 const reducer = (total, currentValue) => (`${total} ${currentValue}`);

console.log (epic.reduce(reducer))

 /* EXERCICI 4 */

 let myString = prompt("Write anything")
 
 const reverseString = (anyString) => {
     myArray = anyString.split("");
     reverseArray = myArray.reverse();
     finalArray = [...reverseArray]
     console.log(finalArray.join(""));
 }

 reverseString (myString);

 /* EXERCICI 5 */
 async function b() {
   let myPromise = new Promise (resolve => {
      // ...   
     })
 }

 funtion a() {
   b().then() = > {
   doMoreWork();
   }
}