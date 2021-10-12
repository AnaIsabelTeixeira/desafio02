console.log("Vamos ver se isto funciona!");


// Remover títulos
let titulos = document.querySelectorAll("h2");
for (let i = 0; i < titulos.length; i++) {
  titulos[i].remove();
}

// Preparar link

let myLink = document.createElement("a");
myLink.href = "https://sigarra.up.pt/fbaup/pt/web_page.inicial";
myLink.target = "_blank";
myLink.innerHTML = "FBAUP";

// Colocá-lo no sítio: appendChild

let target = document.querySelector("header > nav");
target.appendChild(myLink);

// Embelezar Link

myLink.style.marginLeft = "3em";
myLink.style.color = "#000";
myLink.style.fontWeight = "bold";
myLink.style.textDecoration = "none";
myLink.style.borderBottom = "1px dashed #000";

// Criar botão

let magicButton = document.createElement("button");
magicButton.innerHTML = "Modo Escuro";

// Colocá-lo no sítio: appendChild

let target2 = document.querySelector("nav");
target2.appendChild(magicButton);

// Embelezar Botão

magicButton.style.float = "right";
magicButton.style.marginRight = "5em";
magicButton.style.fontSize = "15px";
magicButton.style.color = "#ffffff";
magicButton.style.backgroundColor = "black";
magicButton.style.fontWeight = "bold";

// Modo Escuro com Click

magicButton.onclick = function backgroundChange() {
  document.documentElement.style.setProperty("--main-bg-color", "#3b3b3b");
  document.documentElement.style.setProperty("--secondary-bg-color", "#262626");
  document.querySelector("header").style.backgroundColor = "#000";
  document.getElementById("wrapper").style.color = "#ffffff";
  document.querySelector("header").style.color = "#ffffff";
  myLink.style.color = "#ffffff";
  myLink.style.borderBottom = "1px dashed #ffffff";
};
