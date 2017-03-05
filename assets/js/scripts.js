jQuery(document).ready( function() {
    jQuery('.rsvp-button').on('click', function (e) {
        var aHrefName = jQuery(this).attr('href').substring(1);
        var headingPos = jQuery('.wrapper').find('#' + aHrefName).offset().top;
        jQuery('html, body').not(':animated').animate({scrollTop: headingPos - 80 }, 1000);
        e.preventDefault();
    });

    jQuery("#kumsrules").on('click', function() {
        jQuery('.kumsrules').addClass('active');
        jQuery('.fader').addClass('active');
    });

    jQuery('.fader').on('click', function() {
        jQuery('.kumsrules').removeClass('active');
        jQuery('.fader').removeClass('active');
    });
        
    jQuery('.kumsrules').on('click', function() {
        jQuery('.kumsrules').removeClass('active');
        jQuery('.fader').removeClass('active');
    });
});
