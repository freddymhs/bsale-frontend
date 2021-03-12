//configure
const url = "https://bsale-backend.herokuapp.com/api/product";

//query to api
fetch (url).then(res=>res.json())
.then(data=>{
  // console.log(data)
  drawCard(data.list[0])
 
})
.catch(err=>{
  console.log()
})


const drawCard =e =>{
  const id = `${e.id}`
  const name = `${e.name}`
  const imagen = `${e.url_image}`
  const price = `${e.price}`
  const discount = `${e.discount}`
  const category = `${e.category}`

  const element = `
              <div>
              <p>${id}</p>
              <img src="${imagen}">
              <p>${name}</p>
              <p>${price}</p>
              <p>${discount}</p>
              <p>${category}</p>
              </div>
  `

  test.insertAdjacentHTML('beforeEnd',element)
}













function alerta(){
  // alert("hola")
      tarjeta = {
  id:1,
  name:"Chocolito",
  url_image:"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
  price:999,
  discount:20,
  category:1,
    }
}
window.onload=alerta();