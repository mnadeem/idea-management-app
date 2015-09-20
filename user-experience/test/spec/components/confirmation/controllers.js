'use strict';

describe('Controller:modalInstanceCtrl', function () {
	
	var counter;
	
	beforeEach(function() {
		counter = 0;
	});


	it('increments value', function () {
		counter ++;
		expect(counter).toBe(1);
	});
});
