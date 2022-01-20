import { EntryPointConfig } from '../../../src/bundle-generator';

export type TestCaseConfig = {
	errorMessage?: string
} & Pick<
	EntryPointConfig,
	| 'libraries'
	| 'failOnClass'
	| 'output'
>;
