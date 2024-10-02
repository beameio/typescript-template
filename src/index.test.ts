import {describe, test, expect } from "@jest/globals"
import {sum} from '../src';

describe('index', () => {
	test('basic', async () => {
		test('Returns correct value', () =>{
			expect(sum(2, 3)).toEqual(5)
		})
	});
});
