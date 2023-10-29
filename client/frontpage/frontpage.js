
async function postData (event)  {
    event.preventDefault();
    console.log("posting password to session");
    // Default options are marked with *

    


    try {
        const response = await fetch('/api/rooms/make', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  }),
        });

        if (!response.ok) { 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        something = JSON.stringify(result);
        console.log(something);
        another = JSON.stringify("ok");
        if (something == another){
            window.location.href = "http://localhost:5000/hostroom";
        }
        //window.location.href = "http://localhost:3000/hostroom";
    } catch (error) {
        console.log("error");
    }
}


     // Parse the response as JSON and return it
    
  
 function redirectThing () {
    window.location.href = "http://localhost:5000/homepage";
};

     document.getElementById('myButton2').addEventListener('click', redirectThing);





document.getElementById('myButton').addEventListener('click', postData);