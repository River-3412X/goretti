$().ready(function(){
    gsap.timeline().from(".download",0.5,{x:150},"-=0.5")
    .from(".whats",0.5,{x:150},"-=0.5")
    .to(".download",0,{delay:1,x:94,transition: "transform 0.8s ease"})
    .to(".whats",0,{x:87,transition: "transform 0.8s ease"});


    $(".navbar a").each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var element= $($(this).attr("href")).offset().top;
            $("html, body").animate({
                scrollTop: element-56
            }, 500);
        });
    });

    $(window).scroll(function(){
        if($("#barra").offset().top== $(this).scrollTop() ){
            $("#title_nav").html("María Goretti");
        }
        else{
            $("#title_nav").html("");
        }
    });
});