const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let sliceImage = new Image();
sliceImage.src = './../images/sliceofpizza.png';
let plateImage = new Image();
plateImage.src = './../images/platoremoved.png'



const startButton = 0;
let score = 32;
let pizza = [];
let pizzas = [];

const crearPizzas = () => {
    const randomPositionPizzaX = Math.floor(Math.random() * 800);
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
    if(score >= 0 && score <= 8){
      //Nivel 1 de dificultad
      pizza.borrar();
      pizza.y += 4;
      pizza.dibujar();
    } else if (score > 8 && score <= 14){
      //Nivel 2 de  dificultad
      pizza.borrar();
      pizza.y += 6;
      pizza.dibujar();
    } else if (score > 14 && score <= 20 ){
      //Nivel 3 de dificultad
      pizza.borrar
      pizza.y += 8;
      pizza.dibujar();
    } else if (score > 20  && score <=26){
      //Nivel 4 de dificultad
      pizza.borrar();
      pizza.y += 11;
      pizza.dibujar();
    } else if (score > 26 && score <= 32){ 
      //Nivel  5 de dificultad
      pizza.borrar();
      pizza.y += 14;
      pizza.dibujar();
     }else if (score > 32 && score <= 37){ 
      //Nivel  6 de dificultad
      pizza.borrar();
      pizza.y += 16;
      pizza.dibujar();
     } else {
      //Nivel supremo de dificultad
      pizza.borrar();
      pizza.y += 18;
      pizza.dibujar();
     }
  }
}


const detectarColision = () => {
  //console.log(plato.devolverX());
  
  for (let pizza of pizzas){
    if(480 == pizza.y && pizza.x <= plato.devolverX() + plato.ancho){
      
      //score++;
      }
      //score++;
    //pizzas.splice(pizza,0)
      //pizzas.splice(pizza,0)
    }
  }

    
      



  const cargaInicial = () => {    
      
    plato.dibujar();
    setInterval(detectarColision,150);
    setInterval(caerPizza,200);
    setInterval(crearPizzas, 3900);
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
const restartButton = document.getElementById("botonRestart")


startingButton.addEventListener("click", function(){
  cargaInicial()
  divMenu.classList.add("hidden")
  canvasDiv.classList.remove("hidden")
})
restartButton.addEventListener("click",function(){
  cargaInicial()
})
  window.addEventListener("keydown", moverPlato);
