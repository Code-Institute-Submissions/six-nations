const cities = [
    {
        country: "england",
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
    {
        country: "wales",
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
    {
        country: "scotland",
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
    {
        country: "ireland",
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
    {
        country: "france",
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
    {
        country: "italy",
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
]

// Capitalise first character of string
function uppercaseFirstCharacter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function countriesMap() {
    cities.map(function (cityInfo) {
        //Build buttons
        $("#countries").append(
            `<div class="col-4 col-sm-2 country-btn-container">
                <button class="country-btn btn-hover" id="${cityInfo.country}"><img src="assets/images/flags/${cityInfo.country}-flag.png"
                        alt="${cityInfo.country} Flag" class="flag d-none" id="${cityInfo.country}-flag">${uppercaseFirstCharacter(cityInfo.country)}</button>
            </div>`);

        //Country Information
        $("#country-info-container").append(
            `<div class="information d-none" id="${cityInfo.country}-info">
             <div class="information-table">
                <table>
                    <tr>
                        <th>City:</th>
                        <th class="pl-3">${cityInfo.city}</th>
                    </tr>
                    <tr>
                        <td>Stadium:</td>
                        <td class="pl-3">${cityInfo.stadium}</td>
                    </tr>
                    <tr>
                        <td>Capacity:</td>
                        <td class="pl-3">${cityInfo.capacity}</td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td class="pl-3"><a href="${cityInfo.locationLink}"
                                target="_blank">${cityInfo.addressLineOne}<br>${cityInfo.addressLineTwo}<br>${cityInfo.addressLineThree}</a></td>
                    </tr>
                </table>
              
                <br>
                <a href="${cityInfo.travelLink}" target="_blank" class="travel-link">Click
                    here for travel information</a>
                      </div>
                <div class="row">
                    <div class="col">
                        <button class="small-btn">
                            <a href="${cityInfo.ticketLink}" target="_blank"
                                class="btn-hover">Matchday Tickets</a>
                        </button>
                        <button class="small-btn">
                            <a href="https://www.skyscanner.net/" target="_blank" class="btn-hover">Book Flights</a>
                        </button>
                    </div>
                </div>
        </div>`
        );

        // Country Selector click function
        $(`#${cityInfo.country}`).click(function () {

            if (($(this).children("img")).hasClass("active")) {
                // removes flag and info when clicked off
                $(".country-btn").children("img").addClass("d-none").removeClass("active");
                $(".information").addClass("d-none");
                $("#map-container").addClass("d-none");
            } else {
                // replaces other country's info with selected country
                $(".country-btn").children("img").addClass("d-none").removeClass("active");
                $(".information").addClass("d-none");
                $("#country-info-title").text(uppercaseFirstCharacter(cityInfo.country))
                $(`#${cityInfo.country}-flag`).removeClass("d-none").addClass("active");
                $(`#${cityInfo.country}-info`).removeClass("d-none");
                $("#map-container").removeClass("d-none");
            }
        });
    });
}

function hospitalityMap() {
    const hospitality = [
        {
            name: "Hotels",
            icon: "fas fa-bed"
        },
        {
            name: "Restaurants",
            icon: "fas fa-utensils"
        },
        {
            name: "Bars",
            icon: "fas fa-beer"
        }
    ]
    hospitality.map((location) => {
        // build map selectors
        $(".hospitality-selectors").append(
            `<button class="selector text-center" id="${location}" data-toggle="tooltip" data-placement="top"
                    title="${location.name}"><i class="${location.icon}"></i></button>`
        );
    });
}

function facts() {
    const factsContent = [
        "The inside of the trophy was recently plated with gold to protect it from the corrosive properties of champagne. They even added a lip to aid drinking from it!",
        "The 6 Nations trophy is crafted from sterling silver, and has an estimated value of £55,000.",
        "England has won the most Grand Slams with 12, Wales second with 10 and France third with 9 respectively.",
        "Ireland's Ronan O’Gara is the tournaments highest points scorer with 551 points while teammate Brian O’Driscoll is the highest try scorer with 25.",
        "The 1977 Grand Slam-winning France team did not concede a try in their four matches.",
        "Twickenham stadium will sell around 160,547 pints each match.",
        "The most points ever scored in one game is 80 by England against Italy in 2001."
    ];

    // Display last fact when page loads
    $("#facts").html(factsContent[factsContent.length - 1]);

    var factArrayIndex = -1;

    // Cycle through facts using a counter 
    function cycleFacts() {
        ++factArrayIndex;
        if (factArrayIndex >= factsContent.length) {
            factArrayIndex = 0;
        }
        // Add facts to html 
        $("#facts").fadeOut(1000, function () {
            $("#facts").fadeIn(1000).html(factsContent[factArrayIndex]);
        });
    }
    // Set Interval between facts 
    setInterval(cycleFacts, 9000);
}



$("document").ready(function () {

    countriesMap();
    hospitalityMap();
    facts();

    // Bootstrap function for tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add background color to dropdown menu
    $(".navbar-toggler").click(function () {
        $(".navbar").toggleClass("toggler-bg");
    });

    // if facts are out of view when country selected, the window will scroll down 
    $(".country-btn").click(function () {
        if (window.scrollY < 250) {
            $('html,body').animate({
                scrollTop: $(".country-btn").offset().top - 50
            },
                500);
        }
    });
});