import { getCurrencies } from "./getCurrencies";


describe('getCurrencies' , () =>
{
    it('it should include the USD in the Currencies',() =>
    {
        expect(getCurrencies()).toContain('USD');
    });

    it('it should include the GDP in the Currencies',() =>
    {
        expect(getCurrencies()).toContain('GDP');
    });

    it('it should include the EUR in the Currencies',() =>
    {
        expect(getCurrencies()).toContain('EUR');
    });

    it('Non-existing Currencies',() =>
    {
        expect(getCurrencies()).not.toContain('CHF');
    });
});