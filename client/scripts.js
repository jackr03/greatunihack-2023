const passcode = document.querySelectorAll('.passcodeInput');
const passcodeDiv = document.getElementById('passcodeDiv');
const userPasscodeField = document.getElementById('userPasscode');

passcode[0].focus();

passcode.forEach((input, index) => {
    input.addEventListener('keyup', function() {
        if (input.value){
            if (index === 3) {
                const userPasscode = [...passcode].map((input) => input.value).join('');
                passcodeDiv.style.visibility = "visible";
                userPasscodeField.innerText = userPasscode;
            } else {
                passcode[index + 1].focus();
            }
        }
    });
});