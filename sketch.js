
function preload() {
    //load the images here
     bg = loadImage("images/garden.png");
     tomImage1 = loadAnimation("images/tomOne.png");
     tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
     tomImage3 = loadAnimation("images/tomFour.png");
      
     jerryImg1 = loadAnimation("images/jerryOne.pmg")
    jerryImg2  = loadAnimation("images/jerryTwo.png","image/jerryThree.png");
    jerryImg3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom =createSprite(870,600);
 tom .addAnimation("tomSleeping",tomImg1);
 tom.scale=0.2;
 jerry =createSprite(200,600);
 jerry.addAnimation("jerryStandimg",jerryImg1);
 jerry.scale =0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
background(bg);
  if(tom.x -jerry.x<(tom.width-jerry.width)/2)
  { 
      tom.velocityX=0;

      tom.addAnimation("tomlastImage",tomImg3);
      tom.x=300;
      tom.scale=0.2;
      
      tom.changeAnimation("tomLastImage");
      jerry.addAnimation("jerryLastImage",jerryImg3);
      jerry.scale=0.15;

      jerry.changeAnimation("jerryLastImage");
  
  }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocity=-5;
tom.addAnimation("tomRunning",tomImg2);

tom.changeAnimation("tomRunning");

jerry.addAnimation("jerryTeasing",jerryImg2);
jerry.frameDelay=25;

jerry.changeAnimation("jerryTeasing");
}

}
