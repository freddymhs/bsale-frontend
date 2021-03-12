//inputs
let inputSearch = document.querySelector("#input-search")
let output  = document.querySelector("#maincontent")


//event content loaded on page
document.addEventListener("DOMContentLoaded", loading());

//main function
async function loading(typequery){
let res;

if(typequery){
  // res =  await getProducts("https://bsale-backend.herokuapp.com/api/product"); // get all products
}else{
   res =  await getProducts("https://bsale-backend.herokuapp.com/api/product"); // get all products
}

//
let qt = res.forEach(character => {
//new card
var contentCard = document.createElement("div")
contentCard.className = "contentCard";

//the new content to this card
const htmlstring = `
<div class="card">
          <div>
            <p>discount</p>
          </div>
          <img src="url_image" alt="Avatar" style="width:100%">
          <div class="container">
            <b>nombre</b>
          </div>
          <div class="container">
            <div>
              <p>price</p>
            </div>
            <div>
              category
            </div>
          </div>
        </div>
`
// insert content to the card
contentCard.innerHTML = htmlstring;
output.appendChild(contentCard) // append
  })





// let qwerty = await res.map(r =>{
//   htmlString =+ `<p>hola</p>`;
// })

  // output.appendChild(qwerty)

// console.log(htmlString)
// console.log(outputString)



}

// function fetch return data json
async function getProducts(fromUrl){
  return fetch(fromUrl)
 .then(response => response.json())
  .then(data => {
    return (data.list)
  })
  .catch(err =>  console.log(err))
}


setInterval(function(){ 
  console.log(inputSearch.value)
 }, 3000);


