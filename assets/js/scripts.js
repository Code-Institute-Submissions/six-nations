$("document").ready(function(){
    $(".information").hide(); //hide all information when page loads
})

// Add background color to dropdown menu
$(".navbar-toggler").click(function() {
    
    if ($(".navbar").hasClass("toggler-bg")) {
        $(".navbar").removeClass("toggler-bg");
    } else {
        $(".navbar").addClass("toggler-bg");
    }
})

$(".country-btn").click(function () {

    // Keep buttons active once clicked
    if ($(this).children("img").hasClass("country-btn-active")) {
        $(".country-btn").children("img").removeClass("country-btn-active");
    } else {
        $(".country-btn").children("img").removeClass("country-btn-active");
        $(this).children("img").addClass("country-btn-active");
    }

    // Hide/show country's information/map
    $(".information").hide();

    var selectedCountry = `#${this.id}-info`;

    $(selectedCountry).show();
})

// 



