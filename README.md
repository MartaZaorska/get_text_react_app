# Get Text Application

> Simple react app (PWA) - create groups of files, manage texts and get the text from the uploaded photo using OCR - optical character recognition.

## Table of contents

- [General info](#general-info)
- [Demo](#demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contact](#contact)

## General info

You can create, manage and delete file groups. When creating a file, two options are available: an empty file (text added manually) or choosing the image from which the text will be read ([Tesseract.js](https://tesseract.projectnaptha.com/) library). Data is saved in local memory - localStorage (warning: after clearing browser data, data was lost). You can combine all files in the group into one separate file. Two color schemes (dark and light) are available in the application.

Application also uses: react-router-dom, uuid, node-sass, classnames. An application created using the latest version of React. PWA application - manifest.json file and serviceWorker API.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo

See online my project: https://getext-react-app-martazaorska.netlify.com/

## Technologies

- react - version ^16.12.0
- react-router-dom - version ^5.1.2
- tesseract.js - version ^2.0.0-beta.2
- node-sass - version ^4.13.0
- uuid - version ^3.3.3
- classnames - version ^2.2.6

## Setup

Clone this repo to your desktop, next go to root directory and run npm install to install all dependencies.
When the dependencies are installed, you can run npm start to start the application (at http://localhost:3000/).

## Contact

Created by [Marta Zaorska](https://martazaorska.github.io/portfolio/).
