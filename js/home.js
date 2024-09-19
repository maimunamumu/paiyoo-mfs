// add money to the account
document.getElementById('btn-add-money')
   .addEventListener('click',function(event){
    event.preventDefault();
//    step-2
    const addMoneyInput = document.getElementById('input-add-money').value;
    // step-3 get the pin provide
    const pinNumberInput=document.getElementById('input-pin-number').value;
    console.log(addMoneyInput,pinNumberInput);
});