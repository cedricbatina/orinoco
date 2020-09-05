//const { text } = require("body-parser"); WARNING!!!!! JE NE SAIS PAS D'Où VIENT CE BOUT DE CODE, IL NY ETAIT PAS AVANT. PEUT ETRE UNE MAUVAISE MANIP

fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
    console.log(response);
    const greatContainer = document.getElementById("greatContainer")//code for the great Container
      const mainTitle = document.createElement("h1")
        greatContainer.appendChild(mainTitle)
        mainTitle.classList.add("jumbotron", "bg-info", "text-center")
        mainTitle.innerHTML = "Bienvenue chez Orinoco!"
      const mainParagraph = document.createElement("p")
        greatContainer.appendChild(mainParagraph)
        mainParagraph.classList.add("text-center")
        mainParagraph.innerHTML = "Votre e-magasin qui vous propose des caméras et vintage!Il est temps de rassembler ce que vous avez appris dans ce chapitre pour créer la section"
                                                                   // here ends code for elements before #cameras
      const main = document.getElementById("cameras")
        greatContainer.appendChild(main)
        main.classList.add("row") //j'ajoute .row à main
        response.forEach(element => {
          const article = document.createElement("article")
          const articleTitle = document.createElement("h3")
          const articlePrice = document.createElement("h4")
          const articleDescription = document.createElement("p")
          const articlePicture = document.createElement("img")
            article.textContent = element._id
            articleTitle.textContent = element.name
            articlePrice.textContent = element.price
            articleDescription.textContent = element.description
            articlePicture.textContent = element.imageUrl
            //code for article
            main.appendChild(article)
            article.classList.add("card", "my-2","mx-2","px-3","shadow-lg")
            article.appendChild(articleTitle)
            articleTitle.classList.add("card-header", "bg-success")
            article.appendChild(articlePrice)
            articlePrice.classList.add("card-body") // add .card-body 
            articlePrice.appendChild(articleDescription)
            article.appendChild(articlePicture)
            articlePicture.classList.add("card-img-top") //set <img> on the cardtop
            articlePicture.setAttribute("alt", "appareil photo vintage")
            articlePicture.setAttribute("title", "element.name")
        });
  
})
  

/*
.then(reponse => reponse.json())
.then(reponse => {
    console.log(reponse);
    const main = document.getElementById("cameras")
    reponse.forEach(element => {
      const article = document.createElement("article")
      const paragraphe = document.createElement("p")
      paragraphe.textContent = element.name
      article.appendChild(paragraphe)
      main.appendChild(article)
    })
}

.then(reponse => {
console.log(reponse);
const main = document.getElementById("cameras")
reponse.forEach(element => {
  const article = document.createElement("article")
  const paragraphe = document.createElement("p")
  paragraphe.textContent = element.id
  article.appendChild(paragraphe)
  main.appendChild(article)
})
})
*/

