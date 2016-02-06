import test from 'ava';
import fn from './index.js';

test('expect a number or string', t => {
	t.throws(() => {
		fn({});
	});
});

test('round out numbers', t => {
	t.is(fn(123), 100);
	t.is(fn(99), 90);
	t.is(fn(9), 9);
	t.is(fn('1,234.04'), '1,000');
	t.is(fn('1,234,567.04'), '1,000,000');
	t.is(fn('1,234,567,890'), '1,000,000,000');
	t.is(fn('1234567890'), '1000000000');
	t.is(fn('123,456,789,000.12'), '123,000,000,000');
	t.is(fn(12345678901234567), 12000000000000000);
	t.is(fn(12345678901234567.99), 12000000000000000);
});

test('string returns a string', t => {
	t.is(typeof fn('123'), 'string');
});

test('number returns a number', t => {
	t.is(typeof fn(123), 'number');
});

test('allows negative values', t => {
	t.is(fn(-123), -100);
	t.is(fn(-1234), -1000);
	t.is(fn('-1234'), '-1000');
});

test('allows custom pad', t => {
	t.is(fn('9999', {pad: 'x'}), '9xxx');
});

test('allows round up pad', t => {
	t.is(fn('9999', {up: true}), '10000');
});

test('allows round down', t => {
	t.is(fn('9999', {down: true}), '8000');
});

test('allows round up with custom pad', t => {
	t.is(fn('9999', {up: true, pad: 'X'}), '10XXX');
});
