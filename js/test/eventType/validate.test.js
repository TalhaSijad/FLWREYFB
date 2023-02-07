import { validateEventType } from '../../src/eventType/validate';

describe('validate', () => {
    describe('when a valid event type is given', () => {
        it('should return nothing', () => {
            const result = validateEventType('football', 'kickoff');
            expect(result).toEqual(undefined);
        });
    });

    describe('when an invalid event type is given', () => {
        it('should throw an error', () => {
            try {
                validateEventType('football', 'teamnews');
                // Should never hit this line
                expect(true).toBe(false);
            } catch (ex) {
                expect(ex.message).toEqual('The event type teamnews for football isn\'t a valid event type in our system!');
            }
        });
    });
});