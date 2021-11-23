import { ModuleClass, moduleVariable, moduleFunc, ModuleInterface, ModuleType } from './module';

class PrivateInputClass { }
const privateInputVariable = '123';
function privateInputFunc() { }
interface PrivateInputInterface { }
type PrivateInputType = string;

export class InputClass extends PrivateInputClass implements PrivateInputInterface { }
export const enum InputConstEnum { }
export const inputVariable: string = privateInputVariable + moduleVariable;
export enum InputEnum { }
export function inputFunc(): void {
	privateInputFunc();
	moduleFunc();
}
export interface InputInterface extends PrivateInputInterface, ModuleInterface { }
export type InputType = PrivateInputType & ModuleType;
export class InputModuleClass extends ModuleClass { }