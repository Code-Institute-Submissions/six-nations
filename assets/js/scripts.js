$(document).ready(function () {
    
    $(".country-btn").click(function () {
        $(".country-btn").children("img").removeClass("opacity");
        $(this).children("img").addClass("opacity");
    })
});