$(document).ready(function(){
    $('.ELSOne').click(function(){
        $('.editmodalOne').fadeOut(100);
        $('.editmodalThree').fadeIn(2000);
    });
    $('.ELSTwo').click(function(){
        $('.editmodalThree').fadeOut(0);
        $('.editmodalTwo').fadeIn(1500);
    });
    $('.ELSThree').click(function(){
        $('.editmodalTwo').fadeOut(500);
        $('.editmodalThree').fadeIn(2000);
    });
    $('.ELSFour').click(function(){
        $('.editmodalTwo').fadeOut(0);
        $('.edit-navBar').fadeOut(500);
        $('.editmodalOne').fadeIn(2000);
    });
    


});
