'use strict';

$(document).ready(function () {
    $('.nav-item a').on('click', function () {
        if ($(this).parent().find('.collapse').hasClass('show')) {
            $(this).parent().removeClass('submenu');
        } else {
            $(this).parent().addClass('submenu');
        }
    });
});
