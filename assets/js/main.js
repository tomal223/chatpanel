(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // Sidebar Click Events
        $('.sidebar-open').click(function () {

            $('.sidebar , .sidebar-overlay').toggleClass('active');

        });
        $('.sidebar-overlay').click(function () {

            $('.sidebar , .sidebar-overlay').removeClass('active');

        });

         // Chat Panel Click Events
        $('.back-to-users').click(function () {

            $('.chat-panel-left').addClass('show');

        });
        $('.chat-panel-user-item').click(function () {

            $('.chat-panel-left').removeClass('show');

        });


    });


}(jQuery));