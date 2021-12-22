declare class PrivateModuleClass {
}

interface PrivateModuleInterface {
}

declare type PrivateModuleType = string;

export declare class ModuleClass extends PrivateModuleClass implements PrivateModuleInterface {
}

export interface ModuleInterface extends PrivateModuleInterface {
}

export declare type ModuleType = PrivateModuleType;

declare class PrivateInputClass {
}

interface PrivateInputInterface {
}

declare type PrivateInputType = string;

export declare class InputClass extends PrivateInputClass implements PrivateInputInterface {
}

export declare const enum InputConstEnum {
}

export declare const inputVariable: string;

export declare enum InputEnum {
}

export declare function inputFunc(): void;

export interface InputInterface extends PrivateInputInterface, ModuleInterface {
}

export declare type InputType = PrivateInputType & ModuleType;

export declare class InputModuleClass extends ModuleClass {
}
