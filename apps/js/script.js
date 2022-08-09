console.log('hello world')

let cardName = document.getElementById('cardName');
let cardNumber = document.getElementById('cardNumber').value;
let expiryMonth = document.getElementById('expiryMonth').value;
let expiryYear = document.getElementById('expiryYear').value;
let cvcNumber = document.getElementById('cvcNumber').value;

let cardHolder = document.getElementById('card-holder-name');
let nums = document.getElementById('nums');
let cardMonth = document.getElementById('cardMonth');
let cardYear = document.getElementById('cardYear');
let cardCvc = document.getElementById('cardCvc');

let form = document.getElementById('myForm');

cardName.addEventListener('input', function(){
    cardHolder.innerText = cardName.value;
});