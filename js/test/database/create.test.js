import { storeEvent } from "../../src/database/create";

describe('create', () => {
    let event;

    beforeEach(() => {
        event = {
            store: () => {
                return true;
            },
        };
    });

    describe('if an error occurs whilst saving the event', () => {
        beforeEach(() => {
            event = {
                store: () => {
                    return false;
                },
            };
        });

        it('should throw an error', () => {
            try {
                storeEvent(event);
            } catch (ex) {
                expect(ex.toString()).toEqual('Error: An error occurred whilst saving the event!');
            }
        });
    });

    it('should successfully save the event in the database', () => {
        const result = storeEvent(event);
        expect(result).toEqual(undefined);
    });
});
