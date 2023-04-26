/*
1. Create starting page with game title and directions
2. Space pressed to start
3. Create shooter and falling objects 
4. Shooter moves right and left on key pressed 
5. Space pressed to shoot things at objects 
6. Hearts disapear when three objects hit the floor
7. Game over screen
*/
// let fallingObjects = []
function setup() {
  createCanvas(400, 400);
  /*
  Create a loop to add falling objects 
  for  (let i=0, i <10; i++){
  fallingObjects.push(new fallingObject(0,random(width), 10)
  }
  
  */
}

function draw() {
  background(220);
  //shooter.display
  //shooter.update
  //loop through falling objects
}

/* 
class Shooter
constructor(x, y)
  
  update(x, y){
  this.x += x
  this.y +=y
  Make it move based on keys 
  
  }
  
  display(){
    push()
    translate(this.x, this.y)
    rect(this.x, this.y, this.size)
    pop()
  }
*/

/*
class fallingObject{
constructor: x, y, speed
update():{
- Make the objects fall in random locations in the y direction
y += speed
}
display (){
same as Shooter
}
}
*/

/*
function keyPressed(){
  if RIGHT_ Key Pressed, increse x coordinate
  if LEFT_ Key Pressed, decrease x coordinate
  }
*/

