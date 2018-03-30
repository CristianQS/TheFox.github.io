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
 
