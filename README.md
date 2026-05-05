# Library App

A vanilla JavaScript web application for searching and saving your favorite books, powered by the Open Library API.

## Live Demo:

[Library App - Click here to see in action!](https://innowise-challenge.vercel.app/)

## Key Features

- Search millions of books by title or author.
- Save books to a personal Favorites list (persisted via `localStorage`).
- Interactive UI with live-updating states.
- Built-in Dark Mode theme management.

## Task

You can find the detailed requirements for this assignment here:
[Link to the task document](https://drive.google.com/file/d/1swszcMU9rF_-zRJaA2VchPuU_d7yrAbs/view)

## How to run the app

This project is built using Vanilla JavaScript and Vite as the build tool. To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Open your terminal and navigate to the project's root directory.
3. Install the necessary dependencies by running:

```bash
npm install
```

4. Start the local development server:

```bash
npm run dev
```

5. To create an optimized production build (configured via `vite.config.js` to output exactly three items: an HTML file, a bundled JS file with injected CSS, and an assets folder), run:

```bash
npm run build
```

## Folder Structure

- **/assets** - contains visual assets, such as icons
- **/components** - stores reusable UI elements written in JavaScript (eg. `Header.js`, `BookCard.js`). Each file is responsible for rendering a specific part of the interface.
- **/utils** - contains functions and separated logic. It includes `api.js` for handling fetching data from the [Open Library API](https://openlibrary.org/), and `storage.js` for managing browser `localStorage` interactions
