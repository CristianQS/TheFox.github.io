function dropdownNav(){
    if($('.collapse').hasClass("active")){
        $('.collapse').removeClass("active");
    }else{
        $('.collapse').addClass("active");
    }
    console.log("hola");
}

function dropdown(id) {
    $(".span--dropdown p").hide();
    $(".wrapper__image--dropdown img").hide();
    if($(id).is("#Creative")){
        $(".wrapper__image--dropdown img").show();
    }
    $(id).show();
}
 
function initMap() {
    var uluru = { lat: 51.7467789, lng: -1.3131937 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}