
  const form = document.getElementById('contact-form');
   let params = {
    
    
    // email: document.getElementsByClassName("emailaddress").value,
    message: document.getElementById("message").value,
    name: document.getElementById("name").value,

  };
   
   form.addEventListener("submit", function (e){
        e.preventDefault();
        const status = document.getElementById('notification')

       // const form = this; //store the form that was submitted in this variable
        emailjs.send("service_7f5qhhe",  "template_gqmg6jb", params)
         .then(function(response){
             console.log("SUCCESS!", response.status, response.text);
             const name = form.elements['name'].value;//name that's been submitted in form
             form.reset();

             status.textContent = `Thank you ${name} for contacting us! We'll get back to you shortly`;
             status.style.color = 'green';

             setTimeout(() => {
                 status.textContent = "";
             },
              2000
             );
            },
           function(error) {
            console.error(`FAILED...`, error);
            status.textContent = "Failed to send message. Please try again";
            status.style.color = 'red';
            
            setTimeout( () => {
                status.textContent = "";
            },
               2000
            );
           },
        )
    })