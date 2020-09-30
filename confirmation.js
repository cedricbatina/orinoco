const conf = window.location.search;
const searchConf = new URLSearchParams(conf);
const orderId = searchConf.get("id");
let cameraBasket = JSON.parse(localStorage.getItem("confirmation"));

console.log(orderId);
console.log(conf);
console.log(searchConf);
console.log(localStorage.getItem("total"));
