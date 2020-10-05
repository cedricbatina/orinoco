const greatContainer = document.getElementById("greatContainer"); //code for the great Container
const mainTitle = document.createElement("h1");
greatContainer.appendChild(mainTitle);
mainTitle.classList.add("jumbotron", "text-center");
mainTitle.innerHTML = "Votre panier !";
const mainParagraph = document.createElement("p");
greatContainer.appendChild(mainParagraph);
mainParagraph.classList.add("text-center");
mainParagraph.innerHTML = "Voici le récapitulatif de votre panier";
// here ends code for elements before #cameras

console.log(localStorage.getItem("panier"));
let cameraInBasket = JSON.parse(localStorage.getItem("panier"));
const section = document.getElementById("mySection");
// calling the table
const products = document.getElementById("table");
let tableTitle = document.getElementById("tableTitle"); // calling the <thead>
let tableItemName = document.createElement("td");
tableItemName.classList.add("name");
tableTitle.appendChild(tableItemName);
tableItemName.innerHTML = "Nom";
let tableItemPrice = document.createElement("td");
tableItemPrice.classList.add("price");
tableTitle.appendChild(tableItemPrice);
tableItemPrice.innerHTML = "Prix"; // end of <thead>
let total = 0;
let produit = [];
for (let i = 0; i < cameraInBasket.length; i++) {
  produit.push(cameraInBasket[i]._id);
  total += cameraInBasket[i].price;
  tableBody.innerHTML +=
    "<tr><td>" +
    cameraInBasket[i].name +
    "</td><td>" +
    cameraInBasket[i].price +
    "</td><td>" +
    "<button id='supprimez'" +
    i +
    " class='supprimez'>Supprimez</button>" +
    "</td></tr>";
}
// creating a tfoot !!!
let tableFooterContents = document.getElementById("tableFooterContents");
let tableFooterContent1 = document.createElement("td");
tableFooterContents.appendChild(tableFooterContent1);
tableFooterContent1.textContent = "Total de votre commande:";
let tableFooterContent2 = document.createElement("td");
tableFooterContents.appendChild(tableFooterContent2);
tableFooterContent2.setAttribute("id", "total");
tableFooterContent2.textContent = total;

const buttonSup = document.getElementsByClassName("supprimez");
for (let index = 0; index < buttonSup.length; index++) {
  const element = buttonSup[index];
  element.addEventListener("click", function (event) {
    const id = event.currentTarget.id;
    cameraInBasket.splice(id, 1);
    localStorage.setItem("panier", JSON.stringify(cameraInBasket));
    window.location.reload();
  });
}

/*for (let i = 0; i < cameraInBasket.length; i++) {
  let rIndex,
    tableBody = document.getElementById("tableBody");
  products.appendChild(tableBody);
  tableBody.rows[i].addEventListener("mouseover", function () {
    rIndex = this.rowIndex;
    document.getElementsByClassName(
      "name"
    ).thirdValue = this.cells[2].textContent;
    this.cells[2].classList.add("delete"); // adding a class to the third cell for css design purposes
    this.cells[2].setAttribute("id", "delete"); // adding an id to the third cell for css design purposes
    this.cells[2].setAttribute("role", "button"); // adding an id to the third cell for css design purposes
    // but it ain't even work!!!!!!!!! euh....now it works, i spent a lot of time on that
    document.getElementsByClassName(
      "name"
    ).secondValue = this.cells[1].textContent;
    this.cells[2].addEventListener("click", function () {
      // encore un probleme je n'arrive toujours pas à actualiser mon total
      // cameraInBasket.pop(rIndex)
      // cameraInBasket.length = cameraInBasket.length-1
      tableBody.deleteRow(rIndex);
      tableFooterContent2.innerHTML =
        total - document.getElementsByClassName("name").secondValue;

      //window.location.reload()
    });

    console.log(rIndex);
    console.log(document.getElementsByClassName("name").thirdValue);
    console.log(document.getElementsByClassName("name").secondValue);
    console.log(total);
    console.log(total - document.getElementsByClassName("name").secondValue);
  });
}
// here ends code for table
*/
// the beginning of formular
const formulaire = document.getElementById("formulaire");
const contactFormular = document.getElementById("contactFormular");
formulaire.appendChild(contactFormular);
const formularFieldset = document.getElementById("formularFieldset");
const formularLegend = document.getElementById("legend");
formularLegend.innerHTML = "Formulaire de contact";
let formControl = document.getElementsByTagName("formControl");
/*
// creating label and textarea for first name
let firstNameLabel = document.getElementById("firstNameLabel");
firstNameLabel.setAttribute("for", "firstName");
firstNameLabel.textContent = "Prénom*:";
let firstNameInput = document.getElementById("firstName");
firstNameInput.setAttribute("placeholder", "ex: Elijah");
firstNameInput.setAttribute("required", "");
firstNameInput.setAttribute("width", "100%");
let firstNameError = document.getElementById("firtNameError");
// adding an event listener
firstNameInput.addEventListener("oninput", function (event) {
  let value = parseInt(event.target.value);
  let firstNameRegex = /[A-Z][a-z' -]+/.test(value);
  console.log(firstNameRegex);
});
// here ends code for First Name (prénom)

// calling  label and textarea for last name
let lastNameLabel = document.getElementById("lastNameLabel");
lastNameLabel.setAttribute("for", "lastName");
lastNameLabel.textContent = "Nom*:";
let lastNameInput = document.getElementById("lastName");
lastNameInput.setAttribute("placeholder", "ex: Batina");
lastNameInput.setAttribute("id", "lastName");
// lastNameInput.setAttribute("required","")
lastNameInput.setAttribute("type", "text");
let lastNameError = document.getElementById("lastNameError");
// listen the input
lastNameInput.addEventListener("input", function (event) {
  let lastNameValue = parseInt(event.target.lastNameValue);
  let lastNameRegex = /^[A-Z][a-z' -]+/.test(lastNameValue);
  console.log(lastNameRegex);
});
// here ends code for Last Name (nom)

// calling the city label and input
let cityLabel = document.getElementById("cityLabel");
cityLabel.innerHTML = "Veuillez entrez votre adresse";
cityLabel.setAttribute("for", "city");
cityLabel.textContent = "Ville*:";
let cityInput = document.getElementById("city");
cityInput.setAttribute("id", "city");
cityInput.setAttribute("type", "text");
cityInput.setAttribute("required", "");
let cityError = document.getElementById("cityError");
cityInput.addEventListener("input", function (event) {
  let cityValue = parseInt(event.target.cityValue);
  let cityRegEx = /[A-Z][A-Za-z' -]+/.test(cityValue);
  console.log(cityRegEx);
}); // end of city

// let's create the address
let addressLabel = document.getElementById("addressLabel");
addressLabel.setAttribute("for", "address");
addressLabel.innerHTML = "Votre adresse*:";
let addressInput = document.getElementById("address");
addressInput.setAttribute("rows", "5");
let addressError = document.getElementById("addressError");
addressInput.addEventListener("input", function (event) {
  let addressValue = parseInt(event.target.addressValue);
  let addressRegEx = /[A-Z][a-z' -]+/.test(addressValue);
  console.log(addressRegEx);
}); // end of the address

// creating a label and input for email
let emailLabel = document.getElementById("emailLabel");
emailLabel.innerHTML = "Email*:";
emailLabel.setAttribute("for", "email");
let emailInput = document.getElementById("email");
emailInput.setAttribute("placeholder", "ex: elijahbatina@gmail.com");
emailInput.setAttribute("type", "email");
// emailInput.setAttribute("required","")
let emailError = document.getElementById("emailError");
emailInput.addEventListener("onchange", function (event) {
  let emailValue = parseInt(event.target.emailValue);
  let emailRegex = /[A-Z][a-z' -]+/.test(emailValue);
  console.log(emailRegex); // can't match my email input value in the console.log. I don't know why
});
// here ends code for email
*/
/*  // A revoir, les contraintes pour la validation du formulaire
                                       addressZipCodeInput.addEventListener("input",function (event) {
                                          const value = parseInt(event.target.value)
                                          console.log(/[0-9]{5,5}/.test(value))            
                                       }) */
// here ends the formular
// creating a button to submit
const formularButton = document.createElement("button");
contactFormular.appendChild(formularButton);
formularButton.innerHTML = "Envoyer";
formularButton.setAttribute("type", "submit");
formularButton.classList.add("btn");
formularButton.addEventListener("click", function (event) {
  event.preventDefault();
  // window.location.href = "confirmation.html"
  //checkInputs();

  let contact = {
    firstName: document.getElementById("firstName").value, //firstNameValue,
    lastName: document.getElementById("lastName").value, //lastNameValue,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value, //addressValue,
    email: document.getElementById("email").value, //emailValue
  };

  fetch("http://localhost:3000/api/cameras/order", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ contact: contact, products: produit }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.contact);
      window.location.href =
        "confirmation.html?id=" + res.orderId + "&total=" + total;
    })
    .catch(function (res) {
      console.log(res);
      console.log(body);
      console.log(contact);
    });
});
// here ends code for submit button

// down below we find the functions

// creating a function to generate error
function setErrorFor(input, message) {
  formControl.classList.add("danger");
  let error = document.getElementsByClassName("error");
  firstNameError.innerHTML = message;
}
// creating a function to generate success
function setSuccessFor(input) {
  formControl.classList.add("success");
}
//creating a function to check the inputs
function checkInputs() {
  let status = false;
  if (firstNameRegex == true) {
    status = setSuccessFor(firstNameInput);
  } else {
    status = setErrorFor(
      firstNameInput,
      "Veuillez renseigner un prénom valide"
    );
  }
  if (lastNameRegex == true) {
    status = setSuccessFor(lastNameInput);
  } else {
    status = setErrorFor(lastNameInput, "Ce champ n'est pas valide");
  }
  if (cityRegex == true) {
    status = setSuccessFor(city);
  } else {
    status = setErrorFor(cityInput, "Ce champ n'est pas valide");
  }
  if (addressRegex == true) {
    status = setSuccessFor(addressInput);
  } else {
    status = setErrorFor(addressInput, "Ce champ n'est pas valide");
  }
  if (emailRegex == true) {
    status = setSuccessFor(city);
  } else {
    status = setErrorFor(emailInput, "Ce champ n'est pas valide");
  }
}
// let's create a function to select a row and the third cell

// getting access to the third cell (Supprimez)
// creating a function for that
// extra code to meditate about

/* // creating a button. I wanna delete some articles from the basket if needed        
        function generateButton(button) {  
            let buttonDelete = document.createElement("button")
                buttonDelete.classList.add("btn") 
                buttonDelete.textContent = "Supprimez"
                buttonDelete.addEventListener("click", function() {
                cameraInBasket.length = cameraInBasket.length-1
                window.location.reload()
        })
        }*/
// creating an iteration to sum all the prices
/*for (let i = 0; i < tableBody.rows.length; i++) {
                    tableFooterContent3 = tableFooterContent3 + parseFloat(tableBody.rows[i].cells[2].textContent)
                  }
                  console.log(tableFooterContent3)*/
