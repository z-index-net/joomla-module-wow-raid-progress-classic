if (jQuery) {
    jQuery(document).ready(function ($) {
        $('.mod_wow_raid_progress_classic .header').click(function () {
            if ($(this).next('li').is(':visible')) {
                $(this).next('li').slideUp('slow');
            } else {
                $('.mod_wow_raid_progress_classic .npcs').slideUp('slow');
                $(this).next('li').slideToggle('slow');
            }
        });
    });
}