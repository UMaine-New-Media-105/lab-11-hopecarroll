/*
1. Create triangle shooter
2. Create moving craters
3. Space Pressed to make the triangle shoot
4. Key Pressed to move the triangle 
5. Collison detection to split the craters in half
*/

// cratersFloating = []
function setup() {
  createCanvas(400, 400);
}
  /*
  create a loop to keep craters flaoting in random places
  for  (let i=0, i <20; i++){
  cratersFloating.push(new Car(random(height), random(width),2)
  }
  */

function draw() {
  background(220);
  /*
  triangle.display
  triangle.update
  */
  
 // if circle collides with one crater then crater splits
  // for (let i = 0; i < cratersFloating.size; i++){
  // let collided = craterCollosionDetection(circle, cratersFloating[i])
  //if collided then split crater in 2
  //}
}
/*
class Triangle{
constructor(x, y)
  
  update(x, y){
  this.x += x
  this.y +=y
  Make it move based on keys 
  
  }
  
  display(){
  push()
    translate(this.x, this.y)
    triangle(this.x, this.y, this.size)
    pop()
  }
  */

/*
class Craters 
constructor: x,y, speed
update (): {
- make the crater move in random locations around the screen
x += speed
y += speed

display (){
push()
    translate(this.x, this.y)
    ellipse(this.x, this.y, this.size)
    pop()
}
}
/*
class Circles (){
constructor: x, y, speed
update ():{
Space Pressed
}
display (){
same as Craters
}
}
*/
function craterCollosionDetection(Craters, Circles ) {
  /*
  calculate if the distance between craters and circles is less than some value
  inputs: crater and circle 
  let dist = distance between crater and circle
  if dist is less than 10 than retrun true else false
  */
}
/*
function keyPressed()
  if UP_Key Pressed decrease y coordinate 
  if DOWN_ Key Pressed, increase y coordinate
  if RIGHT_ Key Pressed, increase x coordinate
  if LEFT_ Key Pressed, decrease x coordinate
  
*/
