import { UniqueEntityId } from "../value-objects/unique-entity-id";
import { Entity } from "./entity";
import {validate as validateUUID} from 'uuid';

interface Props{
    props1: string;
    props2: number;
}

class StubEntity extends Entity<Props>{}

describe('Entity Unit Tests', () => {
    it('should set props and id', () => {
        const arrange = {props1: "Opa", props2: 56};
        const entity = new StubEntity(arrange);
        expect(entity.props).toStrictEqual(arrange);
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
        expect(entity.id).not.toBeNull();
        expect(validateUUID(entity.id)).toBeTruthy();
    });

    it('should accept a valid uuid', () => {
        const arrange = {props1: "Opa", props2: 56};
        const uniqueEntityId = new UniqueEntityId();
        const entity = new StubEntity(arrange,uniqueEntityId);
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
        expect(entity.id).toBe(uniqueEntityId.value);
    });

    it('should convert a entity to a Javascript Object', () => {
        const arrange = {props1: "Opa", props2: 56};
        const uniqueEntityId = new UniqueEntityId();
        const entity = new StubEntity(arrange,uniqueEntityId);
        expect(entity.toJSON()).toStrictEqual({id: uniqueEntityId.value,...arrange});
    });
});