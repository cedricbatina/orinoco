function createPage(){
 const conf = window.location.search;
 const searchConf = new URLSearchParams(conf);
const orderId = searchConf.get("id");
const total = searchConf.get("total");
localStorage.removeItem("panier")
const mainTitle = document.createElement("h1");
greatContainer.appendChild(mainTitle);
mainTitle.classList.add("jumbotron", "text-center", "success");
mainTitle.innerHTML = "Votre commande a été validé";
const mainParagraph = document.createElement("p");
greatContainer.appendChild(mainParagraph);
mainParagraph.classList.add("text-center");
mainParagraph.innerHTML =
  "Toute l'équipe d'Orinoco vous remercie pour votre confiance. Nous espérons vous revoir très bientôt sur notre site.";
const orderContainer = document.getElementById("orderContainer");
//orderContainer.classList.add("col-12");
const orderParagraph = document.createElement("p");
orderParagraph.setAttribute("id", "orderParagraph");
orderContainer.appendChild(orderParagraph);
orderParagraph.innerHTML = "votre numero de commande est le:";
const orderNumber = document.createElement("p");
orderNumber.setAttribute("id", "orderNumber");
orderContainer.appendChild(orderNumber);
orderNumber.innerHTML = orderId;
const totalContainer = document.getElementById("totalContainer");
//totalContainer.classList.add("col-12");
const totalParagraph = document.createElement("p");
totalParagraph.setAttribute("id", "totalParagraph");
totalContainer.appendChild(totalParagraph);
totalParagraph.innerHTML = "Le montant total de votre commande est de:";
const totalPrice = document.createElement("p");
totalPrice.setAttribute("id", "totalPrice");
totalContainer.appendChild(totalPrice);
totalPrice.innerHTML = total  + " Euros";
}
createPage()