![Screen Shot 2022-08-07 at 10 55 16 PM](https://user-images.githubusercontent.com/91972449/183348954-c0fc9f5b-998f-46f2-bd52-7cba0d5a11ff.png)

## Table of Contents
- [Introduction](#introduction)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Future Features](#future-features)
- [Organizational Resources](#organizational-resources)
- [Contributors](#contributors)

### Introduction
As my final project in Turing's Front End Engineering Module 3, we were given free reign to make a project of our choice. I chose to create an app that suggests serveral dishes depending on the beer that you select. 

Project spec can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)

My biggest win was the use of hooks, before I had only used class based components.

My biggest challenge was being able to create a favorite card with only the users selection, beer image, and beer name to show up while also not letting the user create two of the same favorite card. 

This app fetches data from [PunkAPI](https://api.punkapi.com/v2/)

### Deployment
Project can be viewed [here](https://brew-match.herokuapp.com/)

### Technologies
- JavaScript
- React (hooks and proptypes)
- React Router
- HTML
- CSS
- API fetch
- Cypress (E2E testing)

### Set Up
1. Clone this [repository](https://github.com/lourdesbnts/brew-match).
2. `cd` into the directory.
3. Run `npm install`.
4. To run tests, run `npm run cypress`.
5. Start the server by running `npm start` and view at http://localhost:8080/.
6. Enter `control + c` to stop the server at any time.

### Features
Viewing a selection of beers:

![](https://media.giphy.com/media/L7zlvHzBAxOWuj21F2/giphy.gif)

Clicking one that catches your eye, the card flips to give you options on what dish would go well with your choice of beer and you can save it:

![](https://media.giphy.com/media/FDDq5PLS84ZrLtLc0U/giphy.gif)

Going back and back home to view more beers and save more options:

![](https://media.giphy.com/media/1qxwbg8gfH19lLGton/giphy.gif)



### Future Features
- An alert saying you just saved a beer and food option.
- Styling the kegs to match the size of the bttles. As well as give stying to the buttons.
- Adding the detailed description of the beer to the back of the card. 
- Filtering beers by ABV.

### Organizational Resources
- [Excalidraw](https://excalidraw.com/) for design map and component architecture.

### Contributors
- [Lourdes Benites](https://www.linkedin.com/in/lourdesbenites/)



