import "./style.css";
import games from "./assets/data/games.json";

games.forEach((game) => {
  console.log(game.title);
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
  document.querySelector("#games-container").appendChild(cardGame);
});
