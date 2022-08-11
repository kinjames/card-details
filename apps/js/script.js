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

errorMessage = document.querySelector('.error')

let confirmation = document.getElementById('confirmation');

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



function showError(input, message) {  
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");  
    formControl.className = "input error";    
    small.innerText = message;
  
} 

function showSuccess(input) {  
    const formControl = input.parentElement;  
    formControl.classList.add("success");  
} 




function checkRequired(inputArr) {  
    inputArr.forEach(function (input) {  
     if (input.value.trim() === "") {  
    //   showError(input, `Can't be blank`);  
    setTimeout(function(){
        showError(input, `Can't be blank`)
    },1000);
     } else {  
      showSuccess(input);  
     }  
    });  
}

function checkNumber(input) {
    let numberCode = /^[0-9]{16}$/;
    if (numberCode.test(input.value.trim())) {  
        showSuccess(input); 
    }
    else if (input.value.trim() !== 16) {  
        showError(input, `Length must be 16`);  
    }
    else {  
        showError(input,'Wrong format, numbers only') 
    } 
};


function checkMonth(input){
    let monthCode = /(^[1-9]$)|(^[0-1][1-2]$)|(^0[1-9]$)/;
    if(monthCode.test(input.value.trim())){
        showSuccess(input)
    } 
    else {
        showError(input,"Can't be blank")
    }
}

function checkYear(input){
    let yearCode = /[0-2][0-5]|[1-9]/g ;
    if (yearCode.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input,"Wrong format")

    }
}

function checkCvc(input){
    let cvcCode = /^[0-9]{3}$/;
    if (cvcCode.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input,"Wrong format")
    }
}

form.addEventListener("submit", (e) => {  
    e.preventDefault();
    checkRequired([cardName, cardNumber, expiryMonth, expiryYear, cvcNumber]); 
    checkNumber(cardNumber) 
    checkMonth(expiryMonth);
    checkYear(expiryYear); 
    checkCvc(cvcNumber);

    confirmation.classList.remove('hide');
    form.classList.add('hide')

});



