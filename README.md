# Scratch Starter Project - [Link](https://master--radhathakare-scratch-starter.netlify.app/)

## Overview

This project is a web application inspired by Scratch, where users can create and execute commands to manipulate a cat sprite on the screen. The project utilizes React, Redux, and various utilities to implement drag-and-drop functionalities, command parsing, and execution.

## Tech Stack
     ReactJs , Javascript
     
## Libraraies
    1. TailwindCSS
    2. Notistack
    3. Redux
    4. Material UI

## Run Locally

Clone the project

```bash
  git clone https://github.com/radhathakare/scratch-starter.git
```

Go to the project directory

```bash
  cd scratch-starter
```

Install dependencies

```bash
  npm install
```

## Components

### MidArea
MidArea is the main interactive area where users can drop and run commands. It uses Redux to manage the state of tabs and commands.

### Functionality:

reset: Resets the position and rotation of the cat sprite.
flattenCommands: Flattens the commands object into an array.
execute: Handles the execution of commands based on the clicked button (Run, Reset, Replay).
CatSprite
CatSprite represents the cat sprite that will be manipulated by the commands.

## Features
Drag and Drop Functions:

Drag and drop your favorite functions to the lists.
Move functions between lists.
Remove functions from the Mid Area by dragging and dropping outside the list.
Multiple Sprites:

Create as many sprites as you want.
Move the sprite around the Preview Area using the mouse.
Choose a sprite for which you want to execute your GUI program.
Program Creation:

Create as many program lists as you like.
Create long programs by adding multiple commands.

### Motion
Move in horizontal and vertical directions.
Rotate (Clockwise and Anti-Clockwise).
Go to coordinate.

### Looks
Make your sprite say some message.
Show message for a specified duration.
Add thinking ability to the sprite.
Think for a defined time.
Disappear thoughts.
Show sprite.
Hide sprite.

### Events
Broadcast a message.

### Control
Wait for a specified duration.
Repeat certain functions for a specified number of times.










