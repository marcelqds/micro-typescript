import { deepFreeze } from "./object";

describe('object Unit Tests', () => {
    it('should not freeze a scalar value', () => {
        let str = deepFreeze('a');
        expect(typeof str).toBe('string');

        let bool = deepFreeze(false);        
        expect(typeof bool ).toBe('boolean');

        bool = deepFreeze(true);
        expect(typeof bool).toBe('boolean');

        let num = deepFreeze(5);
        expect(typeof num).toBe('number');

    });


    it('should must be a immuatable obj', () => {
        let obj = deepFreeze({prop1: 'pro1', deep:{prop2:'prop2', nested:{ prop3: "prop3", date: new Date()}}});
        
        expect(() => { (obj as any).prop1 = 'prop2'})
        .toThrow("Cannot assign to read only property 'prop1' of object '#<Object>'");

        expect(() => obj.deep.prop2 = "prop2")
        .toThrow("Cannot assign to read only property 'prop2' of object '#<Object>'");

        expect(obj.deep.nested.date).toBeInstanceOf(Date);
    });
});