class Pizza{
    constructor(x,y,ancho,alto,imagen,ctx){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.imagen = imagen;
        this.ctx = ctx;

    }
    dibujar() {
        ctx.drawImage (this.imagen,this.x, this.y, this.ancho, this.alto);
    }
    
    borrar () {
        ctx.clearRect (this.x, this.y, this.ancho, this.alto);
    }
    
}

let pizza = [];
let pizzas = [];

const crearPizzas = () => {
    const randomPositionPizzaX = Math.floor(Math.random() * 920);
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

    }
}