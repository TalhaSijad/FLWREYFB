import { sports } from '../database/config';
import { handleError } from '../utils';

/**
 * Returns a sport from the database.
 * 
 * @param {string} sport
 * @returns string
 */
export function getSport (sport) {
    const _sport = sports.find(_sport => sport == _sport);

    if (!_sport) {
        handleError(`No sport called ${sport} was found in our system!`);
    }

    return _sport;
}

/**
 * Returns all the sports from the database.
 * 
 * @returns string[]
 */
export function getSports () {
    if (!sports) {
        handleError(`No sports were found in our system!`);
    }

    return sports;
}
