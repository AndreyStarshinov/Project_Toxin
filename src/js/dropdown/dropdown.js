$('.dropdown__guests').on('click', function () {
    $('.dropdown__modal ').toggle();
});

// block input placeholder
let guests = 0;
let adults = ["гость", "гостя", "гостей"];

// block plus and minus
$('.dropdown__amount-number').each(function () {
    let number = $('.dropdown__amount-number').text();
    if (number == 0) {
        $(this).siblings('.dropdown__amount-minus').addClass('dropdown__amount-minus-disabled');
    }
});

let funcMinus = function () {
    let number = $(this).siblings('.dropdown__amount-number').text();
    if (number > 0) {
        $(this).siblings('.dropdown__amount-number').text(--number);
    }
    if (number == 0) {
        $(this).addClass('dropdown__amount-minus-disabled');
    }
    $('.dropdown__input').prop('placeholder', function() {
        return `${--guests} ${funcGuests()}`;
    });
};

let funcPlus = function () {
    let number = $(this).siblings('.dropdown__amount-number').text();
    $(this).siblings('.dropdown__amount-number').text(++number);
    $(this).siblings('.dropdown__amount-minus').removeClass('dropdown__amount-minus-disabled');
    $('.dropdown__input').prop('placeholder', function() {
        return `${++guests} ${funcGuests()}`;
    });
};


let funcGuests = function() {
    if (guests <= 1) { return `${adults[0]}`; }
    else if (guests > 1 && guests < 5) { return adults[1]; }
    else { return adults[2]; }
    
};



$('.dropdown__amount-minus').on('click', funcMinus);
$('.dropdown__amount-plus').on('click', funcPlus);
