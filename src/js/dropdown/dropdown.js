// Dropdown-1

$('.dropdown-1__guests').on('click', function () {
    $('.dropdown-1__modal').toggle();
});

// block input placeholder
let guests = 0;
let adults = ["гость", "гостя", "гостей"];

// block plus and minus
$('.dropdown-1__amount-number').each(function () {
    let number = $('.dropdown-1__amount-number').text();
    if (number == 0) {
        $(this).siblings('.dropdown-1__amount-minus').addClass('dropdown__amount-minus-disabled');
    }
});

let funcMinus = function () {
    let number = $(this).siblings('.dropdown-1__amount-number').text();
    if (number > 0) {
        $(this).siblings('.dropdown-1__amount-number').text(--number);
    }
    if (number == 0) {
        $(this).addClass('dropdown__amount-minus-disabled');
    }
    $('.dropdown-1__input').prop('placeholder', function() {
        return `${--guests} ${funcGuests()}`;
    });
};

let funcPlus = function () {
    let number = $(this).siblings('.dropdown-1__amount-number').text();
    $(this).siblings('.dropdown-1__amount-number').text(++number);
    $(this).siblings('.dropdown-1__amount-minus').removeClass('dropdown__amount-minus-disabled');
    $('.dropdown-1__input').prop('placeholder', function() {
        return `${++guests} ${funcGuests()}`;
    });
};


let funcGuests = function() {
    if (guests <= 1) { return `${adults[0]}`; }
    else if (guests > 1 && guests < 5) { return adults[1]; }
    else { return adults[2]; }
    
};

$('.dropdown-1__amount-minus').on('click', funcMinus);
$('.dropdown-1__amount-plus').on('click', funcPlus);

/***************************************************************** */
/***************************************************************** */
/***************************************************************** */


// Dropdown-2

$('.dropdown-2__guests').on('click', function () {
    $('.dropdown-2__modal ').toggle();
});

// block input placeholder
let amount = 0;
let bedroom = ["спальня", "спальни", "спален"];
let amount2 = 0;
let bed = ["кровать", "кровати", "кроватей"];

// block plus and minus
$('.dropdown-2__amount-number').each(function () {
    let number = $('.dropdown-2__amount-number').text();
    if (number == 0) {
        $(this).siblings('.dropdown-2__amount-minus').addClass('dropdown__amount-minus-disabled');
    }
});

let funcMinus2 = function () {
    let number = $(this).siblings('.dropdown-2__amount-number').text();
    if (number > 0) {
        $(this).siblings('.dropdown-2__amount-number').text(--number);
    }
    if (number == 0) {
        $(this).addClass('dropdown__amount-minus-disabled');
    }
    $('.dropdown-2__input').prop('placeholder', function() {
        return `${--amount} ${funcBedroom()}, ${--amount2} ${funcBed()}...`;
    });
};

let funcPlus2 = function () {
    let number = $(this).siblings('.dropdown-2__amount-number').text();
    $(this).siblings('.dropdown-2__amount-number').text(++number);
    $(this).siblings('.dropdown-2__amount-minus').removeClass('dropdown__amount-minus-disabled');
    $('.dropdown-2__input').prop('placeholder', function() {
        return `${++amount} ${funcBedroom()}, ${++amount2} ${funcBed()}...`;
    });
};

let funcBedroom = function() {
    if (amount <= 1) { return `${bedroom[0]}`; }
    else if (amount > 1 && amount < 5) { return bedroom[1]; }
    else { return bedroom[2]; }
    
};

let funcBed = function() {
    if (amount2 <= 1) { return `${bed[0]}`; }
    else if (amount2 > 1 && amount2 < 5) { return bed[1]; }
    else { return bed[2]; }
    
};

$('.dropdown-2__amount-minus').on('click', funcMinus2);
$('.dropdown-2__amount-plus').on('click', funcPlus2);