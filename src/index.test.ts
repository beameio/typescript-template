import {describe, test, expect } from "@jest/globals"
import {handler} from "./index"

describe('index', () => {
	test('basic', async () => {
		expect(await handler(undefined)).toEqual('Hello World!')
	});
});
