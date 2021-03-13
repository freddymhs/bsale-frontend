
// inputs
const inputSearch = document.querySelector('#input-search');
const output = document.querySelector('#maincontent');

// event content loaded on page
document.addEventListener('DOMContentLoaded', fetchApi());


//search for input
inputSearch.addEventListener("change", ()=>{
  iconloader();
  
  let newSearch = inputSearch.value;   fetchApi(newSearch);
})



// main function
async function fetchApi(matchQuery) {
  let res;
  if (matchQuery) {
    res =  await getProducts("http://localhost:3000/api/product/"+matchQuery); // search a product
console.log("busqueda personalizada")
  console.log(res)
  }   else {
  res = await getProducts('http://localhost:3000/api/product');  // all products
  console.log("todos los resultados")
  console.log(res)
  }


  //clear input to print result
  output.innerHTML="";
  res.map((data)=>{
    const      htmlString  =`
        <div class="card">
          <div>
            <p>Descuento de ${data.discount}</p>
          </div>
          <img src="${data.url_image}" alt="Avatar" style="width:100%">
          <div class="container">
            <b>${data.name}</b>
          </div>
          <div class="container">
            <div>
              <p>${data.price}</p>
            </div>
          </div>
        </div>
`;  
  
  let outputString = document.createElement('div');
  outputString.classList.add('contentCard' )
  outputString.innerHTML = htmlString;
  output.appendChild(outputString)
  })



//   res.forEach((data) => {
//     // new card
//     let htmlstring
  
//     const contentCard = document.createElement('div');
   
//     contentCard.className = 'contentCard';
//      htmlstring = `
//         <div class="card">
//           <div>
//             <p>Descuento de ${data.discount}</p>
//           </div>
//           <img src="${data.url_image}" alt="Avatar" style="width:100%">
//           <div class="container">
//             <b>${data.name}</b>
//           </div>
//           <div class="container">
//             <div>
//               <p>${data.price}</p>
//             </div>
//           </div>
//         </div>
// `;


    // // insert content to the card
    // contentCard.innerHTML = htmlstring;
    // output.append(contentCard);
    
  // });
}

// function fetch return data json
async function getProducts(fromUrl) {
  return fetch(fromUrl)
    .then((response) => response.json())
    .then((data) => {
      return(data)
    })
    .catch((err) => console.log(err));
}

setInterval(() => {
  console.log(inputSearch.value);
}, 3000);


function iconloader(){
  output.innerHTML=` <div class="loader">Loading...</div>`
}