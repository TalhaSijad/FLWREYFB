import { validateSport } from '../../src/sport/validate';

describe('validate', () => {
    describe('when a valid sport is given', () => {
        it('should return nothing', () => {
            const result = validateSport('football');
            expect(result).toEqual(undefined);
        });
    });

    describe('when an invalid sport is given', () => {
        it('should throw an error', () => {
            try {
                validateSport('tennis');
                // Should never hit this line
                expect(true).toBe(false);
            } catch (ex) {
                expect(ex.message).toEqual('The sport tennis isn\'t a valid sport in our system!');
            }
        });
    });
});