$(document).ready(function(){

    function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }    
    
    $('.mail_input').keyup(function(){
        if (isEmail($(this).val()))
            $('.mail_send').addClass('mail_send_show')
        else
            $('.mail_send').removeClass('mail_send_show')
    });
    
     $('.mail_send').on('click', function(e){
           $.ajax({
               type: 'POST',
               url: '/ballride_style/subscribe',
               data: {
                   email: $('.mail_input').val()
               },
               success: function(msg) {
                   $('.email_emphasized').html(msg);
                   $('.subscription_complete').addClass('mail_send_show');
                   $('.mail_input').val('');
                   $('.mail_send').removeClass('mail_send_show');
                   setTimeout(function(){
                       $('.subscription_complete').removeClass('mail_send_show');
                   }, 2000);
               }
           });
     });
    
    $('.mail_input').keydown(function(e){
        if ((e.keyCode == '13') && ($('.mail_send').hasClass('mail_send_show'))) {
            $('.mail_send').trigger('click');
        }
    });
});