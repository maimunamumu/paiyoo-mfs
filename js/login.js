// console.log('button click file added');
// step-1(set event handler)
document.getElementById('btn-login').addEventListener('click',function(event){
    // step-2 prevent default behavior(prevent reloading browser)
    event.preventDefault();
    // STEP-3 get the phone number
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin').value;
    console.log(phoneNumber,pinNumber);
    // bad way to validate
    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log('you are login');
        window.location.href = '/home.html';
    
    }
    else{
     alert('wrong phone number and pin')
    }

    
})