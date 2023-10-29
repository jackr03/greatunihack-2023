const passcode = document.querySelectorAll('.passcodeInput');
const passcodeDiv = document.getElementById('passcodeDiv');
const userPasscodeField = document.getElementById('userPasscode');

alert("hi");
passcode[0].focus();

passcode.forEach((input, index) => {
    input.addEventListener('keyup', function() {
        if (input.value){
            if (index === 3) {
                const userPasscode = [...passcode].map((input) => input.value).join('');
                passcodeDiv.style.visibility = "visible";
                userPasscodeField.innerText = userPasscode;
                // check if theres a room with that code
                postData(event);

            } else {
                passcode[index + 1].focus();
            }
        }
    });
});

async function postData (event)  {
    event.preventDefault();
    console.log("posting password to session");
    console.log(userPasscode.innerText);
    // Default options are marked with *
    const response = await fetch('/homepage/tryjoin', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json', // Specify the content type
        // You can add more headers as needed
      },
      body: JSON.stringify({ room: userPasscode.innerText }), // Convert data to JSON format
    });
    


    try {
        const response = await fetch('/api/rooms/find', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ keyroom: userPasscode.innerText }),
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
        console.log("error");
    }
}


     // Parse the response as JSON and return it
    
  
  

document.getElementById('myButton').addEventListener('click', postData);