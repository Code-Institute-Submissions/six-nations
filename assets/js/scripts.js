const countries = ["england", "wales", "scotland", "ireland", "france", "italy"]
const cityInfo = {
    england: {
        city: "London",
        stadium: "Twickenham Stadium",
        capacity: "82,000",
        locationLink: "https://www.google.com/maps/place/Twickenham+Stadium/@51.4559591,-0.3436938,17z/data=!3m1!4b1!4m5!3m4!1s0x48760cedef6feaf3:0xa90e68c86cf99ca4!8m2!3d51.4559558!4d-0.3415051",
        addressLineOne: "200 Whitton Rd",
        addressLineTwo: "Twickenham",
        addressLineThree: "TW2 7BA",
        travelLink: "https://www.twickenhamstadium.com/getting-here",
        ticketLink: "https://www.eticketing.co.uk/rfu/Events/Index",
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
const hospitality = ["hotels", "restaurants", "bars"]
const hospitalityObject = {
    hotels: {
        name: "Hotels",
        icon: "fas fa-bed"
    },
    restaurants: {
        name: "Restaurants",
        icon: "fas fa-utensils"
    },
    bars: {
        name: "Pubs",
        icon: "fas fa-beer"
    }
}

const uppercaseFirstCharacter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

const countriesMap = () => {
    countries.map((country) => {
        //Build buttons
        $("#countries").append(
            `<div class="col-4 col-sm-2 country-btn-container">
                <button class="country-btn btn-hover" id="${country}"><img src="assets/images/flags/${country}-flag.png"
                        alt="${country} Flag" class="flag d-none" id="${country}-flag">${uppercaseFirstCharacter(country)}</button>
            </div>`);

        //Country Information
        $("#country-info-container").append(
            `<div class="information d-none" id="${country}-info">
             <div class="information-table">
                <h2>${uppercaseFirstCharacter(country)}</h2>
                <table>
                    <tr>
                        <th>City:</th>
                        <th class="pl-3">${cityInfo[`${country}`]["city"]}</th>
                    </tr>
                    <tr>
                        <td>Stadium:</td>
                        <td class="pl-3">${cityInfo[`${country}`]["stadium"]}</td>
                    </tr>
                    <tr>
                        <td>Capacity:</td>
                        <td class="pl-3">${cityInfo[`${country}`]["capacity"]}</td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td class="pl-3"><a href="${cityInfo[`${country}`]["locationLink"]}"
                                target="_blank">${cityInfo[`${country}`]["addressLineOne"]}<br>${cityInfo[`${country}`]["addressLineTwo"]}<br>${cityInfo[`${country}`]["addressLineThree"]}</a></td>
                    </tr>
                </table>
              
                <br>
                <a href="${cityInfo[`${country}`]["travelLink"]}" target="_blank" class="travel-link">Click
                    here for travel information</a>
                      </div>
                <div class="row no-gutters">
                    <div class="col">
                        <button class="small-btn">
                            <a href="${cityInfo[`${country}`]["ticketLink"]}" target="_blank"
                                class="btn-hover">Matchday Tickets</a>
                        </button>
                        <button class="btn small-btn">
                            <a href="#flights-booking" class="btn-hover">Book Flight</a>
                        </button>
                    </div>
                </div>
        </div>`
        );

        // Country Selector
        $(`#${country}`).click(function () {

            if (($(this).children("img")).hasClass("active")) {
                // removes flag and info when clicked off
                $(".country-btn").children("img").addClass("d-none").removeClass("active");
                $(".information").addClass("d-none");
                $("#map-container").addClass("d-none");
            } else {
                // replaces other country's info with selected country
                $(".country-btn").children("img").addClass("d-none").removeClass("active");
                $(".information").addClass("d-none");
                $(`#${country}-flag`).removeClass("d-none").addClass("active");
                $(`#${country}-info`).removeClass("d-none");
                $("#map-container").removeClass("d-none");
            }
        })
    });
}

const hospitalityMap = () => {
    hospitality.map((location) => {
        // build map selectors
        $(".hospitality-selectors").append(
            `<button class="selector text-center" id="${location}" data-toggle="tooltip" data-placement="top"
                    title="${hospitalityObject[`${location}`]["name"]}"><i class="${hospitalityObject[`${location}`]["icon"]}"></i></button>`
        )
    })
}

const facts = () => {
    const factsContent = [
        "The inside of the trophy was recently plated with gold to protect it from the corrosive properties of champagne. They even added a lip to aid drinking from it!",
        "The 6 Nations trophy is crafted from sterling silver, and has an estimated value of £55,000.",
        "England has won the most Grand Slams with 12, Wales second with 10 and France third with 9 respectively.",
        "Irelands Ronan O’Gara is the tournaments highest points scorer with 551 points while teammate Brian O’Driscoll is the highest try scorer with 25.",  
        "The 1977 Grand Slam-winning France team did not concede a try in their four matches.",   
        "Twickenham stadium will sell around 160,547 pints each match.",
        "The most points ever scored in one game is 80 by England against Italy in 2001."
    ]

    // Start cycle with last fact 
    $("#facts").html(factsContent[factsContent.length -1]);

    var factArrayIndex = -1;

    // Cycle through facts using a counter 
    var cycleFacts = () => {
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
    setInterval(cycleFacts, 5000);

}



$("document").ready(function () {

    countriesMap();
    hospitalityMap();
    facts();

    $('[data-toggle="tooltip"]').tooltip();

    // Add background color to dropdown menu
    $(".navbar-toggler").click(function () {
        $(".navbar").toggleClass("toggler-bg");
    })

    // https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click/18071231
    // add smooth scroll when country is selected
    $(".country-btn").click(function () {
        $('html,body').animate({
            scrollTop: $(".country-btn").offset().top - 50
        },
            'slow');
    })

})









// var factLoop = () => {
//     for (let i, i > )
// }


//   $("#slideshow > div:gt(0)").hide();

//     setInterval(function () {
//         $('#slideshow > div:first')
//             .fadeOut(500)
//             .next()
//             .fadeIn(500)
//             .end()
//             .appendTo('#slideshow');
//     }, 3000);