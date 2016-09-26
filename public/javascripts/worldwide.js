$(document).ready(function() {
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.fingers_tutorial').html('<img src="../images/fingers_tutorial_mobile.png">');
        $('.fingers_tutorial').addClass('fingers_tutorial_mobile');
    }
    
});