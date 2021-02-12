$(document).ready(function () {
    
    $(".country-btn").click(function () {
        $(".country-btn").children("img").removeClass("country-btn-active");
        $(this).children("img").addClass("country-btn-active");
    })
});