class Plato{
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
        return this.x
    }
    
}

const plato = new Plato (440,540,120,60,plateImage, ctx);