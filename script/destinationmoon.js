fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const moonDestination = data.destinations.find(
      (destination) => destination.name === "Moon"
    );

    if (moonDestination) {
      const main = document.querySelector("main");
      const moonDiv = document.createElement("section");
      moonDiv.classList.add("left");
      moonDiv.innerHTML = `
      <div class="destination-info">
      <p class="numberdestination">01</p>
      <span>PICK YOUR DESTINATION</span>
        </div>
        <img src="${moonDestination.images.webp}" alt="Moon Image">
      `;
      const rightDiv = document.createElement("section");
      rightDiv.classList.add("right");
      rightDiv.innerHTML = `
      <div class = "info">
        <a id="active" href="destination-moon.html"><u>MOON</u></a>
        <a href="destination-mars.html">MARS</a>
        <a href="destination-europa.html">EUROPA</a>
        <a href="destination-titan.html">TITAN</a>
        <h2>${moonDestination.name}</h2>
        <p>${moonDestination.description}</p>
        <hr>
        <div id="DistanceTravelTime">
        <div class="top-info">
        <h3>AVG. DISTANCE:</h3>
        <h3>EST. TRAVEL TIME:</h3>
        </div>
        <div class="bottom-info">
        <h4>${moonDestination.distance}</h4>
        <h4>${moonDestination.travel}</h4>
        </div>
        </div>
      </div>
        `;
      main.appendChild(moonDiv);
      main.appendChild(rightDiv);
    } else {
      console.log("Destiny 'Moon' not found in the data.");
    }
  })
  .catch((error) => console.log("Błąd pobierania danych:", error));
