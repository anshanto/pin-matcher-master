function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const pinInputField = document.getElementById('pin-field');
    pinInputField.value = pin;
});

document.getElementById('calc-body').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const numberInputField = document.getElementById('number-field');
    const previousNumberString = numberInputField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            numberInputField.value = '';
        }
        else if (number === '<') {
            const digits = previousNumberString.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            numberInputField.value = remainingDigits;
        }
    }
    else {
        const newNumber = previousNumberString + number;
        numberInputField.value = newNumber;
    }
});

document.getElementById('btn-submit').addEventListener('click', function () {
    const pinFieldId = document.getElementById('pin-field');
    const currentPin = pinFieldId.value;

    const numberFiledId = document.getElementById('number-field');
    const typeNumber = numberFiledId.value;

    const pinSuccessId = document.getElementById('pin-success');
    const pinFaildId = document.getElementById('pin-fail');
    if (currentPin === typeNumber) {
        pinSuccessId.style.display = 'block';
        pinFaildId.style.display = 'none';
    }
    else {
        pinFaildId.style.display = 'block';
        pinSuccessId.style.display = 'none';
    }
})