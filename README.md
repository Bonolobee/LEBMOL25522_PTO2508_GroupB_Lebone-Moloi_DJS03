# DJS03: React Podcast Landing Page

## Overview

This project is a React landing page for a podcast discovery app. It fetches podcast data from the external podcast API, shows loading and error states, and renders a responsive grid of reusable podcast preview cards.

## Features

- Fetches podcast data from `https://podcast-api.netlify.app/`.
- Uses `useEffect()` to fetch once when the app loads.
- Uses `useState()` to manage podcast data, loading, error, and empty states.
- Renders podcast previews with reusable React components.
- Displays podcast image, title, seasons, genre names, and formatted last updated date.
- Uses responsive CSS Grid for desktop, tablet, and mobile screens.
- Includes JSDoc comments for key functions and components.

## Project Structure

```text
src/
  components/
    PodcastGrid.jsx
    PodcastPreviewCard.jsx
  utils/
    dateUtils.js
    genreUtils.js
    podcastApi.js
  App.jsx
  data.js
  main.jsx
  styles.css
index.html
package.json
```

## Main Files

- `src/App.jsx` controls the main app state and renders loading, error, empty, or success views.
- `src/utils/podcastApi.js` fetches podcast data from the API.
- `src/components/PodcastGrid.jsx` maps podcast data into preview cards.
- `src/components/PodcastPreviewCard.jsx` displays one podcast preview using props.
- `src/utils/genreUtils.js` converts genre IDs into readable genre names.
- `src/utils/dateUtils.js` formats the podcast updated date.

## How To Run

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

> Do not use Live Server for this project. It cannot serve `.jsx` modules correctly, so the app must run through Vite.

## React Concepts Used

- Functional components
- Props
- `useState`
- `useEffect`
- Fetch API
- Conditional rendering
- `.map()` list rendering
- Modular component structure

## Original Brief

Build a React podcast landing page that fetches podcast data from an API, displays loading and error states, renders a responsive grid of podcast previews, and keeps the code clean, modular, and documented.
