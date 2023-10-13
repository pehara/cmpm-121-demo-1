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
