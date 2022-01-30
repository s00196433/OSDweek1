import {compute} from './compute';

describe ('compute' , () =>
{
    it('should return 0 if the input is negative',() =>
    {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    
    it('should return 1 if the input is positive',() =>
    {
        const result = compute(1);
        expect(result).toBe(2);
    });

    it('fail test',() =>
    {
        const result = compute(3);
        expect(result).toBe(10);
    });


    it('to Be Greater Than',() =>
    {
        const result = compute(0);
        expect(result).toBeGreaterThan(0);
    });

    it('to Be Less Than',() =>
    {
        const result = compute(0);
        expect(result).toBeLessThan(2);
    });

});