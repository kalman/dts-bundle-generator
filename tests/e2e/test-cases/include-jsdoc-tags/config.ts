import { TestCaseConfig } from '../../test-cases/test-case-config';

const config: TestCaseConfig = {
    output: {
        excludeJSDocTags: ["exclude"],
        includeJSDocTags: ["include", "alsoInclude"],
    },
};

export = config;
