'use strict';

// MODULES //

var test = require( 'tape' );
var isNegativeZero = require( 'validate.io-negative-zero' );
var abs = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof abs === 'function', 'main export is a function' );
	t.end();
});

test( 'the function computes the absolute value of a scalar', function test( t ) {
	t.equal( abs( -2 ), 2, 'negative number' );
	t.equal( abs( 3 ), 3, 'positive number' );
	t.equal( abs( 0 ), 0, 'zero' );
	t.equal( abs( -Math.PI ), Math.PI, 'pi' );
	t.end();
});

test( 'the function computes the absolute value of negative zero', function test( t ) {
	t.equal( abs( -0 ), 0, 'zero' );
	t.equal( isNegativeZero( abs( -0 ) ), false, 'not negative zero' );
	t.end();
});

test( 'the function computes the absolute value of infinity', function test( t ) {
	var pinf = Number.POSITIVE_INFINITY;
	var ninf = Number.NEGATIVE_INFINITY;

	t.equal( abs( pinf ), pinf, 'positive infinity' );
	t.equal( abs( ninf ), pinf, 'negative infinity' );
	t.end();
});

test( 'if provided a `NaN`, the function returns `NaN`', function test( t ) {
	var v = abs( NaN );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

