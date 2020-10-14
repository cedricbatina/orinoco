const param = window.location.search;
const searchParam = new URLSearchParams(param);
const id = searchParam.get("id");
const greatContainer = document.getElementById("greatContainer"); //code for the great Container
fetch("http://localhost:3000/api/cameras/" + id)
  .then((response) => response.json())
  .then((response) => {
    generateProduct(response);
  })
  .catch((error) => {
    greatContainer.innerHTML =
      "<h2 class='messageError'>Le serveur a rencontré un probleme, veuillez ressayer plus tard !</h2>";
  }); // j'ai ajouté ceci pour l'erreur en cas de promesse non tenue
// creating a function
function generateProduct(response) {
  const mainTitle = document.createElement("h1");
  greatContainer.appendChild(mainTitle);
  mainTitle.classList.add("jumbotron", "text-center");
  mainTitle.innerHTML = "Description de votre caméra";
  const mainParagraph = document.createElement("p");
  greatContainer.appendChild(mainParagraph);
  mainParagraph.classList.add("text-center");
  mainParagraph.innerHTML =
    "Voici la description complète de votre caméra vintage! Personnalisez votre caméra avec une lentille adaptée à vos besoins. Cliquez pour l'<span>ajouter dans votre panier</span>";
  // here ends code for elements before #cameras
  //code for the great Container
  const productMainContainer = document.getElementById("productMainContainer");
  productMainContainer.setAttribute("data-ride", "carousel");
  const product = document.getElementById("main");
  const carouselThing = document.createElement("div");
  product.appendChild(carouselThing);
  carouselThing.classList.add("carousel-inner");
  const carouselItem = document.createElement("div");
  carouselThing.appendChild(carouselItem);
  carouselItem.classList.add("carousel-item-active");
  // code for article's image
  const productPicture = document.createElement("img");
  carouselItem.appendChild(productPicture);
  productPicture.src = response.imageUrl;
  productPicture.classList.add("d-block");
  productPicture.classList.add("w-100");
  productPicture.setAttribute("alt", "camera vintage");
  productPicture.setAttribute("id", "image");
  const descriptionDuProduit = document.createElement("div");
  descriptionDuProduit.setAttribute("id", "descriptionDuProduit");
  product.appendChild(descriptionDuProduit);
  const productIdContainer = document.createElement("div");
  descriptionDuProduit.appendChild(productIdContainer);
  // code for article's name
  const idParagraph = document.createElement("p");
  descriptionDuProduit.appendChild(idParagraph);
  idParagraph.innerHTML = "Réference du produit:";
  idParagraph.classList.add("paragraphesDuProduit");
  const productId = document.createElement("p");
  descriptionDuProduit.appendChild(productId);
  productId.setAttribute("id", "numero");
  productId.innerHTML = id;
  const productTitleContainer = document.createElement("div");
  descriptionDuProduit.appendChild(productTitleContainer);
  const titleParagraph = document.createElement("p");
  titleParagraph.classList.add("paragraphesDuProduit");

  productTitleContainer.appendChild(titleParagraph);
  titleParagraph.innerHTML = "Nom du produit:";
  const productTitle = document.createElement("p");
  productTitleContainer.appendChild(productTitle);
  productTitle.setAttribute("id", "nom");
  productTitle.innerHTML = response.name;
  const productPriceContainer = document.createElement("div");
  descriptionDuProduit.appendChild(productPriceContainer);
  // code for article's price
  const priceParagraph = document.createElement("p");
  productPriceContainer.appendChild(priceParagraph);
  priceParagraph.classList.add("paragraphesDuProduit");
  priceParagraph.innerHTML = "Prix du produit:";
  const productPrice = document.createElement("p");
  productPriceContainer.appendChild(productPrice);
  productPrice.setAttribute("id", "prix");
  productPrice.innerHTML = response.price + " Euros";
  const productDescriptionContainer = document.createElement("div");
  descriptionDuProduit.appendChild(productDescriptionContainer);
  // code for article's description
  const descriptionParagraph = document.createElement("p");
  productDescriptionContainer.appendChild(descriptionParagraph);
  descriptionParagraph.classList.add("paragraphesDuProduit");
  descriptionParagraph.innerHTML = "Description du produit";
  const productDescription = document.createElement("p");
  productDescriptionContainer.appendChild(productDescription);
  productDescription.setAttribute("id", "texte");
  productDescription.innerHTML = response.description;
  // let's create a selection inside a formular
  const lensesFormular = document.createElement("form");
  descriptionDuProduit.appendChild(lensesFormular);
  lensesFormular.setAttribute("id", "personnalisation");
  const lensesFieldset = document.createElement("fieldset");
  lensesFormular.appendChild(lensesFieldset);
  const lensesLegend = document.createElement("legend");
  lensesFieldset.appendChild(lensesLegend);
  lensesLegend.setAttribute("id", "lensesLegend");
  lensesLegend.innerHTML = "Personnalisez votre produit";
  //creating a label for select
  const pLabel = document.createElement("p");
  lensesFieldset.appendChild(pLabel);
  const optionLabel = document.createElement("label");
  pLabel.appendChild(optionLabel);
  optionLabel.setAttribute = ("name", "lentilles");
  optionLabel.innerHTML = "Choisissez vos lentilles:" + "    ";
  optionLabel.setAttribute = ("for", "options");
  const selection = document.createElement("select");
  lensesFieldset.appendChild(selection);
  selection.classList.add("form-group");
  selection.setAttribute = ("id", "options");
  const lenses = document.createElement("optgroup");
  selection.appendChild(lenses);
  response.lenses.forEach((element) => {
    console.log(element);
    const optionSelection = document.createElement("option");
    optionSelection.textContent = element;
    lenses.appendChild(optionSelection);
  });
  //create a button
  const addingButton = document.createElement("button");
  addingButton.textContent = "Ajouter au panier";
  product.appendChild(addingButton);
  addingButton.classList.add("btn");
  addingButton.setAttribute("id", "ajout");
  addingButton.addEventListener("click", function () {
    if (localStorage.getItem("panier")) {
      let panier = JSON.parse(localStorage.getItem("panier"));
      panier.push(response);
      localStorage.setItem("panier", JSON.stringify(panier));
    } else {
      const panier = [];
      panier.push(response);
      localStorage.setItem("panier", JSON.stringify(panier));
    }
    window.location.href = "panier.html";
  });
}
