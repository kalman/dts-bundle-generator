export const enum NonDirectlyExportedConstEnum {
	FooBar = 0
}

export const enum DirectlyReExportedConstEnum {
	BarFoo = 0
}

export const enum DirectlyExportedConstEnum {
	FirstItem = "const enum",
	SecondItem = 1
}

export declare const foo = NonDirectlyExportedConstEnum.FooBar;


export {};
