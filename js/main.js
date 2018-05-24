/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        if ( !window.event.ctrlKey && !window.event.shiftKey) {
            var $anchor = $(this);
            var $target = $('#' + $anchor.data('target'));
            if ( $target.length > 0 ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: ($target.offset().top - 50)
                }, 1250, 'easeInOutExpo');
            }
        }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // Open modal for Thumbnail record items
    $('a.record-link').bind('click', function(event) {
        if ( !window.event.ctrlKey && !window.event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();

            $($(this).data('target')).modal();
        }
    });
})(jQuery); // End of use strict
