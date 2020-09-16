const param = window.location.search 
const searchParam = new URLSearchParams(param)
const id = searchParam.get("id")

fetch("http://localhost:3000/api/cameras/"+id)
.then(response => response.json())
.then(response => {
console.log(response)
const productMainContainer = document.getElementById("productMainContainer") //code for the great Container
    const product = document.getElementById("main")
    // code for article's name

      const productTitle = document.createElement("h2")
      product.appendChild(productTitle)
      productTitle.innerHTML = response.name

    // code for article's price
    const productPrice = document.createElement("h2")
      product.appendChild(productPrice)
      productPrice.innerHTML = response.price

    // code for article's description
 const productDescription = document.createElement("P")
    product.appendChild(productDescription)
    productDescription.innerHTML = response.description
     
  const productPicture = document.createElement("img")
    product.appendChild(productPicture)
    productPicture.src = response.imageUrl
  
  const lenses = document.createElement("select")
    
    response.lenses.forEach(element => {
      console.log(element)
    const options = document.createElement("option")
    options.textContent = element
    lenses.appendChild(options)
    });
    product.appendChild(lenses)

    const ajout = document.createElement("button")
    ajout.textContent = "ajouter au panier"
    product.appendChild(ajout)
    ajout.addEventListener("click",function(){
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
})
.catch(error=>console.log(error)) // j'ai ajouté ceci pour l'erreur en cas de promesse non tenue


  

  
   
   
 
   
   
 
  

  

   
          
        
    
     
   
  

  

  
    
    
      
      
       


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