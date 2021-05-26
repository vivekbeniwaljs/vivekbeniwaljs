class PaperObject {

    constructor(x, y) {
    var option = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    this.image = loadImage("sprites/PaperObject.png");
    }


    display(){

this.body.position.x = mouseX
this.body.position.y = mouseY

  

    }


  };