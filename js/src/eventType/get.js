import { eventTypes } from '../database/config';
import { handleError } from '../utils';

/**
 * Returns an event type from the database.
 * 
 * @param {string} sport 
 * @param {string} eventType
 * @returns string
 */
export function getEventType (sport, eventType) {
    const _eventType = eventTypes[sport].find(_eventType => _eventType == eventType);

    if (!_eventType) {
        handleError(`The event type ${eventType} for ${sport} was not found in our system!`);
    }

    return _eventType;
}

/**
 * Returns an array of event types against a specified sport.
 * 
 * @param {string} sport 
 * @returns string[]
 */
export function getEventTypes (sport) {
    const _eventTypes = eventTypes[sport];

    if (!_eventTypes) {
        handleError(`No event types for ${sport} were found in our system!`);
    }

    return _eventTypes;
}
