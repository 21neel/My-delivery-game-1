var boy,boy_collided;
var bg,bg_img;
var log_img,log2;
var rock0,rock1;
var house,button
var mainboy,mainboy_img;
var gameState=1
function preload(){
  bg_img = loadImage("assets/bg.gif");
 //boy_img = loadAnimation("assets/boy1.gif","assets/boy2.gif","assets/boy3.gif","assets/boy4.gif","assets/boy5.gif","assets/boy6.gif","assets/boy7.gif","assets/boy8.gif","assets/boy9.gif");
  mainboy_img = loadImage("assets/mainboy.png")
  //log2 = loadImage("assets/log2.png");
  log_img = loadImage("assets/log1.png");
  //rock0 = loadImage("assets.rock0.png")
  //rock1 = loadImage("assets/rock.png")
 // house = loadImage("")
}


function setup() {
  createCanvas(1440,790);
  //boy = createSprite(400, 200, 50, 50);
  //boy.addAnimation("riding",boy_img);

 //bg=createCanvas(displayWidth,displayHeight)
  
 //bg.addAnimation(bg_img)

  mainboy = createSprite(120,650,10,10);
  mainboy.addImage(mainboy_img);
  mainboy.scale = 0.09

  log1 = createSprite(450,420,10,10);
  log1.addImage(log_img)
  log1.scale = 0.05

button=createSprite(1390,100,30,30)
button.shapeColor= "red"

button2=createSprite(1390,100,30,30)
button2.shapeColor= "blue"

}

function draw() {

if (gameState===1) {
  background(bg_img)

 mainboy.visible=true
 button.visible=true
button2.visible=false
  if(keyDown("up"))
  {
    mainboy.y=mainboy.y-2
    mainboy.rotation=360
  }

  if(keyDown("down"))
  {
    mainboy.y=mainboy.y+2
  }

  if(keyDown("right"))
  {
    mainboy.x=mainboy.x+2
  }


  if(keyDown("left"))
  {
    mainboy.rotation=45
    mainboy.x=mainboy.x-2
  }
   
}
if (gameState===2) {
  background("black")
  mainboy.visible=false
  button.visible=false
  button2.visible = true
}
 if (mousePressedOver(button)) {
   gameState=2
 }



  drawSprites();
}