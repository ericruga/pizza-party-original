const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let sliceImage = new Image();
sliceImage.src = './images/pizzanobackground.png';
let plateImage = new Image();
plateImage.src = './images/platoremoved.png'
let tallarinImage = new Image();
tallarinImage.src = '../images/tallarin.png'


let score = 0;
let pizzas = [];

//const tallarin = new Tallarin (440,540,120,60,tallarinImage, ctx);

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
  pizzas.forEach((pizza,i) =>  {
  
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
            pizza.y += 10;
            pizza.dibujar();
          } else if (score > 26 && score <= 32){ 
            //Nivel  5 de dificultad
            pizza.borrar();
            pizza.y += 12;
            pizza.dibujar();
           }else if (score > 32 && score <= 37){ 
            //Nivel  6 de dificultad
            pizza.borrar();
            pizza.y += 14;
            pizza.dibujar();
           } else {
            //Nivel supremo de dificultad
            pizza.borrar();
            pizza.y += 16;
            pizza.dibujar();
           }
           if (pizza.detectarColision(plato)){
            pizza.borrar();
            pizzas.splice(i,1);  
            score++;
            drawScore();
            }  
          if (pizza.detectarColision(tallarin)){
            pizza.borrar();
            pizzas.splice(i,3);
            alert("GAME OVER");
            document.location.reload();
           
          
          }
  }
  )}
      

  const cargaInicial = () => {    
    
    tallarin.dibujar();
    plato.dibujar();
    
    setInterval(caerPizza,200);
    setInterval(crearPizzas, 3900);
  }
  
  const moverPlato = (e) => {
    plato.borrar();
    if (e.key === "ArrowLeft") {
      if (plato.x > 5) {
        plato.x = plato.x -15;
      }
    }
    if (e.key === "ArrowRight") {
      if (plato.x < 755) {
        plato.x = plato.x +15;
      }
    }  
    plato.dibujar();
  };


  function drawScore() {
    ctx.font = "45px Cambria";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Your score is:${score}`, 15, 590);
}


const divMenu = document.getElementById("startingMenu");
const canvasDiv = document.getElementById("divCanvas");
const startButton = document.getElementById("botonMenu");
//const restartButton = document.getElementById("botonRestart")


startButton.addEventListener("click", function(){
  cargaInicial()
  divMenu.classList.add("hidden")
  canvasDiv.classList.remove("hidden")
})
// restartButton.addEventListener("click",function(){
//   divMenu.classList.add("hidden")
// })
  window.addEventListener("keydown", moverPlato);
