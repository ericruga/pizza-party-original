const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let sliceImage = new Image();
sliceImage.src = '../images/pizzanobackground.png';
let plateImage = new Image();
plateImage.src = '../images/platoremoved.png'



const startButton = 0;
let score = 0;
let totalScore = [];


let pizza = [];
let pizzas = [];

const crearPizzas = () => {
    const randomPositionPizzaX = Math.floor(Math.random() * 150);
    const pizza = new Pizza(
      randomPositionPizzaX,
      0,
      80,
      80,
      sliceImage,
      ctx
    );
    pizzas.push(pizza);
  }


const caerPizza = () => {
for (let pizza of pizzas){
    pizza.borrar();
    pizza.y +=5;
    pizza.dibujar();

  /* if(score === 10){
      pizza.y += 7;
    } else if (score === 20){
      pizza.y += 10;
    } else if(score === 23){
      pizza.y += 10;
    } else { pizza.y += 15 }
  }
}*/
}}

const detectarColision = () => {
  //console.log(plato.devolverX());
  
  for (let pizza of pizzas){
    if(480 == pizza.y && pizza.x <= plato.devolverX() + plato.ancho){
      
      
      }
      //score++;
    //pizzas.splice(pizza,0)
      //pizzas.splice(pizza,0)
    }
  }

    
      



  const cargaInicial = () => {    
      
    plato.dibujar();
    //cutter.dibujar();
    setInterval(detectarColision,150);
    setInterval(caerPizza,200);
    setInterval(crearPizzas, 2500);
  }
  
  const moverPlato = (e) => {
    plato.borrar();
    if (e.key === "ArrowLeft") {
      plato.x -= 15;
    }
    if (e.key === "ArrowRight") {
      plato.x += 15;
    }  
    plato.dibujar();
  };


  function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}


const divMenu = document.getElementById("startingMenu");
const canvasDiv = document.getElementById("divCanvas");
const startingButton = document.getElementById("botonMenu");


startingButton.addEventListener("click", function(){
  cargaInicial()
  divMenu.classList.add("hidden")
  canvasDiv.classList.remove("hidden")})
  window.addEventListener("keydown", moverPlato);
