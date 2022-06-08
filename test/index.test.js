import test from 'ava';
import reverser from '../src/index';

test('reverse', t => {
  t.is(reverser('hello'), 'olleh', 'Strings are not matching');
  t.is(reverser('goodbye'), 'eybdoog');
});