import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Pehara's game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Step 1

// Adding a button with a fun emoji
const button = document.createElement("button");
button.innerHTML = "( ˘▽˘)っ❤️";
app.append(button);

// Step 2

// Adding a div for the counter
const counterDiv = document.createElement("div");
let counter: number = 0;
counterDiv.innerHTML = `${Math.floor(counter)} hearts`; // Round down to the nearest whole number
app.append(counterDiv);

// Adding a click event listener to the button to increase the counter
button.addEventListener("click", () => {
  counter++;
  updateCounter();
});

// Function to update the counter and display
function updateCounter() {
  counterDiv.innerHTML = `${Math.floor(counter)} hearts`;
}

// Step 3

// Increment the counter every second using setInterval
setInterval(() => {
  counter += 1; // Increment by 1 unit per second
  updateCounter();
}, 1000);

// Step 4

// Increment the counter by a fractional amount per animation frame
let lastTime = 0;

function animate(time: number) {
  const deltaTime = (time - lastTime) / 1000; // Convert milliseconds to seconds
  counter += deltaTime; // Increment based on elapsed time
  updateCounter();
  lastTime = time;
  requestAnimationFrame(animate);
}

animate(0);
