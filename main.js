function createGame(player1, hour, player2) {
  return `
    <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
    `;
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
    `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "07:00", "camaroes") +
      createGame("uruguai", "10:00", "coreia") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "07:00", "servia") +
      createGame("coreia", "10:00", "gana") +
      createGame("brasil", "13:00", "suiça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreia", "7:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("brasil", "16:00", "camaroes") +
      createGame("suiça", "16:00", "servia")
  );
