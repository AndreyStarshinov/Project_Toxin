$( function() {
    $( ".slider" ).slider({
      range: true,
      min: 0,
      max: 50000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( ".slider" ).slider( "values", 0 ) +
      " - $" + $( ".slider" ).slider( "values", 1 ) );
  } );