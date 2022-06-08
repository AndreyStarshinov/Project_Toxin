$('.checkbox-list__dropdown').on('click', function () {
    $('.checkbox-list__dropdown-modal ').toggle();
    if ($('.checkbox-list-arrow').hasClass('checkbox-list-arrow-rotate')) {
        $('.checkbox-list-arrow').removeClass('checkbox-list-arrow-rotate');
    } else {$('.checkbox-list-arrow').addClass('checkbox-list-arrow-rotate');}
});
