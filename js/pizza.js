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

    devolverX(){
        return this.x;
    }
    devolverY(){
        return this.y;
    }
    
}



/*const detectarColision = () => {
    console.log(pizza.y);
      if (pizza.y === 478) {
        score ++; 
        console.log(score);
      } 
        if (plato.x < pizza.x && plato.x + plato.ancho > pizza.x) {
         
              }
            }
      
    */