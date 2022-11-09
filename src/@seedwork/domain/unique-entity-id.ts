import { v4 as uuid, validate as validateUUID } from 'uuid';
import { InvalidUuidError } from '../errors/invalid-uuid-error'
export class UniqueEntityId{

	constructor( public readonly id?: string){
		this.id = id || uuid();
		this.validate();
	}

	private validate(){
		const isValid = validateUUID(this.id);
		if(!isValid) throw new InvalidUuidError();
	}
}
