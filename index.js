fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((response) => {
    generateCamera(response);
  })
  .catch((error) => {
    greatContainer.innerHTML =
      "<h2 id='messageError'>Le serveur a rencontré un probleme, veuillez ressayer plus tard !</h2>";
  }); // j'ai ajouté ceci pour l'erreur en cas de promesse non tenue
function generateCamera(response) {
  const greatContainer = document.getElementById("greatContainer"); //code for the great Container
  const mainTitle = document.createElement("h1");
  greatContainer.appendChild(mainTitle);
  mainTitle.classList.add("jumbotron", "text-center");
  mainTitle.innerHTML = "Bienvenue chez Orinoco!";
  const mainParagraph = document.createElement("p");
  greatContainer.appendChild(mainParagraph);
  mainParagraph.classList.add("text-center");
  mainParagraph.innerHTML =
    "Votre e-magasin vous propose des caméras vintage! Faites votre choix parmi les produits disponibles ci-dessous. Cliquez pour voir la description complète du produit et personnalisez-le avec une lentille de votre choix. Ensuite, <span>ajoutez-le dans votre panier</span>.";
  // here ends code for elements before #cameras
  const main = document.getElementById("cameras");
  // code for response, goes here
  response.forEach((element) => {
    //here begins code for creating elements constants in the response
    const article = document.createElement("article");
    main.appendChild(article);
    article.classList.add("shadow-lg", "card"); // adding classes to article
    const section = document.createElement("section");
    article.appendChild(section);
    section.setAttribute("id", "article");
    const articleParagraph = document.createElement("p");
    section.appendChild(articleParagraph);
    articleParagraph.classList.add("paragraphesDuProduit");
    articleParagraph.innerHTML = "Réference du produit:";
    const articleId = document.createElement("p");
    section.appendChild(articleId);
    articleId.setAttribute("id", "articleId");
    articleId.textContent = element._id;
    // generating objectId
    articleId.classList.add = "card-title";
    // code for title
    const titleParagraph = document.createElement("p");
    section.appendChild(titleParagraph);
    titleParagraph.classList.add("paragraphesDuProduit");
    titleParagraph.innerHTML = "Nom du produit:";
    const articleTitle = document.createElement("p");
    section.appendChild(articleTitle);
    articleTitle.setAttribute("id", "articleTitle");
    articleTitle.textContent = element.name;
    // code for price
    const priceParagraph = document.createElement("p");
    section.appendChild(priceParagraph);
    priceParagraph.classList.add("paragraphesDuProduit");
    priceParagraph.textContent = "Prix du produit:";
    const articlePrice = document.createElement("p");
    articlePrice.setAttribute("id", "articlePrice");
    section.appendChild(articlePrice);
    articlePrice.textContent = element.price + " Euros";
    // code for picture
    const articlePicture = document.createElement("img");
    article.appendChild(articlePicture);
    articlePicture.setAttribute("src", element.imageUrl),
      ("alt", "camera vintage");
    articlePicture.classList.add("card-img-top");
    articlePicture.textContent = element.imageUrl; // generating image
    // creating now a button.
    const articleButton = document.createElement("button"); // creating a button
    article.appendChild(articleButton);
    articleButton.textContent = "En savoir plus !";
    articleButton.classList.add("btn", "col-4");
    articleButton.addEventListener("click", function () {
      window.location.href = "produit.html?id=" + element._id;
    });
  });
}
