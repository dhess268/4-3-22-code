
// Each letter costs a price to print on a billboard
// This solution cannot use the multiplication operator "*"

function billboard(name, price = 30){
    let total = 0;
    for(let i = 0; i < name.length; i++){
      total += price;
    }
    return total;
  } 



// Converts an array of ascii codes to the string representations

  var ArrowFunc = function(arr) {
    return arr.map(item => String.fromCharCode(item)).join(''); //Complete this function
  }



// Squared each element in an array and then returns the sum of all the results
 function squareSum(numbers){
   return (numbers.length > 0) ? numbers.reduce((acc, current) => acc += Math.pow(current, 2), 0): 0;
}