import { getEventType } from './get';
import { handleError } from '../utils';

/**
 * Validates an event type using the records in the database.
 * 
 * @param {string} sport 
 * @param {string} eventType 
 * @returns void
 */
export function validateEventType (sport, eventType) {
    try {
        const _eventType = getEventType(sport, eventType);

        if (_eventType) {
            // We don't want to return anything here as this function is a void.
            return;
        }
    } catch (ex) {
        handleError(`The event type ${eventType} for ${sport} isn't a valid event type in our system!`);
    }
}
