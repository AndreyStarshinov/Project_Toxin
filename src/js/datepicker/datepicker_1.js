var picker_1 = new Lightpick({
    field: document.getElementById('datepicker_1'),
    secondField: document.getElementById('datepicker_2'),
    singleDate: false,
    repick: true,
    onSelect: function(start, end){
        var str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
    }
});