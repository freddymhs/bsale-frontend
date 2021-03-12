

  let navIcon = document.getElementById("nav-icon1");
  let menu = document.querySelector(".nav_menu");
  
  


// premium

 const storeimage = document.querySelector("#store_illustration");

  if (storeimage) {
    window.onload = function(){
      storeimage.classList.add("open");
    };
  }

  // social icons hover
  
  const triggers = document.querySelectorAll('.social-img')
  const allMenu = document.querySelectorAll('.menu_item')
  const socialMenu = document.querySelectorAll('.nav_social') 
  
  function handleEnter() {
      this.classList.add('trigger-enter');
      setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
      }
      
      function handleLeave() {
        this.classList.remove('trigger-enter', 'trigger-enter-active');
      }
  
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
  
  
  
  
  
  navIcon.addEventListener("click", function(){
  
  
  
      this.classList.toggle("open")
      menu.classList.toggle("open_menu")
  
  
      allMenu.forEach((element, i) => {
          setTimeout(() => {
              element.classList.toggle("anotherclass");
          }, i * 200);
        });
  
      
  
    });



  

    const popMobile = document.querySelector('.pop_mobile');
    const closeMobile = document.getElementById('no_button_mobile');

    if (popMobile) { 
    
    function mobileInsta() {
      popMobile.classList.add("open");
    }
    
    setTimeout(mobileInsta, 12440);
    
    closeMobile.addEventListener('click', function() {
      popMobile.classList.remove("open");
    });
    

  }

// POPUP


popUp = document.getElementById("popup");

if (popUp) {

function onMouseOut(event) {
  // If the mouse is near the top of the window, show the popup
  // Also, do NOT trigger when hovering or clicking on selects
  if (
    event.clientY < 50 &&
    event.relatedTarget == null &&
    event.target.nodeName.toLowerCase() !== 'select') {
    // Remove this event listener
    document.removeEventListener("mouseout", onMouseOut);

    // Show the popup
    popUp.classList.add("mystyle");
  }
}

}

document.addEventListener("mouseout", onMouseOut);










// POPUP create a button to exit

let bye = document.getElementById("bye_button");

if (bye) { 

bye.onclick = function() {
  document.getElementById("popup").style.display = "none"
};


let pops = document.getElementById("popup");

pops.onclick = function() {
  document.getElementById("popup").style.display = "none"
};

}



const storeFront = document.querySelector(".store_open")

if (storeFront) { 

window.onload = function(){
  storeFront.classList.add("open");
};

}








const featureImages = document.querySelectorAll('.premium_open');

if (featureImages) { 

featureImages.forEach(myFunctionTest);

function myFunctionTest(fruit) {



  function obCallback(payload) {
    if (payload[0].isIntersecting == true) {
      fruit.classList.add("open")
    } else {
      fruit.classList.remove("open")
    }
    
  }

  const ob = new IntersectionObserver(obCallback);
  ob.observe(fruit);


}


} // end of if featureImages





// scale image while scrolling


const scroller = document.querySelector('.wrapper_store');

if (scroller) { 

window.addEventListener("scroll", scaley);

function scaley() {
  scroller.classList.add("scrolling");
}

}





const sitePop = document.querySelector('.popsite')
const closePop = document.querySelector('.x')

window.addEventListener("scroll", fromUp);
function fromUp() {
  sitePop.classList.add("active")
}


closePop.addEventListener("click", closeUp);
function closeUp() {
  sitePop.classList.add("end")
}

