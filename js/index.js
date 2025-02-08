document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber = getFieldElementById('login-phone')
    const PinNumber =getFieldElementById('login-pin') 
    console.log(phoneNumber,PinNumber)

    if(phoneNumber === 1234 && PinNumber === 1234){
        console.log('You are logged in.');
        window.location.href = '/Payoo-Mobile-bank-project/home.html'
    }
    else{
        alert('Failed to logged in! Please try again.')
    }
})