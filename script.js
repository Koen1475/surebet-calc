function calculateSurebet() {
  const odd1 = parseFloat(document.getElementById("odd1").value);
  const odd2 = parseFloat(document.getElementById("odd2").value);
  const totalBet = parseFloat(document.getElementById("totalBet").value);

  if (isNaN(odd1) || isNaN(odd2) || isNaN(totalBet)) {
    alert("Voer geldige getallen in voor de odds en totale inzet.");
    return;
  }

  const totalImpliedProbability = 1 / odd1 + 1 / odd2;

  const stake1 = Math.round((1 / odd1 / totalImpliedProbability) * totalBet);
  const stake2 = Math.round((1 / odd2 / totalImpliedProbability) * totalBet);

  const profit = stake1 * odd1 - totalBet;
  const roi = (profit / totalBet) * 100;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
      <p>Inzet voor odd ${odd1.toFixed(2)}: €${stake1}</p>
      <p>Inzet voor odd ${odd2.toFixed(2)}: €${stake2}</p>
      <p>Winst: €${profit.toFixed(2)}</p>
      <p>ROI: ${roi.toFixed(2)}%</p>
  `;

  // Voeg padding toe aan het resultaat na het uitvoeren van de berekeningen
  resultElement.style.padding = "10px";
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW Registered!");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration Failed!");
      console.log(error);
    });
}
