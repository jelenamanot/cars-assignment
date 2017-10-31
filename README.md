# Car Race

Application for car racing made with React. 

## Content
- [Installation](#installation)
- [Running](#running)
- [About](#about)
  - [Technologies & dependencies used](#technologies--dependencies-used)
  - [App Structure](#app-structure)
  - [Style Guide](#style-guide)
  - [User Story](#user-story)

## Installation

This app requires [Node.js](https://nodejs.org/) to run.

First step is either to:
```
$ git clone https://github.com/jelenanesic/cars-assignment.git
```
or download zip.

Then:
```
$ cd cars-assignment
$ npm install
```

## Running

Start app with:
```
$ npm run build
```

## About

### Technologies & dependencies used
- React
- Redux
- Axios
- SCSS
- Bootstrap

### App structure

For starting files I used my [React & SCSS starter](https://github.com/jelenanesic/react-scss-starter).

Application has different parts. Each part is located in separate component. For example, there are header, search, single car component etc. 

Every component has its own folder in which are all files that component is using (SCSS, child components and the component itself).
There is also utils folder that stores files for fetching data and storing images.

All components are imported in one, main App component, that is rendered to index.js.

### Style Guide

I followed my own style guide, based on [AirBnb's React style guide](https://github.com/airbnb/javascript/tree/master/react).

**Naming convention**
- React Components - PascalCase
- Styles - camelCase
- Functions - camelCase
- Variables - camelCase
- Actions, reducers, utils - camelCase

### User story

- After opening application, cars are rendered from API. 
- There are car boxes with basic information (name and picture), but if mouse is over box, box flips and shows additional information, such as car speed and car description. When mouse moves from box again, user sees just basic information.
- By clicking on the car box, user selects that car for race. 
- When car is selected, box is flipped and darkened, so that user knows which box is selected.
- There is Search field, where user can search cars by name.
- In down part of the page, there is scale that is separated into 10 parts. 
- There are also traffic lights & speed limiting signs.
- After user has selected cars, they appear in race scale. 
- There must be three cars selected in order to start racing. Also, duration of race must be specified in order to start the race.
- User can reset selected cars, by clicking Reset button that's next to Start button. After clicking reset button, all selected cars are deselected, and input, start and reset button can't be visible, until some car is selected again.
- After selecting three cars, and specifying race duration, user clicks start button and cars start racing. 
- They race based on their speed. When race is finished, every car gets a medal - gold, silver or bronze.
