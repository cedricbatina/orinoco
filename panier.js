

console.log(localStorage.getItem("panier"))
let cameraInBasket = JSON.parse(localStorage.getItem("panier"))

for (let i = 0; i < cameraInBasket.length; i++) {
    const table = document.getElementById("table")  // calling the table
    let tableHeader = document.createElement("thead") // creating a theader element
        table.appendChild.tableHeader
        let tableTitle = document.createElement("tr")  // defining the main row
           tableHeader.appendChild = tableTitle
           let tableItemId = document.createElement("td") 
               tableItemId.classList.add("number")

               tableItemId.innerHTML = "Numéro"
               tableTitle.appendChild(tableItemId)

            let tableItemName = document.createElement("td")
                tableItemName.classList.add("name")

                tableTitle.appendChild(tableItemName)
                tableItemName.innerHTML = "Nom"

            let tableItemPrice = document.createElement("td")
                tableItemPrice.classList.add("price")
                tableTitle.appendChild(tableItemPrice)
                tableItemPrice.innerHTML = "Prix"
    table.innerHTML += "<tr><td>" + cameraInBasket[i]._id +"<tr><td>" + cameraInBasket[i].name + "</td><td>"+ cameraInBasket[i].price + 
"</td></tr>"
}

