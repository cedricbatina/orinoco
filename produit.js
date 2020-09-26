const param = window.location.search 
const searchParam = new URLSearchParams(param)
const id = searchParam.get("id")

fetch("http://localhost:3000/api/cameras/"+id)
.then(response => response.json())
.then(response => {
console.log(response)
generateProduct(response)
})
.catch(error=>console.log(error)) // j'ai ajouté ceci pour l'erreur en cas de promesse non tenue

  // creating a function 
function generateProduct(response) {
  const greatContainer = document.getElementById("greatContainer")//code for the great Container
      const mainTitle = document.createElement("h1")
        greatContainer.appendChild(mainTitle)
        mainTitle.classList.add("jumbotron","text-center")
        mainTitle.innerHTML = "Description de votre caméra"
      const mainParagraph = document.createElement("p")
        greatContainer.appendChild(mainParagraph)
        mainParagraph.classList.add("text-center")
        mainParagraph.innerHTML = "Voici la description complète de votre caméra vintage! Faites votre choix. Cliquez pour l'<span>ajouter dans votre panier</span>"
        // here ends code for elements before #cameras
  //code for the great Container
  const productMainContainer = document.getElementById("productMainContainer") 
    productMainContainer.setAttribute("data-ride","carousel")

    /*const productMainTitleContainer = document.createElement("div")
      productMainContainer.appendChild(productMainTitleContainer)
        const productMainTitle = document.createElement("h1")
          productMainTitle.textContent = "Voici une présentation complète de votre appareil"
          productMainTitleContainer.appendChild(productMainTitle)*/
        
      const product = document.getElementById("main")
        const carouselThing = document.createElement("div")
          product.appendChild(carouselThing)
          carouselThing.classList.add("carousel-inner")
            const carouselItem = document.createElement("div")
              carouselThing.appendChild(carouselItem)
              carouselItem.classList.add("carousel-item-active")
              // code for article's image
              const productPicture = document.createElement("img")
                carouselItem.appendChild(productPicture)
                productPicture.src = response.imageUrl
                productPicture.classList.add("d-block")
                productPicture.classList.add("w-100")
                productPicture.setAttribute("alt","camera vintage")
                productPicture.setAttribute("id","image")
              const productIdContainer = document.createElement("div")
                product.appendChild(productIdContainer)
                // code for article's name
                const productId = document.createElement("h2")
                  productIdContainer.appendChild(productId)
                  productId.setAttribute("id","numero")
                  productId.innerHTML = "Réf:" + "   " + id
              const productTitleContainer = document.createElement("div")
                product.appendChild(productTitleContainer)
                const productTitle = document.createElement("h2")
                  productTitleContainer.appendChild(productTitle)
                  productTitle.setAttribute("id","nom")
                  productTitle.innerHTML = "Nom:"+ "    " + response.name
              const productPriceContainer = document.createElement("div")
                product.appendChild(productPriceContainer)   
                // code for article's price
                const productPrice = document.createElement("h3")
                  productPriceContainer.appendChild(productPrice)
                  productPrice.setAttribute("id","prix")
                  productPrice.innerHTML = response.price + "    " + "Euros"
              const productDescriptionContainer = document.createElement("div")
                  product.appendChild(productDescriptionContainer)   
                  // code for article's description
                  const productDescription = document.createElement("p")
                    productDescriptionContainer.appendChild(productDescription)
                    productDescription.setAttribute("id","texte")
                    productDescription.innerHTML = response.description
                 // let's create a selection inside a formular
        const lensesFormular = document.createElement("form")
          product.appendChild(lensesFormular)
          lensesFormular.setAttribute("id","personnalisation")
            const lensesFieldset = document.createElement("fieldset")
              lensesFormular.appendChild(lensesFieldset)
                const lensesLegend = document.createElement("legend") 
                  lensesFieldset.appendChild(lensesLegend)
                  lensesLegend.setAttribute("id","lensesLegend")
                  lensesLegend.innerHTML = "Personnalisez votre produit"
              //creating a label for select
                const optionLabel = document.createElement("label") 
                  lensesFieldset.appendChild(optionLabel)
                  optionLabel.setAttribute = ("name","lentilles")
                  optionLabel.innerHTML = "Choisissez vos lentilles:" + "    "
                  optionLabel.setAttribute = ("for","options")
                const selection = document.createElement("select") 
                  lensesFieldset.appendChild(selection)
                  selection.classList.add("form-group")
                  selection.setAttribute = ("id","options")
                    const lenses = document.createElement("optgroup") 
                      selection.appendChild(lenses)
                      response.lenses.forEach(element => {
                      console.log(element)
                        const optionSelection = document.createElement("option")
                          optionSelection.textContent = element
                          lenses.appendChild(optionSelection)
               });
              //create a button
    const addingButton = document.createElement("button")
      addingButton.textContent = "Ajouter au panier"
      product.appendChild(addingButton)
      addingButton.classList.add("btn","col-12")
      addingButton.setAttribute("id","ajout")
      addingButton.addEventListener("click",function(){
        if (localStorage.getItem("panier")){
          const panier = JSON.parse(localStorage.getItem("panier"))
            panier.push(response)
            localStorage.setItem("panier", JSON.stringify(panier))
        }
        else{
          const panier = []
            panier.push(response)
            localStorage.setItem("panier", JSON.stringify(panier))
          }
          window.location.href = "panier.html"
        })
      
}
  
   
   
 
   
   
 
  

  

   
          
        
    
     
   
  

  

  
    
    
      
      
       


  // here begins my answer 

    
    //  productDescription.textContent = description
    


      /*
      greatContainer.appendChild(productTitle)
      productTitle.classList.add("jumbotron","bg-dark","text-center","text-light","px-2","py-2")
      productTitle.style.backgroundColor = "#9bc9ec"
      productTitle.innerHTML = "Bienvenue chez Orinoco!"
    const mainParagraph = document.createElement("p")
     greatContainer.appendChild(mainParagraph)
     mainParagraph.classList.add("text-center")
     mainParagraph.innerHTML = "Votre e-magasin qui vous propose des caméras et vintage! Faites votre choix. Cliquez sur votre l'article de votre choix pour l'<span>ajouter dans votre panier</span>"
                                                                // here ends code for elements before #cameras
   const main = document.getElementById("cameras")
    
  answer = (element => {
    const article = document.createElement("article")
    const articleId = document.createElement("h2")
    const articlePrice = document.createElement("h3")
    const articleTitle = document.createElement("h2")
    const articleDescription = document.createElement("p")
    
    
})
}
*/