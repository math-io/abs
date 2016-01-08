'use strict';

var abs = require( './../lib' );

var rand;
var sign;
var i;
for ( i = 0; i < 100; i++ ) {
	rand = Math.round( Math.random() * 100 ) - 50;
	sign = Math.random();
	if ( sign < 0.5 ) {
		sign = -1;
	} else {
		sign = 1;
	}
	console.log( 'Before: %d. After: %d.', rand, abs( rand ) );
}
