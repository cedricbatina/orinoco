fetch("http://localhost:3000/api/cameras")
.then(response => response.json())
.then(response => {
  console.log(response);
  generateCamera(response)
})
.catch(error=>console.log(error)) // j'ai ajouté ceci pour l'erreur en cas de promesse non tenue


function generateCamera(response){
      const greatContainer = document.getElementById("greatContainer")//code for the great Container
      const mainTitle = document.createElement("h1")
        greatContainer.appendChild(mainTitle)
        mainTitle.classList.add("jumbotron","text-center")
        mainTitle.innerHTML = "Bienvenue chez Orinoco!"
      const mainParagraph = document.createElement("p")
        greatContainer.appendChild(mainParagraph)
        mainParagraph.classList.add("text-center")
        mainParagraph.innerHTML = "Votre e-magasin qui vous propose des caméras et vintage! Faites votre choix. Cliquez sur votre l'article de votre choix pour l'<span>ajouter dans votre panier</span>"
        // here ends code for elements before #cameras
        
      const main = document.getElementById("cameras")
        
        // code for response, goes here
            response.forEach(element => {

           //here begins code for creating elements constants in the response
            const article = document.createElement("article")
            main.appendChild(article)

            article.classList.add("shadow-lg", "card") // adding classes to article
                const section = document.createElement("section")
                  article.appendChild(section)
                  section.setAttribute("id","article")
                    const articleId = document.createElement("h2")
                    section.appendChild(articleId)
                      articleId.textContent = "Reférence:" + "      " + element._id
                       // generating objectId
                      articleId.classList.add = ("card-title")
                      // code for title
                    const articleTitle = document.createElement("h2")
                    section.appendChild(articleTitle)
                      articleTitle.textContent = "Nom:" + "      "   + element.name
                      // code for price
                    const articlePrice = document.createElement("h3")
                    section.appendChild(articlePrice)
                      articlePrice.textContent = element.price + "     " + "Euros"

                    // code for picture   
                    const articlePicture = document.createElement("img")  
                      article.appendChild(articlePicture)
                      articlePicture.setAttribute("src",element.imageUrl),("alt","camera vintage")
                      articlePicture.classList.add("col-md-8","card-img-top")
                      articlePicture.textContent = element.imageUrl // generating image

                    // creating now a button.
                    const articleButton = document.createElement("button") // creating a button
                      article.appendChild(articleButton)
                      articleButton.textContent = "En savoir plus !"
                      articleButton.classList.add("btn", "col-4")
                      articleButton.addEventListener("click",function(){
                      window.location.href = "produit.html?id="+element._id
                    })
        })
      
      }