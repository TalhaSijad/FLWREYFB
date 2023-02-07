import { getSport, getSports } from '../../src/sport/get';

describe('get', () => {
    describe('getSport', () => {
        describe('when a valid sport is given', () => {
            it('should return the sport from the database', () => {
                const result = getSport('football');
                expect(result).toEqual('football');
            });
        });
    
        describe('when an invalid sport is given', () => {
            it('should throw an error', () => {
                try {
                    getSport('cricket');
                    // Should never hit this line
                    expect(true).toBe(false);
                } catch (ex) {
                    expect(ex.message).toEqual('No sport called cricket was found in our system!');
                }
            });
        });
    });

    describe('getSports', () => {
        it('should return all sports from the database', () => {
            const result = getSports();
            expect(result).toEqual(['football']);
        });
    });
});
