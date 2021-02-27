function sendMail(signupForm){
    emailjs.send("service_z6cxmcd","template_puux2vl", {
        "email": signupForm.email.value,
        "home_team": signupForm.homeTeam.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response); 
            $("#confirm").removeClass("invisible");
            setTimeout(function(){ 
                $("#confirm").addClass("invisible"); }, 3000);
        },
        function(error) {
            console.log("FAILED", error);
            $("#error").removeClass("d-none");
            setTimeout(function(){ 
                $("#error").addClass("d-none"); }, 3000);
        });
        return false;
}

// https://www.w3resource.com/javascript/form/email-validation.php
// function validateEmail(email) 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address! Please try again.")
//     return (false)
// }