// Passcode box
const passcodeInputs = document.querySelectorAll('.passcodeInput');
const passcodeDiv = document.getElementById('passcodeDiv');
const userPasscodeField = document.getElementById('userPasscode');

passcodeInputs[0].focus();

passcodeInputs.forEach(input => {
    input.addEventListener('paste', passcodePasteHandler)
    input.addEventListener('keyup', passcodeRegularHandler);
});


function passcodePasteHandler(e) {
    // Code for passcode handler when pasting
    alert();
}

function passcodeRegularHandler(e) {
    const inputBox = e.target;
    let input = inputBox.value;
    
    if (e.key === "Backspace") {
        inputBox.previousElementSibling.focus();
        inputBox.previousElementSibling.value = "";
    } else {
        if (input !== e.key) {
            inputBox.value = e.key;
        }

        if (inputBox.nextElementSibling === null) {
            inputBox.blur();
        } else {
            inputBox.nextElementSibling.focus();
        }
    }

    if (Array.from(passcodeInputs).every(input => input.value.length > 0)) { // Placeholder code for debugging
        const userPasscode = [...passcodeInputs].map((input) => input.value).join('');
        passcodeDiv.style.visibility = "visible";
        userPasscodeField.innerText = userPasscode;
    }
}