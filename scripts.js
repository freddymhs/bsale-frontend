//configure
const url = "https://bsale-backend.herokuapp.com/api/product";




//query to api
fetch (url).then(res=>res.json())
.then(data=>{
  console.log(data)
})
.catch(err=>{
  console.log()
})














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