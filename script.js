async function getMakeupProducts() {

try{
  let response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
  console.log(response);
  let data = await response.json();
  console.log(data);
  let display ="";
  data.map((values)=>{
  display+= `<div class="card">
  <h5 class="brand">${values.brand}</h5>
  <h4 class="name">${values.name}</h4>
  <img src="${values.image_link}" alt="image" class="image"><br>
  <p><a href="${values.product_link}" target="_blank">Product Link</a></p>
  <p class="description">${values.description}</p>
  <p class="price">Price: $${values.price}</p>
</div>`
});
document.getElementById("cards").innerHTML = display;

}catch(error){
console.log(`The error: ${error}`);
}

}
getMakeupProducts();