import { TestCaseConfig } from '../test-case-config';

const config: TestCaseConfig = {
	errorMessage: "Saw banned const enum 'Foo'",
	output: {
		banConstEnum: true,
	},
};

export = config;
