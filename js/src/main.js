import { validateSport } from './sport/validate';
import { validateEventType } from './eventType/validate';
import { storeEvent } from './database/create';

/**
 * The main function which handles the processing of an event.
 * 
 * In the real world, this could be deployed as an AWS Lambda function attached to
 * an AWS API Gateway REST API. That way, the event streaming service could call that API,
 * which would hit this Lambda. This would process the event almost immediately.
 * 
 * @param {EventInterface} event 
 */
export const main = event => {
    const sport = event.getSport();
    const eventType = event.getEventType();
    /**
     * Using the fail-fast programming practise. The first thing we'd want to check
     * is if the sport is valid in our system. If it isn't, exit the function.
     */
    validateSport(sport);
    validateEventType(sport, eventType);
    // Now that all checks have passed, we've verified the event is valid so save it in the database.
    storeEvent(event);
}
