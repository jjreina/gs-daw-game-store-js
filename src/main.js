import "./style.css";
import { createGameCard } from "./components/gameCard.js";
import games from "./assets/data/games.json";

const gamesContainer = document.querySelector("#games-container");
const genreSelect = document.querySelector("select");

const rederGames = (gamesToRender) => {
  gamesContainer.textContent = "";
  gamesToRender.forEach((game) => {
    gamesContainer.appendChild(createGameCard(game));
  });
};

genreSelect.addEventListener("change", (event) => {
  const selectedGenre = event.target.value;
  const gamesFiltered =
    selectedGenre === "all"
      ? games
      : games.filter((game) => game.genre === selectedGenre);
  rederGames(gamesFiltered);
});

// Init project
rederGames(games);
