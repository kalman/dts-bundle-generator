export class Class {
	// TODO: Test ECMAScript private fields as well.

	private privateProperty = 42;

	publicMethod() {
		this.privateMethod(this.privateProperty);
	}

	private privateMethod(p: number) { }
}
