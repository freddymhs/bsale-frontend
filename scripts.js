
// inputs output html
const inputSearch = document.querySelector('#input-search');
const output = document.querySelector('#maincontent');


/* event content loaded on page*/
document.addEventListener('DOMContentLoaded', fetchApi());


/* write new content ... search */
inputSearch.addEventListener("change", ()=>{
  iconloader();
  let newSearch = inputSearch.value;  
  fetchApi(newSearch);
})




/* main function */
async function fetchApi(matchQuery) {
  const url = "https://bsale-backend.herokuapp.com/api/product/";
  // const url ="http://localhost:3000/api/product/"

  let res;
  if (matchQuery) {
    res =  await getProducts(url+matchQuery); // search a specific product by name
  }   else {
  res = await getProducts(url);  // all products
  }



  output.innerHTML="";

  /* new input result html */
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
}

/* function fetch return data json */
async function getProducts(fromUrl) {
  return fetch(fromUrl)
    .then((response) => response.json())
    .then((data) => {
      return(data)
    })
    .catch((err) => console.log(err));
}


/* function  return icon loading  */
function iconloader(){
  output.innerHTML=` <div class="loader">Loading...</div>`
}