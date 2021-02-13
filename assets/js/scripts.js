// $(document).ready(function () {
function openPopUp() {
    document.getElementById("form-display").style.display = "block";
}

function closePopUp() {
    document.getElementById("form-display").style.display = "none";
}


$(".country-btn").click(function () {
    // Keep buttons active once clicked
    $(".country-btn").children("img").removeClass("country-btn-active");
    $(this).children("img").addClass("country-btn-active");


    // var country = $(this).attr("id")
    // var newCountry = `.${country}`

    // console.log(newCountry);

})

// });
