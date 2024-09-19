// add money to the account
document.getElementById('btn-add-money')
   .addEventListener('click',function(event){
    event.preventDefault();
//    step-2
    const addMoneyInput = document.getElementById('input-add-money').value;
    // step-3 get the pin provide
    const pinNumberInput=document.getElementById('input-pin-number').value;
    console.log(addMoneyInput,pinNumberInput);
    // step-4 verify current money
    if(pinNumberInput==='1234'){
        console.log('adding money to your account');
        // step-5 
        // get the current  balance
        const balance=document.getElementById('account-balance').innerText;
        console.log(balance);
        // step-6 add money
        const addMoneyNumber=parseFloat(addMoneyInput);
        const balanceNumber=parseFloat(balance);
        const newBalance=addMoneyNumber+balanceNumber;
    //    step-7 add new balance
       document.getElementById('account-balance').innerText= newBalance;
    }
    else{
        alert('failed to add money!please try again')
    }
});