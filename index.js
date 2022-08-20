function caseNumberPlusMinus(inputField, isIncrease){
    let caseNumberField = document.getElementById(inputField);
    let caseNumberFieldValue = parseInt(caseNumberField.value);
    console.log(caseNumberFieldValue);
    let newCaseNumber;
    if (isIncrease == true) {
        newCaseNumber = caseNumberFieldValue + 1;
        console.log(caseNumberFieldValue); 
    }
    else{
        if(caseNumberFieldValue > 0){
            newCaseNumber = caseNumberFieldValue - 1;
            console.log(caseNumberFieldValue); 
        }
        else{
            newCaseNumber = 0;
        }
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
    
}
function price(caseNumber, priceShowField){
    let caseTotalPrice;
    if(priceShowField == 'case-price-field'){
        caseTotalPrice = caseNumber * 59;
    }
    else{
        caseTotalPrice = caseNumber * 1219;
    }
    
    console.log(caseTotalPrice);
    let casePriceField = document.getElementById(priceShowField);
    casePriceField.innerText = caseTotalPrice; 
    return caseTotalPrice;
}
function subTotal() {
    let iphonePrice = parseInt(document.getElementById('black-price-field').innerText);
    let casePrice = parseInt(document.getElementById('case-price-field').innerText)
    let subTotal = casePrice + iphonePrice;
    document.getElementById('sub-total').innerText = subTotal;

    // Calculate Tax
    let taxAmount = (subTotal *0.1).toFixed(1);
    document.getElementById('tax-amount').innerText = taxAmount;

    // Calculate Total
    console.log(typeof(subTotal));
    console.log(typeof(taxAmount));
    let totalAmount = subTotal + parseFloat(taxAmount);
    document.getElementById('final-total').innerText = totalAmount;  

}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    let caseNumber = caseNumberPlusMinus('case-number-field',true);
    let casePrice = price(caseNumber, 'case-price-field');
    subTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    let caseNumber = caseNumberPlusMinus('case-number-field',false);
    let casePrice = price(caseNumber, 'case-price-field');
    subTotal();
    
})
document.getElementById('btn-black-plus').addEventListener('click', function(){
    let caseNumber = caseNumberPlusMinus('black-number-field',true);
    let casePrice = price(caseNumber, 'black-price-field');;
    subTotal();
})

document.getElementById('btn-black-minus').addEventListener('click', function(){
    let caseNumber = caseNumberPlusMinus('black-number-field',false);
    let casePrice = price(caseNumber, 'black-price-field');;
    subTotal();
})
