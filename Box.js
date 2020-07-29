class Box{
  constructor(x,y){
      var options={ 
          isStatic: false,
          restitution : 0.3,
          friction : 1,
          density: 1.2
      }
     
   this.image = loadImage("2.png");
      this.body = Bodies.rectangle(x,y, 50,50, options);
      World.add(world,this.body);
      this.Visibility = 255;
      
  }
display(){
  if(this.body.speed < 3){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y)
    imageMode(CENTER);
    image(this.image,0,0,60,60);
    pop();
  }
  else{
    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(255, this.Visibility);
    image(this.image, this.body.position.x, this.body.position.y, 60,60); 
    pop();
  }
}
score(){

  if(this.Visibility < 0 && this.Visibility > -105){
    
    score++;
    }
  }
}