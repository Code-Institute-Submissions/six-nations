const countries = ["england", "wales", "scotland", "ireland", "france", "italy"]
const info = {
    england: {
        city: "London",
        stadium: "Twickenham Stadium",
        capacity: "82,000",
        locationLink: "https://www.google.com/maps/place/Twickenham+Stadium/@51.4559591,-0.3436938,17z/data=!3m1!4b1!4m5!3m4!1s0x48760cedef6feaf3:0xa90e68c86cf99ca4!8m2!3d51.4559558!4d-0.3415051",
        addressLineOne: "200 Whitton Rd",
        addressLineTwo: "Twickenham",
        addressLineThree: "TW2 7BA",
        travelLink: "https://www.twickenhamstadium.com/getting-here",
        ticketLink: "https://www.eticketing.co.uk/rfu/Events/Index"
    },
    wales: {
        city: "Cardiff",
        stadium: "Principality Stadium",
        capacity: "74,500",
        locationLink: "https://www.google.com/maps/place/Principality+Stadium/@51.4782118,-3.1848228,17z/data=!3m1!4b1!4m5!3m4!1s0x486e1cb1dfc6fd81:0x39e2d294964328e9!8m2!3d51.4782085!4d-3.1826341",
        addressLineOne: "Westgate Street",
        addressLineTwo: "Cardiff",
        addressLineThree: "CF10 1NS",
        travelLink: "https://www.principalitystadium.wales/information/about-the-venue/",
        ticketLink: "https://www.eticketing.co.uk/principalitystadium/"
    },
    scotland: {
        city: "Edinburgh",
        stadium: "Murrayfield Stadium",
        capacity: "67,144",
        locationLink: "https://www.google.com/maps/place/Murrayfield+Stadium/@55.9422462,-3.2431168,17z/data=!3m1!4b1!4m5!3m4!1s0x4887c65417739d0d:0x8d2f9e9f766f3af5!8m2!3d55.9422432!4d-3.2409281",
        addressLineOne: "Roseburn Street",
        addressLineTwo: "Edinburgh",
        addressLineThree: "EH12 5PJ",
        travelLink: "https://www.scottishrugby.org/tickets-and-events/getting-to-bt-murrayfield",
        ticketLink: "https://www.scottishrugby.org/tickets-and-events/"
    },
    ireland: {
        city: "Dublin",
        stadium: "Aviva Stadium",
        capacity: "51,700",
        locationLink: "https://www.google.com/maps/place/Aviva+Stadium/@53.335235,-6.2306456,17z/data=!3m1!4b1!4m5!3m4!1s0x48670ec268eb8af9:0xe37e998e72032668!8m2!3d53.3352318!4d-6.2284569",
        addressLineOne: "Lansdowne Road",
        addressLineTwo: "Ballsbridge",
        addressLineThree: "D04 K5F9",
        travelLink: "https://www.avivastadium.ie/getting-here",
        ticketLink: "https://www.irishrugby.ie/ireland/tickets/"
    },
    france: {
        city: "Paris",
        stadium: "Stade de France",
        capacity: "81,338",
        locationLink: "https://www.google.com/maps/search/stade+de+france/@48.9222385,2.351427,16z/data=!3m1!4b1",
        addressLineOne: "93200",
        addressLineTwo: "Saint-Denis",
        addressLineThree: "Paris",
        travelLink: "https://www.stadefrance.com/en/practical-information/how-to-get-there",
        ticketLink: "https://www.stadefrance.com/en/tickets"
    },
    italy: {
        city: "Rome",
        stadium: "Stadio Olimpico",
        capacity: "72,698",
        locationLink: "https://www.google.com/maps/place/Stadio+Olimpico/@41.9327487,12.4539724,16.89z/data=!3m1!5s0x132f60bc30367e65:0xc82548f4e51c3a58!4m8!1m2!2m1!1sstadio+olimpico!3m4!1s0x132f60bc3db30885:0x791c21ce91960617!8m2!3d41.934077!4d12.454725",
        addressLineOne: "Viale dei Gladiatori",
        addressLineTwo: "00135",
        addressLineThree: "Roma",
        travelLink: "https://www.eventtravel.com/olympic-stadium-rome",
        ticketLink: "https://ticket.federugby.it/"
    }
}


const countriesMap = () => {
    countries.map((country) => {
        $("#countries").append(
            `<div class="col-4 col-sm-2 country-btn-container">
                <button class="country-btn btn-hover" id="${country}"><img src="assets/images/flags/${country}-flag.png"
                        alt="${country} Flag" class="flag d-none">${country.charAt(0).toUpperCase() + country.slice(1)}</button>
            </div>`);
        //Country Information
        $("#information-container").append(
            `<div class="row no-gutters information d-none" id="${country}-info">
            <div class="col-12 col-lg-6">
                <h1>${country.charAt(0).toUpperCase() + country.slice(1)}</h1>
                <table>
                    <tr>
                        <th>City:</th>
                        <th>${info[`${country}`]["city"]}</th>
                    </tr>
                    <tr>
                        <td>Stadium:</td>
                        <td>${info[`${country}`]["stadium"]}</td>
                    </tr>
                    <tr>
                        <td>Capacity:</td>
                        <td>${info[`${country}`]["capacity"]}</td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td><a href="${info[`${country}`]["locationLink"]}"
                                target="_blank">${info[`${country}`]["addressLineOne"]}<br>${info[`${country}`]["addressLineTwo"]}<br>${info[`${country}`]["addressLineThree"]}</a></td>
                    </tr>
                </table>
                <br>
                <a href="${info[`${country}`]["travelLink"]}" target="_blank" class="travel-link">Click
                    here for travel information</a>
                <div class="row no-gutters">
                    <div class="col">
                        <button class="small-btn">
                            <a href="${info[`${country}`]["ticketLink"]}" target="_blank"
                                class="btn-hover">Matchday Tickets</a>
                        </button>
                        <button class="btn small-btn">
                            <a href="#flights-booking" class="btn-hover">Book Flight</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <h3>This is where the map will go</h3>
            </div>
        </div>`
        );
    });
}

// When a Country selector is clicked
const countrySelector = (function () {
    $(".country-btn").click(function () {

        if ($(this).children("img").hasClass("d-none")) {
            $(".country-btn").children("img").addClass("d-none"),
                $(this).children("img").removeClass("d-none");
        } else {
            $(".country-btn").children("img").addClass("d-none");
        }

        var selectedCountry = `#${this.id}-info`;
        $("#information-container").children().addClass("d-none");
        $(selectedCountry).removeClass("d-none");
    });
})


$("document").ready(function () {

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