import { greet } from "./greet";

describe('greet' , () =>
{
    it('it should include the name in the message',() =>
    {
        expect(greet('Frank')).toContain('Frank');
    });
});

describe('greet test fail' , () =>
{
    it('it should include the name in the message',() =>
    {
        expect(greet('Bob')).toContain('Frank');
    });
});