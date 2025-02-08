document.getElementById('btn-add-money-features').addEventListener('click',function(){
    console.log('add money clicked')
   showSectonById('add-money-section');
})

document.getElementById('btn-cash-out-features').addEventListener('click',function(){
    showSectonById('cash-out-form-section');
})

document.getElementById('btn-transaction-features').addEventListener('click',function(){
    showSectonById('transaction-section');
})