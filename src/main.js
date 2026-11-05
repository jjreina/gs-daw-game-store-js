import "./style.css";
import games from "./assets/data/games.json";

const gamesContainter = document.querySelector("#games-container");

const genreSelect = document.querySelector("select");
let gamesFiltered = [];

const createGameCard = (gamesContainter, game) => {
  let cardGame = document.createElement("article");
  cardGame.classList.add("game-card");
  let cardGameImg = document.createElement("img");
  cardGameImg.src = game.image;
  cardGameImg.alt = game.title;
  let cardGameTitle = document.createElement("h2");
  cardGameTitle.classList.add("game-title");
  cardGameTitle.textContent = game.title;
  let cardContainerInfo = document.createElement("div");
  cardContainerInfo.classList.add("game-meta");
  let cardGameGenre = document.createElement("span");
  cardGameGenre.textContent = game.genre;
  let cardGamePlatform = document.createElement("span");
  cardGamePlatform.textContent = game.platform;
  let cardGameRating = document.createElement("span");
  cardGameRating.textContent = game.rating;
  cardContainerInfo.append(cardGameGenre, cardGamePlatform, cardGameRating);
  cardGame.append(cardGameImg, cardGameTitle, cardContainerInfo);
  gamesContainter.appendChild(cardGame);
};

const createOption = (genreSelect, game) => {
  let option = document.createElement("option");
  option.value = game.genre;
  option.textContent = game.genre;
  genreSelect.appendChild(option);
};

games.forEach((game) => {
  createGameCard(gamesContainter, game);
  createOption(genreSelect, game);
});

genreSelect.addEventListener("change", (event) => {
  const selectedGenre = event.target.value;
  gamesFiltered = games.filter((game) => game.genre === selectedGenre);
  gamesContainter.textContent = "";
  gamesFiltered.forEach((game) => {
    createGameCard(gamesContainter, game);
  });
});
