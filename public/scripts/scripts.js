$(document).ready(function() {

    //scroll navbar
    $(window).scroll(function() {
        if ($(document).scrollTop() > 2) {
            $("#navbar").addClass("bg-gradient-1");
        } else {
            $("#navbar").removeClass("bg-gradient-1");
        }
    });


    //toggle menu
    $("#toggle").click(function() {
        if ($(this).hasClass("Toggle")) {
            $("#text-nav").removeClass("hidden")
            $(".Toggle").toggleClass("Toggle Toggle-Close")
            $("#navbar").addClass("bg-gradient-1")
        } else if ($(this).hasClass("Toggle-Close")) {
            $("#text-nav").addClass("hidden")
            $(".Toggle-Close").toggleClass("Toggle-Close Toggle")
            $("#navbar").removeClass("bg-gradient-1")
        }
    });

    //Accordion for FAQ'S
    $('.collapse').click(function() {
        if ($(this).find("div.title").find('span.close').hasClass("hidden")) {
            $(this).find("div.title").find('span.open').addClass("hidden");
            $(this).find("div.title").find('span.close').removeClass("hidden");
            $(this).find("div.content").removeClass("hidden");
        } else {
            $(this).find("div.title").find('span.close').addClass("hidden");
            $(this).find("div.title").find('span.open').removeClass("hidden");
            $(this).find("div.content").addClass("hidden");

        }
    });

});