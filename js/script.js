$(document).ready(function(){
    console.log("What are you looking for here? -BR");

    $('#mainSegment img').on('click', function () {
        window.open("https://www.instagram.com/p/B7vcShEHR0Z/", "_blank");
    });

    $('#secondSegment img:first-child').on('click', function () {
        window.open("https://youtu.be/VVoj79yAbdw/", "_blank");
    });

    $('#secondSegment img:last-child').on('click', function () {
        window.open("https://youtu.be/EwVPTDBfHTY", "_blank");
    });
});