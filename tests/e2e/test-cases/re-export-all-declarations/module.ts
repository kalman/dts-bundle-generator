class PrivateModuleClass { }
const privateModuleVariable = '123';
function privateModuleFunc() { }
interface PrivateModuleInterface { }
type PrivateModuleType = string;

export class ModuleClass extends PrivateModuleClass implements PrivateModuleInterface { }
export const enum ModuleConstEnum { }
export const moduleVariable: string = privateModuleVariable;
export enum ModuleEnum { }
export function moduleFunc(): void {
    privateModuleFunc();
}
export interface ModuleInterface extends PrivateModuleInterface { }
export type ModuleType = PrivateModuleType;
