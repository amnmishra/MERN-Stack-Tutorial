const msg = document.createElement("span");
msg.textContent = "Imperative";


const div = document.createElement("div");

const heading = document.createElement("h1");
heading.textContent = "Hello";
heading.className = "header";

const para = document.createElement("p");
para.textContent = "WellCome to the session";
para.className = "para";

const btn = document.createElement("button");
btn.textContent="Click";
btn.className="btn";

div.append(msg);
div.append(heading);
div.append(para);
div.append(btn);

document.getElementById("root").append(div);

