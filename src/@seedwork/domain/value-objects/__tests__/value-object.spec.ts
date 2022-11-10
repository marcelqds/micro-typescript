import { ValueObject } from '../value-object';

class StubValueObject extends ValueObject{
    
}

describe('ValueObject Unit Tests', () => {
    it('should set value', () => {
        let vo = new StubValueObject('string value');
        expect(vo.value).toBe('string value');
        
        vo = new StubValueObject({prop1: 'value1'});
        expect(vo.value).toStrictEqual({prop1: 'value1'});
    });

    it('should convert to a string', () => {
        let date = new Date();
        let arrange = [
            // {received: null, expected: "null"},
            // {received: undefined, expected: "undefined"},
            {received: "", expected: ""},
            {received: "fake test", expected: "fake test"},
            {received: 0, expected: "0"},
            {received: 2, expected: "2"},
            {received: 3, expected: "3"},
            {received: true, expected: "true"},
            {received: false, expected: "false"},
            {received: date, expected: date.toString()},
            {received: {prop4: 'value4'}, expected: JSON.stringify({prop4: 'value4'})},            
        ];

        arrange.forEach( (arr) => {
            let vo = new StubValueObject(arr.received);
            expect(vo + "").toBe(arr.expected);
        });

    });

    it('immutable', () => {
        const vo = new StubValueObject({prop: 'value1', nested: {prop2: new Date()}});        
    });

    it('should must be a immuatable objet', () => {
        let obj = {prop1: 'pro1', deep:{prop2:'prop2', nested:{ prop3: "prop3", date: new Date()}}};
        
        const vo = new StubValueObject(obj);

        
        expect(() => { vo.value.prop1 = 'prop2'})
        .toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'");


        expect(() => vo.value.deep.prop2 = "prop2")
        .toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'");

        expect(vo.value.deep.nested.date).toBeInstanceOf(Date);
    });


});