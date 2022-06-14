const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let sliceImage = new Image();
sliceImage.src = '../images/pizzanobackground.png';
let plateImage = new Image();
plateImage.src = '../images/platoremoved.png'



const startButton = 0;
let score = 0;
let totalScore = [];




const detectarColision = () => {

    if (pizza.y == 478) {
      if (plato.x < pizza.x && plato.x + plato.ancho > pizza.x) {
        score ++; // emepezar mx aqui
        console.log(score);
            }
        }
    }
}


  const cargaInicial = () => {    
      
    plato.dibujar();
    //cutter.dibujar();
   // setInterval(detectarColision,150);
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

window.addEventListener("load", cargaInicial);
// Esto de aquí abajo no me funciona cuando comento "load"
//window.addEventListener("startButton",cargaInicial)

window.addEventListener("keydown", moverPlato);
//window.addEventListener("keydown", dispararCutter);
