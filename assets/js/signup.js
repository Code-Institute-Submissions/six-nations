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

