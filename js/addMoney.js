document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoneyInput = getFieldElementById('add-money-input');
    const PinNumber = getFieldElementById('pin-number')
    console.log(addMoneyInput, PinNumber);

    if(PinNumber === 1234){
        console.log('Added Your Money.');
        const balance = getTextElementById('account-balance')
        console.log(balance);

        const newBalance = addMoneyInput + balance;
        console.log(newBalance);

        document.getElementById('account-balance').innerText =newBalance;

        //add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoneyInput} TK. and New Balance is: ${newBalance} TK.`;
        console.log(p);

        //should be a common fucntion
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Failed to add money! Please try again.')
    }
})