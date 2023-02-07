import { getEventType, getEventTypes } from '../../src/eventType/get';

describe('get', () => {
    describe('getEventType', () => {
        describe('when a valid event type is given', () => {
            it('should return the event type from the database', () => {
                const result = getEventType('football', 'kickoff');
                expect(result).toEqual('kickoff');
            });
        });
    
        describe('when an invalid event type is given', () => {
            it('should throw an error', () => {
                try {
                    getEventType('football', 'teamnews');
                    // Should never hit this line
                    expect(true).toBe(false);
                } catch (ex) {
                    expect(ex.message).toEqual('The event type teamnews for football was not found in our system!');
                }
            });
        });
    });

    describe('getEventTypes', () => {
        describe('when a valid sport is given', () => {
            it('should return all the event types for that sport', () => {
                const result = getEventTypes('football');
                expect(result).toEqual(['kickoff', 'goal', 'yellowcard', 'redcard', 'penalty', 'halftime', 'fulltime', 'extratime', 'freekick', 'corner']);
            });
        });
    
        describe('when an invalid sport is given', () => {
            it('should throw an error', () => {
                try {
                    getEventTypes('hockey');
                    // Should never hit this line
                    expect(true).toBe(false);
                } catch (ex) {
                    expect(ex.message).toEqual('No event types for hockey were found in our system!');
                }
            });
        });
    });
});
