import "./style.css";

interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "Small Heart ˖⁺‧₊˚ ♡ ˚₊‧⁺˖", cost: 10, rate: 0.1 },
  { name: "Big Heart <𝟑.𖥔 ݁ ˖", cost: 100, rate: 2 },
  { name: "Astronomically Large Heart ⋆ ˚｡⋆୨♡୧⋆ ˚｡⋆", cost: 1000, rate: 50 },
];

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "❤︎₊ ⊹ Heart Clicker ⊹₊❤︎";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Step 1

// Adding a button with a heart theme
const button = document.createElement("button");
button.innerHTML = "❤️ Click me ❤️";
app.append(button);

// Step 2

// Adding a div for the counter with a heart theme
const counterDiv = document.createElement("div");
let counter: number = 0;
let growthRate: number = 0.1; // Initialize growth rate to 0.1 for item A
counterDiv.innerHTML = `❤️ ${Math.floor(counter)} hearts`;
app.append(counterDiv);

// Adding a div for the current growth rate
const growthRateDiv = document.createElement("div");
growthRateDiv.innerHTML = `❤️ ${growthRate.toFixed(1)} hearts/sec`; // Display growth rate with one decimal point
app.append(growthRateDiv);

// Step 3

// Increment the counter every second using setInterval
setInterval(() => {
  counter += growthRate; // Increment by the growth rate
  updateCounter();
}, 1000);

// Step 4

// Increment the counter by a fractional amount per animation frame
let lastTime = 0;

function animate(time: number) {
  const deltaTime = (time - lastTime) / 1000; // Convert milliseconds to seconds
  counter += deltaTime * growthRate; // Increment based on elapsed time and growth rate
  updateCounter();
  lastTime = time;
  requestAnimationFrame(animate);
}

animate(0);

// Step 5
button.addEventListener("click", () => {
  counter++;
  updateCounter();
});

// Step 6

// Adding upgrade buttons for items A, B, and C with a heart theme
const upgradeButtons: HTMLButtonElement[] = [];
const itemCounts: number[] = [0, 0, 0]; // Initialize counts for items A, B, C

// Create and append itemCountsDiv to the body
const itemCountsDiv = document.createElement("div");
itemCountsDiv.id = "itemCounts";
document.body.appendChild(itemCountsDiv);

for (let i = 0; i < availableItems.length; i++) {
  const upgradeButton = document.createElement("button");
  upgradeButton.innerHTML = `❤️ Purchase ${availableItems[i].name} (Cost: ${availableItems[i].cost} hearts, Rate: ${availableItems[i].rate.toFixed(1)} hearts/sec)`;
  upgradeButton.disabled = true;
  app.append(upgradeButton);
  upgradeButtons.push(upgradeButton);

  // Step 4
  upgradeButton.addEventListener("click", () => {
    if (counter >= availableItems[i].cost) {
      counter -= availableItems[i].cost;
      growthRate += availableItems[i].rate;
      itemCounts[i]++; // Increment the count for the purchased item
      updateCounter();
      updateGrowthRate();
      updateItemCounts();
    }
  });
}

// Enable the upgrade buttons when the player has enough units
setInterval(() => {
  for (let i = 0; i < availableItems.length; i++) {
    upgradeButtons[i].disabled = counter < availableItems[i].cost;
  }
}, 100);

// Function to update the counter display
function updateCounter() {
  counterDiv.innerHTML = `❤️ ${Math.floor(counter)} hearts`;
}

// Function to update the growth rate display
function updateGrowthRate() {
  growthRateDiv.innerHTML = `❤️ ${growthRate.toFixed(1)} hearts/sec`;
}

// Function to update the item counts display
function updateItemCounts() {
  const itemCountsDiv = document.getElementById("itemCounts");
  if (itemCountsDiv) {
    itemCountsDiv.innerHTML = ""; // Clear previous content

    // Display the counts for each item
    for (let i = 0; i < availableItems.length; i++) {
      const itemDisplay = `${availableItems[i].name} Count: ${itemCounts[i]}`;
      itemCountsDiv.innerHTML += `<div>${itemDisplay}</div>`;
    }
  }
}

// Step 7

// Function to calculate the new cost for an item after purchase
function calculateNewCost(cost: number): number {
  return cost * 1.15;
}

// Update the upgrade buttons with dynamic costs
for (let i = 0; i < availableItems.length; i++) {
  const upgradeButton = upgradeButtons[i];

  upgradeButton.addEventListener("click", () => {
    if (counter >= availableItems[i].cost) {
      counter -= availableItems[i].cost;
      growthRate += availableItems[i].rate;
      itemCounts[i]++; // Increment the count for the purchased item
      availableItems[i].cost = calculateNewCost(availableItems[i].cost); // Update the cost for the next purchase
      updateCounter();
      updateGrowthRate();
      updateItemCounts();
      updateUpgradeButtons(); // Update the text on the upgrade buttons
    }
  });
}

// Function to update the text on the upgrade buttons
function updateUpgradeButtons() {
  for (let i = 0; i < availableItems.length; i++) {
    const upgradeButton = upgradeButtons[i];
    upgradeButton.innerHTML = `❤️ Purchase ${availableItems[i].name} (Cost: ${availableItems[i].cost.toFixed(1)} hearts, Rate: ${availableItems[i].rate.toFixed(1)} hearts/sec)`;
  }
}
