export class InputClass {
	method() { }
	/** @include */ includeMethod() { }
}

/** @include */
export class InputClass2 {
	method() { }
	/** @exclude */
	excludeMethod() { }
}

/** @include */
export type InputType = {
	/** @alsoInclude */ prop: number;
}

/** @include */
export namespace Namespace {
	export class NamespaceClass {
		method() { }
	}
}
