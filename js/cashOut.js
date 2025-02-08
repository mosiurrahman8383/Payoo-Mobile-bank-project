document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutInput = getFieldElementById('cash-out-input');
    const PinNumber = getFieldElementById('cash-out-pin-number');

    console.log(cashOutInput, PinNumber)

    if (isNaN(cashOutInput)) {
        alert('Failed to cash out.');
        return;
    }


    if (PinNumber === 1234) {
        const balance = getTextElementById('account-balance');

        if (cashOutInput > balance) {
            alert("You don't have enough balance.")
            return;
        }

        const newBalance = balance - cashOutInput;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        
            <h3 class="text-2xl font-bold text-white p-4">CASH OUT</h3>
            <p class="pl-4 pr-4 pb-4">${cashOutInput} TK Withdraw and New Balance is: ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div)
    }
    else {
        alert('Failed to cash out money! Please try again.')
    }

})
