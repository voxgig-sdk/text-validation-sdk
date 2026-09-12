import { TextValidationEntityBase } from '../TextValidationEntityBase';
import type { TextValidationSDK } from '../TextValidationSDK';
import type { Control } from '../types';
import type { Validation, ValidationLoadMatch } from '../TextValidationTypes';
declare class ValidationEntity extends TextValidationEntityBase<Validation> {
    constructor(client: TextValidationSDK, entopts: any);
    make(this: ValidationEntity): ValidationEntity;
    load(this: any, reqmatch?: ValidationLoadMatch, ctrl?: Control): Promise<ValidationEntity>;
}
export { ValidationEntity };
