const conf = window.location.search;
const searchConf = new URLSearchParams(conf);
const orderId = searchConf.get("id");
const total = searchConf.get("total");
let cameraBasket = JSON.parse(localStorage.getItem("confirmation"));

console.log(orderId);
console.log(conf);
console.log(localStorage.getItem("total"));

const mainTitle = document.createElement("h1");
greatContainer.appendChild(mainTitle);
mainTitle.classList.add("jumbotron", "text-center");
mainTitle.innerHTML = "Votre commande a été validé";
const mainParagraph = document.createElement("p");
greatContainer.appendChild(mainParagraph);
mainParagraph.classList.add("text-center");
mainParagraph.innerHTML =
  "Merci d'avoir choisi Orinoco pour vos achats. Votre numero de commande est le" +
  orderId +
  ", pour une valeur de " +
  total +
  ".";
