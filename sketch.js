function setup() {
  box = createSprite(200,200); 
  drawSprite()
  
 
}


var box;
function draw() {
background(30);
  if(keyDown(DOWN_ARROW))
  {
  background("red");
  
  }  

  if(keyDown(RIGHT_ARROW))
  {
  background("red");

  }

  if(keyDown(LEFT_ARROW))
  {
  background("red");

  }

  if(keyDown(UP_ARROW))
  {
  background("red");

  }



}

