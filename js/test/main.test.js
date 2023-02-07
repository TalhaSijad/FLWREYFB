import { main } from "../src/main";

describe('main', () => {
    let event;

    beforeEach(() => {
        event = {
            getSport: () => {
                return 'football';
            },
            getEventType: () => {
                return 'kickoff';
            },
            store: () => {
                return true;
            },
        }
    });

    describe('when an invalid sport is given in the event', () => {
        beforeEach(() => {
            event = {
                ...event,
                getSport: () => {
                    return 'tennis';
                }
            }
        });

        it('should throw an error', () => {
            try {
                main(event);
            } catch (ex) {
                expect(ex.toString()).toEqual('Error: The sport tennis isn\'t a valid sport in our system!');
            }
        });
    });

    describe('when an invalid event type is given in the event', () => {
        beforeEach(() => {
            event = {
                ...event,
                getEventType: () => {
                    return 'teamnews';
                }
            }
        });

        it('should throw an error', () => {
            try {
                main(event);
            } catch (ex) {
                expect(ex.toString()).toEqual('Error: The event type teamnews for football isn\'t a valid event type in our system!');
            }
        });
    });

    describe('if an error occurs whilst saving the event', () => {
        beforeEach(() => {
            event = {
                ...event,
                store: () => {
                    return false;
                }
            }
        });

        it('should throw an error', () => {
            try {
                main(event);
            } catch (ex) {
                expect(ex.toString()).toEqual('Error: An error occurred whilst saving the event!');
            }
        });
    });

    describe('if a valid event is received', () => {
        it('should store it successfully', () => {
            const result = main(event);
            expect(result).toEqual(undefined);
        });
    });
});
