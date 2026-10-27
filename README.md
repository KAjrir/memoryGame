# Memory Game

A Pokémon memory card game built with React as part of [The Odin Project](https://www.theodinproject.com/).

## How to play
Click every card only once. After each click the cards are shuffled — click the same card twice and the round is over.

## Features
- Pokémon fetched from the [PokéAPI](https://pokeapi.co/)
- Current score and best score
- Choose the number of cards
- Cards are shuffled after every click

## Built with
React, Vite

## Usage
```bash
npm install
npm run dev
```

## What I learned
- Fetching data in a custom hook (`useFetchData`) with `useEffect`
- Lifting state up and passing callbacks to child components
