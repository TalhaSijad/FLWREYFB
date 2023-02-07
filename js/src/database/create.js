import { handleError } from '../utils';

/**
 * Stores the event in the database.
 * 
 * @param {EventInterface} event 
 */
export function storeEvent (event) {
    /**
     * I wasn't sure how I could use the store() method from the EventStorageInterface
     * when nothing in the main() function uses that interface.
     */
    const result = event.store(event);

    // If this is false, something went wrong.
    if (!result) {
        handleError('An error occurred whilst saving the event!');
    }
}
