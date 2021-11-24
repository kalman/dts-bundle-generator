export class InputClass {
	method() { }
	/** @protected */ protectedMethod() { }
	/** @private */ privateMethod() { }
	/** @excludeTag */ excludeMethod() { }
	/** @protected @excludeTag */ protectedExcludeMethod() { }
}

export interface InputInterface {
	method(): void;
	/** @protected */ protectedMethod(): void;
	/** @private */ privateMethod(): void;
	/** @excludeTag */ excludeMethod(): void;
	/** @protected @excludeTag */ protectedExcludeMethod(): void;
}

export type InputType = {
	prop: number;
	/** @private */ privateProp: number;
	/** @excludeTag */ excludeProp: number;
}
