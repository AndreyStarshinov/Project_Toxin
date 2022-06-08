$('.star').hover(function () {
    $(this).prevAll().addBack().addClass('star-full');
    $('.stars').find('.star').removeClass('star-full-last');
        
    }, function () {
        $(this).prevAll().addBack().removeClass('star-full');

    }
);

$('.star').on('click', function() {
    $(this).prevAll().addBack().addClass('star-full-last');
    number_star = $(this).attr('data-value');
})
