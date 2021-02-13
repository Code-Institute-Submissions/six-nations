// BUTTONS

$(".country-btn").click(function () {

    // Keep buttons active once clicked
    if ($(this).children("img").hasClass("country-btn-active")) {
        $(".country-btn").children("img").removeClass("country-btn-active");
    } else {
        $(".country-btn").children("img").removeClass("country-btn-active");
        $(this).children("img").addClass("country-btn-active");
    }
})

$(".btn").hover(function () {
    $(this).children().css("color", "rgba(0, 48, 43, 0.5)")
}, function () {
    $(this).children().css("color", "rgb(0, 48, 43)")
}
);
