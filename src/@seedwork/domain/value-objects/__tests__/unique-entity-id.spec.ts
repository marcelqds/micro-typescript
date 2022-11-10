import { UniqueEntityId } from '../unique-entity-id'
import { InvalidUuidError } from '../../../errors/invalid-uuid-error';

const spyValidateMethod = () => jest.spyOn(UniqueEntityId.prototype as any, 'validate');

describe('UniqueEntityId Unit Tests', () => {

	//0 - jest.config.ts
	//clearMocks: true
	
	//1 - case
	/*beforeEach(() => {
		jest.clearAllMocks();
	})*/

	//2 - case
	//const validateSpy = jest.spyOn(...)
	//beforeEach( () => validateSpy.mockClear());
	
	it('should throw error when uuid is invalid', () => {		
		const validateSpy = spyValidateMethod();
		const uniqueEntity = () => new UniqueEntityId('faker-id');
		expect(uniqueEntity).toThrow(new InvalidUuidError());
		expect(validateSpy).toHaveBeenCalled();
	});


	it('should accept a uuid passed in constructor', () => {
		const validateSpy = spyValidateMethod();
		const uuid = '5d74045a-a0b0-4a46-8189-42e64a2669ed';
		const uniqueEntity = new UniqueEntityId(uuid);
		expect(uniqueEntity.value).toBe(uuid);
		expect(validateSpy).toHaveBeenCalled();
	});


	it('should not send uuid passed in constructor', () => {
		const validateSpy = spyValidateMethod();
		const uniqueEntityId = new UniqueEntityId();
		expect(uniqueEntityId.value).not.toBeNull();
		expect(uniqueEntityId.value).not.toBeUndefined();
		expect(validateSpy).toHaveBeenCalled();
	});
	
});
