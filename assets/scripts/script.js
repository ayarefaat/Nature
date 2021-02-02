$(function(){
    $(document).scroll(function(){
        $(".navbar").toggleClass('scrolled' , $(this).scrollTop() > $(".navbar").height())
        // $('.navbar-light .navbar-brand').addClass('scroll')
    });
});