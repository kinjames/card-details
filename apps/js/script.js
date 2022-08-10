console.log('hello world')

let cardName = document.getElementById('cardName');
let cardNumber = document.getElementById('cardNumber');
let expiryMonth = document.getElementById('expiryMonth');
let expiryYear = document.getElementById('expiryYear');
let cvcNumber = document.getElementById('cvcNumber');

let cardHolder = document.getElementById('card-holder-name');
let nums = document.getElementById('nums');
let cardMonth = document.getElementById('cardMonth');
let cardYear = document.getElementById('cardYear');
let cardCvc = document.getElementById('cardCvc');

let form = document.getElementById('myForm');

cardName.addEventListener('input', function(){
    cardHolder.innerText = cardName.value;
});

cardNumber.addEventListener('input', function(){
    nums.innerText = cardNumber.value;
});

expiryMonth.addEventListener('input', function(){
    cardMonth.innerText = expiryMonth.value;
});

expiryYear.addEventListener('input', function(){
    cardYear.innerText = expiryYear.value;
});

cvcNumber.addEventListener('input', function(){
    cardCvc.innerText = cvcNumber.value;
});


form.addEventListener('submit', function(){

})

function showError(input,message) {  
    const formControl = input.parentElement;  
    formControl.className = "input error";  
    const small = formControl.querySelector("error");  
    small.innerText = message;
} 

function showSuccess(input) {  
    const formControl = input.parentElement;  
    formControl.classList.add("success");  
}

form.addEventListener("submit", (e) => {  
    e.preventDefault();  
    checkRequired([cardName, cardNumber, expiryMonth, expiryYear, cvcNumber]); 
    checkNumber(cardNumber) 
    checkMonth(expiryMonth);
    checkYear(expiryYear); 
    checkCvc(cvcNumber);
});

function checkRequired(inputArr) {  
    inputArr.forEach(function (input) {  
     if (input.value.trim() === "") {  
      showError(input, `Can't be blank`);  
     } else {  
      showSuccess(input);  
     }  
    });  
}


function checkNumber(cardNumber){
    let numberCode = /^[0-9]{16}$/;
    return numberCode.test(cardNumber)
    // if (numberCode.test(input.value.trim())){
    //     showSuccess(input);
    // } else {
    //     showError(input,'Wrong format, numbers only')
    // }
}


function checkMonth(expiryMonth){
    let monthCode = /(^[1-9]$)|(^[0-1][1-2]$)|(^0[1-9]$)/;
    return monthCode.test(expiryMonth);
    // if(monthCode.test(input.value.trim())){
    //     showSuccess(input)
    // } else {
    //     showError(input,'Wrong Format')
    // }
}

function checkYear(expiryYear){
    let yearCode = /[0-2][0-5]|[1-9]/g ;
    return yearCode.test(expiryYear)
    // if (yearCode.test(input.value.trim())){
    //     showSuccess(input);
    // } else {
    //     showError(input,'Wrong format')
    // }
}

function checkCvc(cvcNumber){
    let cvcCode = /^[0-9]{3}$/;
    return cvcCode.test(cvcNumber)
    // if (cvcCode.test(input.value.trim())){
    //     showSuccess(input);
    // } else {
    //     showError(input,'Wrong format')
    // }
}



