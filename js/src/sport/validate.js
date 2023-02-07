import { getSport } from './get';
import { handleError } from '../utils';

/**
 * Validates a sport using the records in the database.
 * 
 * @param {string} sport 
 * @returns void
 */
export function validateSport (sport) {
    try {
        const _sport = getSport(sport);
        
        if (_sport) {
            // We don't want to return anything here as this function is a void.
            return;
        }
    } catch (ex) {
        handleError(`The sport ${sport} isn't a valid sport in our system!`);
    }
}
