
// Each letter costs a price to print on a billboard
// This solution cannot use the multiplication operator "*"

function billboard(name, price = 30){
    let total = 0;
    for(let i = 0; i < name.length; i++){
      total += price;
    }
    return total;
  } 