/**
 * Handles the exception processing by throwing an error.
 * 
 * @param {Error} error 
 * @param {string} functionName 
 * @param {string} integration 
 */
export function handleError (error, functionName, integration) {
    /**
     * Side note: the parameters functionName and integration can be used for
     * sending data to 3rd party debugging services like AWS CloudWatch or Newrelic.
     * 
     * We could use them as a way of grouping data. For example, if we send events to Newrelic with
     * these paramaters, we can create dashboards using those events to illustrate traffic within those functions.
     * 
     * More information can be found here: https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/ 
     */
    throw new Error(error.message ?? error);
}
