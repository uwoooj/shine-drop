
$(function(){
    $('.scroll_top').on('click',function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},1000);
    });


    $(window).scroll(function(){
        var curr = $(this).scrollTop();
  
        if(curr > $(this).height()){
          $('.scroll_top').fadeIn()
        }else{
          $('.scroll_top').fadeOut()
  
        }
      })
  
      $(window).trigger('scroll')




      $(".second").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: ".character" });
    });

      $(".third").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: ".story" });
    });

      $(".four").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: ".qna" });
    });

      $(".five").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: ".hub" });
    });

      $(".six").click(function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: "footer" });
    });



    $(".ham").click(function (e) {
        e.preventDefault();

        $(".h-menu").addClass("on");
        $('.ham').addClass("on");
        $("body").addClass("hidden");
    });
   

    $(".close").click(function (e) {
        e.preventDefault();

        $(".h-menu").removeClass("on");
        $('.ham').removeClass("on");
        $("body").removeClass("hidden");
        
    });



  });