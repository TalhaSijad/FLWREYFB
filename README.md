Sky Sports Technical Task
=========================

Sky Sports have been given access to a new event stream for various sports, providing updates on key events during matches, tournaments, etc. One of your colleagues has already defined a data type (`EventInterface`) and the definition of a storage utility (`EventStorageInterface`) to develop against.

You have been asked to create a system that will process and store a single concrete `Event` object that is of the type `EventInterface`. Initially, we are only interested in `football` events. Other members of your team will immediately create processors for other sports, so you need to think about how your code will be able to be reused if at all.

Develop on the basis that an `Event` will be injected into your system, although how it is injected is up to you. Your system should be able to correctly decide whether an event should be processed, or discarded.

The sport we wish to process is `football`.  The event types you'll need to process are as follows:

- `kickoff`
- `goal`
- `yellowcard`
- `redcard`
- `penalty`
- `halftime`
- `fulltime`
- `extratime`
- `freekick`
- `corner`

Your unit tests should verify that your implementation is correct.

You have only been asked to develop the event processor implementation, and **NOT implement the interfaces**. You do not need to know any implementation detail of Events or EventStorage - work with the contract provided below.

#### Requirements

- Given a single Event (`EventInterface`), determine whether or not to process it, and use EventStorage (`EventStorageInterface`) accordingly.
- Remember this is specific to a sport and a few event types. However, your colleagues are likely to reuse your code for other sports/event types.
- You are only developing the class(es) to handle the solution, *NOT* the glue code (e.g. controller) that ties it all together. You will give your solution to another colleague, who will tie all the objects together.
- Unit tests should verify whether your solution works or not.

#### Interfaces

Your code should be configured to work with the following interfaces.

```
  +----------------------------+
  | EventInterface             |
  +----------------------------+
  | + getSport(): string       |
  | + getEventType(): string   |
  +----------------------------+
```

```
  +-------------------------------------+
  | EventStorageInterface               |
  +-------------------------------------+
  | + store(EventInterface event): bool |
  +-------------------------------------+
```

### Setup

You can choose to tackle this task in either JavaScript or PHP, the 2 main languages we work with. There are directories below this file to add your code in your submission. There are sample package manager configs to get going.

#### Prerequisites

For PHP:

* PHP 7.4+
* Composer

```
composer install
```

For JavaScript:

* nodejs 16
* npm

```
npm install
```

#### Running the tests:

PHP:

```
    composer run test
```

JavaScript:

```
    npm test
```
