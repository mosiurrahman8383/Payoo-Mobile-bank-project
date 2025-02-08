function getFieldElementById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;

}
// function getTextElementById(id){
//     const inputValue = document.getElementById(id).innerText;
//     const inputNumber = parseFloat(inputValue)
//     return inputNumber;

// }

function getTextElementById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
    // return inputValue;
}

function showSectonById(id){
    // hide all the section
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-form-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    //show the section with the provide id as perameter
    document.getElementById(id).classList.remove('hidden');
}