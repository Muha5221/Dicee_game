# Dicee Game 🎲

A simple web-based dice game that randomly rolls two dice when the page is refreshed, simulating a two-player dice game.

## How to Play

1. Open the `index.html` file in your web browser
2. Refresh the page to "roll" the dice
3. The player with the higher dice roll wins that round

## Features

- Random dice roll simulation for two players
- Responsive design
- Visual dice display
- Simple and intuitive interface

## Files Structure
dicee-game/
├── index.html # Main HTML file

├── styles.css # CSS styles

├── index.js # JavaScript functionality

├── images/ # Dice images

│ ├── dice1.png

│ ├── dice2.png

│ ├── dice3.png

│ ├── dice4.png

│ ├── dice5.png

│ └── dice6.png

└── README.md # This file



## Technologies Used

- HTML5
- CSS3
- JavaScript

## How It Works

1. When the page loads or is refreshed:
   - JavaScript generates two random numbers between 1-6
   - The corresponding dice images are displayed for each player
   - The higher number wins (though the winner isn't currently displayed)

## Customization

You can easily customize this game by:

- Changing the dice images in the `images` folder
- Modifying the styling in `styles.css`
- Adding more players by duplicating the dice divs and updating the JavaScript

## Credits

- Original design inspiration from App Brewery
- Google Fonts used: Indie Flower and Lobster

## License

This project is open-source and available for anyone to use or modify.
