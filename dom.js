
  const form = document.getElementById("contact-form");
  let parms = {
    
    phoneNumber: document.getElementsByClassName("phonenumber").value,
    email: document.getElementsByClassName("emailaddress").value,
    message: document.getElementById("message").value,
    name: document.getElementById("name").value

  }
    

    function sendMail (){
        emailjs.send("service_7f5qhhe",  "template_gqmg6jb", parms).then(alert("Email sent"));
    }

   
    form.addEventListener("submit", function (event){
      document.getElementById.apply("notification").textContent = ` The following information will be submitted ${email}; ${phoneNumber}; ${message}`;
    });

    
