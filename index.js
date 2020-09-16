fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
  console.log(response);
  generateCamera(response)
})
function generateCamera(response){
      const greatContainer = document.getElementById("greatContainer")//code for the great Container
      const mainTitle = document.createElement("h1")
        greatContainer.appendChild(mainTitle)
        mainTitle.classList.add("jumbotron","bg-dark","text-center","text-light")
        mainTitle.innerHTML = "Bienvenue chez Orinoco!"
      const mainParagraph = document.createElement("p")
        greatContainer.appendChild(mainParagraph)
        mainParagraph.classList.add("text-center")
        mainParagraph.innerHTML = "Votre e-magasin qui vous propose des caméras et vintage! Faites votre choix. Cliquez sur votre l'article de votre choix pour l'<span>ajouter dans votre panier</span>"
         // here ends code for elements before #cameras
      const main = document.getElementById("cameras")
        greatContainer.appendChild(main)
        
        // code for response, goes here
            response.forEach(element => {

           //here begins code for creating elements constants in the response
            const article = document.createElement("article")
            main.appendChild(article)

            article.classList.add("shadow-lg", "card","row") // adding classes to article
                const section = document.createElement("section")
                article.appendChild(section)
                section.classList.add("col-md-6")
                    const articleId = document.createElement("h3")
                    section.appendChild(articleId)
                      articleId.textContent = element._id // generating objectId
                      articleId.classList.add = ("card-title")
                      
                    const articleTitle = document.createElement("h3")
                    section.appendChild(articleTitle)
                      articleTitle.textContent = element.name
                    const articlePrice = document.createElement("h4")
                    section.appendChild(articlePrice)
                      articlePrice.textContent = element.price

                // code for picture   
                const articlePicture = document.createElement("img")  
                article.appendChild(articlePicture)
                articlePicture.setAttribute("src",element.imageUrl),("alt","camera vintage")
                articlePicture.classList.add("col-md-6","card-img-top")
                  articlePicture.textContent = element.imageUrl // generating image
            
            const articleButton = document.createElement("button") // creating a button
            main.appendChild(articleButton)
              articleButton.textContent = "Pour plus d'informations !"



              articleButton.addEventListener("click",function(){
                window.location.href = "produit.html?id="+element._id
                              })
        })
      }
