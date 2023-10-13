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
counterDiv.innerHTML = `${counter} hearts`;
app.append(counterDiv);

// Adding a click event listener to the button to increase the counter
button.addEventListener("click", () => {
  counter++;
  counterDiv.innerHTML = `${counter} hearts`;
});
