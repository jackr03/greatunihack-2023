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
    } else if (!(isFinite(input))) {
        inputBox.value = "";
    } else {
        if (input !== e.key && isFinite(input)) {
            inputBox.value = input;
        }

        if (inputBox.nextElementSibling === null) {
            inputBox.blur();
        } else {
            inputBox.nextElementSibling.focus();
        }
    }
    
    if (Array.from(passcodeInputs).every(input => input.value.length > 0)) { // Placeholder code for debugging
        const userPasscode = [...passcodeInputs].map((input) => input.value).join('');
        //passcodeDiv.style.visibility = "visible";
        //userPasscodeField.innerText = userPasscode;
        postData(userPasscode);
    }
}



async function postData (userPasscode )  {
    event.preventDefault();
    console.log("posting password to session");
    console.log(userPasscode);
    // Default options are marked with *
    const response = await fetch('/homepage/tryjoin', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        // You can add more headers as needed
      },
      body: JSON.stringify({ room: userPasscode }), // Convert data to JSON format
    });
    try {
        const response = await fetch('/api/rooms/find', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ keyroom: userPasscode }),
        });

        if (!response.ok) { 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        something = JSON.stringify(result);
        console.log(something);
        another = JSON.stringify("ok");
        if (something == another){
            window.location.href = "http://localhost:5000/guestroom";
        }
        //window.location.href = "http://localhost:3000/guestroom";
    } catch (error) {
        console.log(error);
    }
}

