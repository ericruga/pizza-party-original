class Tallarin {
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
    devolverX(){
        return this.x
    }
    
}


const tallarin = new Tallarin (0,599,canvas.width,10,tallarinImage, ctx);