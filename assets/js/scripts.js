const countries = ["england", "wales", "scotland", "ireland", "france", "italy"]

const countriesMap = () => {
    countries.map((country) => {
        $("#countries").append(
            `<div class="col-4 col-sm-2 country-btn-container">
                <button class="country-btn btn-hover" id="${country}"><img src="assets/images/flags/${country}-flag.png"
                        alt="${country} Flag" class="flag d-none">${country.charAt(0).toUpperCase() + country.slice(1)}</button>
            </div>`);
    })
}

const countrySelector = (function () {
    $(".country-btn").click(function () {

        if ($(this).children("img").hasClass("d-none")) {
            $(".country-btn").children("img").addClass("d-none"),
                $(this).children("img").removeClass("d-none");
        } else {
            $(".country-btn").children("img").addClass("d-none");
        }

        $(".information").hide();
        var selectedCountry = `#${this.id}-info`;
        $(selectedCountry).show();
    });
})


$("document").ready(function () {
    $(".information").hide(); //hide all information when page loads

    countriesMap();
    countrySelector();
})


// Add background color to dropdown menu
$(".navbar-toggler").click(function () {

    if ($(".navbar").hasClass("toggler-bg")) {
        $(".navbar").removeClass("toggler-bg");
    } else {
        $(".navbar").addClass("toggler-bg");
    }
})



//     // Hide/show country's information/map
$(".information").hide();

var selectedCountry = `#${this.id}-info`;

$(selectedCountry).show();





