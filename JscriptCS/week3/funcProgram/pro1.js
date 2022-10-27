// functional programming 
var currencyOne = 100; 
var currencyTwo = 0;
var exchangeRate =1.2; 
function convertcurrency(amount, rate){
    return amount * rate; 

}

currencyTwo = convertcurrency(currencyOne, exchangeRate);
console.log(currencyTwo) 
