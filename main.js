const currency_1 = document.getElementById('currency-one');
const currency_1_amount = document.getElementById('amount-1')
const currency_2 = document.getElementById('currency-two');
const currency_2_amount = document.getElementById('amount-2');const swap = document.getElementById('swap');
const rate = document.getElementById('rate');


// Fetch exchange rates and update 
function convert(){
 const currency_one = currency_1.value;
 const currency_two = currency_2.value;
 //getting the api
fetch(`http://data.fixer.io/api/latest?access_key=ef418d9f40b5cf3bdcf12c36000f3a41`).then(res =>res.json()).then(data => {
  const rateC = data.rates[currency_two]
  rate.innerText = `1 ${currency_one} =${rateC} ${currency_two}`;

  currency_2_amount.value = (currency_1_amount.value * rateC).toFixed(2);
});

}



// Event listeners 

currency_1.addEventListener('change', convert);
currency_2.addEventListener('change', convert);

currency_1_amount.addEventListener('input', convert);
currency_2_amount.addEventListener('input', convert);
swap.addEventListener('click', () =>{
  const temp = currency_1.value ;
  currency_1.value = currency_2.value;
  currency_2.value = temp;
  convert();
});
convert();