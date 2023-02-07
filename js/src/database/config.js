/**
 * In the real world, this array would be it's own database table called Sports.
 * The value of 'football' would be a value from a column called 'Sport'
 */
 export const sports = [ 'football' ];

 /**
  * In the real world, this array would be it's own database table called EventTypes.
  * The value of 'football' would derive from a separate column called 'Sport'
  * The event types associated with 'football' would be an array in a separate column called 'EventTypes'
  */
 export const eventTypes = {
    football: [
        'kickoff',
        'goal',
        'yellowcard',
        'redcard',
        'penalty',
        'halftime',
        'fulltime',
        'extratime',
        'freekick',
        'corner',
    ],
}
