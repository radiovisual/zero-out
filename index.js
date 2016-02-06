'use strict';

module.exports = function (value, opts) {
	if (isNaN(parseFloat(value))) {
		throw new TypeError('round-out expected a numerical string or number');
	}

	var originalType = typeof value === 'string' ? String : Number;

	// force value to a string
	value = value.toString();

	var decimreg = /\.[0-9]+/;
	var commareg = /,/g;

  // is this a negative number?
	var prefix = value[0] === '-' ? '-' : '';
	var hasCommas = commareg.test(value);

	// format to a string of numbers
	value = value.replace(/^-/, '').replace(decimreg, '').replace(commareg, '');

	opts = opts || {};
	opts.pad = opts.pad || '0';

	var parts = commafy(value).split(',');

	if (value.length < 4) {
		return originalType(prefix + smallRound(value));
	}

	var str = '';
	var bump = 0;

	if (opts.up) {
		bump = 1;
	} else if (opts.down) {
		bump = -1;
	}

	parts[0] = parseInt(parts[0], 10) + bump;

	parts.map(function (set, index, arr) {
		if (index === 0) {
			str += set;
		} else {
			str += set.replace(/[0-9]/g, opts.pad);
		}
		if (hasCommas && index + 1 !== arr.length) {
			str += ',';
		}
	});
	return originalType(prefix + str);
};

function smallRound(num) {
	var s = num[0];
	for (var i = 0; i < num.length - 1; i++) {
		s += '0';
	}
	return s;
}

function commafy(val) {
	var len = val.length - 1;

	var str = '';

	var commaindex = 0;
	for (var i = len; i >= 0; i--) {
		str = val[i] + str;
		if (commaindex === 2 && i !== 0) {
			str = ',' + str;
			commaindex = 0;
		} else {
			commaindex++;
		}
	}
	return str;
}
