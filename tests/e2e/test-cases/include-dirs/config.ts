import { TestCaseConfig } from '../../test-cases/test-case-config';

const config: TestCaseConfig = {
    output: {
        includePaths: [
            'tests/e2e/test-cases/include-dirs/input.ts',
            'tests/e2e/test-cases/include-dirs/include',
        ],
    },
};

export = config;
