const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const divMenu = document.getElementById("startScreen");
const canvasDiv = document.getElementById("divCanvas");
const startButton = document.getElementById("botonMenuInit");
const restartButton = document.getElementById("botonRest");
const ending = document.querySelector("#gameOver");
const scoreFinal = document.querySelector('#printearScore')

// Declaración de las imagenes en Canvas
let sliceImage = new Image();
sliceImage.src = './images/pizzanobackground.png';
let plateImage = new Image();
plateImage.src = './images/platoremoved.png'
let tallarinImage = new Image();
tallarinImage.src = './images/tallarin.png'

// Declaración de variables
let score = 16;
let pizzas = [];

//const plato = new Plato (440,540,120,60,plateImage, ctx);
//const tallarin = new Tallarin (0,599,canvas.width,10,tallarinImage, ctx);


// Creación del objeto pizza usando Math.random
// Metiendo cada pizza dentro del array de pizzas
const crearPizzas = () => {
    const randomPositionPizzaX = Math.floor(Math.random() * 780);
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
    
// Creación del movimiento del objeto pizza
// Añadimos if, else if y else para obtener diferentees grados de dificultad
// Usamos el motor de colisiones para detectar el choque  con el plato y hacer +1 en el score
// Usamos el  método .splice para detectar únicamente el primer choque entre objetos
// Usamos la misma técnica para detectar el choque con el tallarin, que marca la deathline
// En este punto aplicamos el Game Over
const caerPizza = () => {
  pizzas.forEach((pizza,i) =>  {
  
          if(score >= 0 && score <= 8){
            // Nivel 1 de dificultad
            pizza.borrar();
            pizza.y += 12;
            pizza.dibujar();
          } else if (score > 8 && score <= 14){
            // Nivel 2 de  dificultad
            pizza.borrar();
            pizza.y += 18;
            pizza.dibujar();
          } else if (score > 14 && score <= 20 ){
            // Nivel 3 de dificultad
            pizza.borrar();
            pizza.y += 22;
            pizza.dibujar();
          } else if (score > 20  && score <=26){
            // Nivel 4 de dificultad
            pizza.borrar();
            pizza.y += 24;
            pizza.dibujar();
          } else if (score > 26 && score <= 32){ 
            // Nivel  5 de dificultad
            pizza.borrar();
            pizza.y += 27;
            pizza.dibujar();
           } else {
            // Nivel supremo de dificultad
            pizza.borrar();
            pizza.y += 30;
            pizza.dibujar();
           }
           if (pizza.detectarColision(plato)){
            pizza.borrar();
            pizzas.splice(i,1);  
            score++;
            
            }  
          if (pizza.detectarColision(tallarin)){
            ctx.clearRect(0, 0, 880, 620);
            pizza.borrar();
            pizzas.splice(i,1);
            gameOver();
          }
      }
  )}
      
// Creación del movimiento del plato a izquierda y derecha, quedando delimitado dentro del canvas
  const moverPlato = (e) => {
    plato.borrar();
    if (e.key === "ArrowLeft") {
      if (plato.x > 5) {
        plato.x = plato.x -25;
      }
    }
    if (e.key === "ArrowRight") {
      if (plato.x < 755) {
        plato.x = plato.x +25;
      }
    }  
    plato.dibujar();
    
  };

//Creamos la función de final del juego
function gameOver (){
  ending.classList.remove("hidden")
  canvasDiv.classList.add("hidden")
  scoreFinal.innerText = score;
}

// Creación de la función que nos carga el juego
// Creamos una nueva pizza cada 4s y chequeamos la situación del juego cada 0,5s
// Dibujamos el plato, el tallarin y  la puntuación  en  el canvas

  const cargaInicial = () => {    
    
    setInterval(caerPizza,500);
    setInterval(crearPizzas, 3900);
    plato.dibujar();
    tallarin.dibujar();

  }

  
  //function limpiarCanvas() {
      //ctx.clearRect(0, 0, 880, 620);
 
   
  

// Añadimos los listeners de mouse y teclado
// Cuando hacemos click en el botón de start, añadimos el
// menú del canvas y ocultamos el menú inicial
startButton.addEventListener("click", function(){
  cargaInicial()
  divMenu.classList.add("hidden")
  canvasDiv.classList.remove("hidden")
})
restartButton.addEventListener("click", function(){
  window.location.reload()
});
window.addEventListener("keydown", moverPlato);
