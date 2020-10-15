//code for the great Container
myFunction();
// here ends code for elements before #cameras
// getting the the selected cameras
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
// generating the tbody
let total = 0;
let produit = [];
for (let i = 0; i < cameraInBasket.length; i++) {
  generateTbody(i);
} // end of tbody
// calling the tfoot !!!
let tableFooterContents = document.getElementById("tableFooterContents");
let tableFooterContent1 = document.createElement("td");
tableFooterContents.appendChild(tableFooterContent1);
tableFooterContent1.textContent = "Total de la commande:";
let tableFooterContent2 = document.createElement("td");
tableFooterContents.appendChild(tableFooterContent2);
tableFooterContent2.setAttribute("id", "total");
tableFooterContent2.textContent = total + " €";
const buttonSup = document.getElementsByClassName("delete"); // creating a button to delete the product if needed
for (let index = 0; index < buttonSup.length; index++) {
  suppressCamera(index); // calling the function to suppress camera from the basket
}
// end of table
// the beginning of formular
const formulaire = document.getElementById("formulaire");
const contactFormular = document.getElementById("contactFormular");
formulaire.appendChild(contactFormular);
contactFormular.setAttribute("novalidate", "");
const formularFieldset = document.getElementById("formularFieldset");
const formularLegend = document.getElementById("legend");
formularLegend.innerHTML = "Formulaire de contact";
// code to check the regex
//vérifie les inputs du formulaire
checkInputs = () => {
  //Controle Regex
  let nameRegex = /[a-zA-Z]/;
  let numberRegex = /[0-9]/;
  //Source pour vérification email => emailregex.com
  let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y;
  let specialRegex = /[§!@#$%^&*(),.?":{}|<>]/;
  let checkMessage = "";
  //Récupération des inputs
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let checkMessageFirstName = document.getElementById("firstNameError")
  let checkMessagelastName = document.getElementById("lastNameError")
  let checkMessageCityError = document.getElementById("cityError")
  let checkMessageAddressError = document.getElementById("addressError")
  let checkMessageEmailError = document.getElementById("emailError")
  let checkCount = 0
  //tests des différents input du formulaire
  //Test du nom => aucun chiffre ou charactère spécial permis
  if (
    numberRegex.test(firstName) == true ||
    specialRegex.test(firstName) == true ||
    firstName == ""
  ) {
    checkMessageFirstName.textContent = " Vérifier votre prénom";
  } else {
    checkCount++
  }
  //Test du nom => aucun chiffre ou charactère spécial permis
  if (
    numberRegex.test(lastName) == true ||
    specialRegex.test(lastName) == true ||
    lastName == ""
  ) {
    checkMessagelastName.textContent = " Vérifier votre Nom";
  } else {
        checkCount++

  }
  //Test du mail selon le regex de la source L256
  if (emailRegex.test(email) == false) {
    checkMessageEmailError.textContent = " Vérifier votre email";
  } else {
        checkCount++
  }
  //Test de l'adresse => l'adresse ne contient pas obligatoirement un numéro de rue mais n'a pas de characteres spéciaux
  if (specialRegex.test(address) == true || address == "") {
    checkMessageAddressError.textContent = " Vérifier votre adresse";
  } else {
        checkCount++
  }
  //Test de la ville => aucune ville en France ne comporte de chiffre ou charactères spéciaux
  if (
    (specialRegex.test(city) == true && checkNumber.test(city) == true) ||
    city == ""
  ) {
    checkMessageCityError.textContent = " Vérifier le nom de votre ville";
  } else {
        checkCount++
  }
  if (checkCount === 5)
  {
    return true
  }
  else{
    return false
  }
};
// here ends code to check the regex
// here ends the formular
// creating a button to submit
const formularButton = document.createElement("button");
contactFormular.appendChild(formularButton);
formularButton.innerHTML = "Confirmer l'achat";
formularButton.setAttribute("type", "submit");
formularButton.classList.add("btn");
formularButton.addEventListener("click", function (event) {
  return setButton(event);
  
});
function myFunction() {
  const greatContainer = document.getElementById("greatContainer");
  const mainTitle = document.createElement("h1");
  greatContainer.appendChild(mainTitle);
  mainTitle.classList.add("jumbotron", "text-center");
  mainTitle.innerHTML = "Votre panier !";
  const mainParagraph = document.createElement("p");
  greatContainer.appendChild(mainParagraph);
  mainParagraph.classList.add("text-center");
  mainParagraph.innerHTML = "Voici le récapitulatif de votre panier";
}
// here ends code for submit button
// down below we find the functions
//function to suppress camera
function suppressCamera(index) {
  const element = buttonSup[index];
  element.addEventListener("click", function (event) {
    const id = event.currentTarget.id;
    cameraInBasket.splice(id, 1);
    localStorage.setItem("panier", JSON.stringify(cameraInBasket));
    window.location.reload();
  });
}
//end of function to suppress camera
//function to generate tbody
function generateTbody(i) {
  produit.push(cameraInBasket[i]._id);
  total += cameraInBasket[i].price / 1000;
  tableBody.innerHTML +=
    "<tr><td>" +
    cameraInBasket[i].name +
    "</td><td>" +
    cameraInBasket[i].price / 1000 +
    " €" +
    "</td><td>" +
    "<button " +
    i +
    " id='delete' class='delete btn'>Retirez</button>" +
    "</td></tr>";
}
// end of tbody generating function
//function for submition  ////////got many problems to match my form
function setButton(event) {
  event.preventDefault();
  const checkValid = checkInputs();
  if (!checkValid){
    return;
  }
  let contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
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
      window.location.href =
      "confirmation.html?id=" + res.orderId + "&total=" + total;
      produit.splice(0, cameraInBasket.length);
      tableBody.innerHTML = ""
  //window.location.reload();
    })
    .catch(function (res) {
     alert(res)
    });
}
