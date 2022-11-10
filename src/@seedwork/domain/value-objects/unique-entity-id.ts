import { v4 as uuid, validate as validateUUID } from 'uuid';
import { InvalidUuidError } from '../../errors/invalid-uuid-error'
import { ValueObject } from './value-object';
export class UniqueEntityId extends ValueObject<string>{

	constructor(readonly id?: string){
		super(id || uuid());
		this.validate();
	}

	private validate(){
		const isValid = validateUUID(this.value);
		if(!isValid) throw new InvalidUuidError();
	}
}
