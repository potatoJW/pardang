var img;
var skin;
var lip;
var hair;
var frame;
var arrow;
var reset;
  var a=0;

var myFont;


var sc=255;
var hr = 255, hg= 255, hb=255;


function setup() {
  createCanvas(1500,1500);
  img = loadImage("pardang.jpg");
  skin = loadImage("skin.png");
  lip = loadImage("lip.png");
  hair = loadImage("hair.png");
  frame = loadImage("frame.png");
  arrow = loadImage("arrow.png");
  reset = loadImage("reset.png");
  
 myFont = loadFont('a.otf'); 
  
 frameRate(10000);
 
  
}

function draw(){
  background(255);
  
  // original  
  image(img,150,100,400,480);
  image(frame,139,63,420,560);
  
  // interaction image
  image(img,740,100,400,480);
  tint(sc,180);
  image(skin,740,100,400,480);
  tint(255,0,0,100);
  image(lip,740,100,400,480);
  tint(hr,hg,hb,130);
  image(hair,740,100,400,480);
  noTint();
  
  //other image
  image(frame,729,63,420,560);
  
  image(arrow,533,230,200);
  
  //text
  fill('#ED4F4F');
  textFont(myFont);
  text("Hair color red percent :",1160,140);
  
   fill('#34AD63');
  textFont(myFont);
  text("Hair color green percent :",1160,240);
  
  
   fill('#4F72ED');
  textFont(myFont);
  text("Hair color blue percent :",1160,340);
  
  fill(0);
  textFont(myFont);
  text("Skin Black & White percent :",1160,530);
  
  
  
  //bum wee
  if(sc >255) sc =255;
  if(sc <0) sc =0;
  
  if(hr >255) hr =255;
  if(hr <0) hr =0;

  if(hg >255) hg =255;
  if(hg <0) hg =0;

  
  if(hb >255) hb =255;
  if(hb <0) hb =0;
 
//skinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

  //skin color box
  fill(0);
  rect(1160+sc,546,23,23);
  
  //mouse control skin  
   if(540<mouseY && mouseY<579){
   if(mouseIsPressed){
      sc = mouseX-1160;     
    }
  }
  
  
  // skin color bar
  noFill();
  strokeWeight(3);
  rect(1160,550,255,15);
  
//redddddddddddddddddddddddddddddddddddd  
  
  // hair red  color bar
  noFill();
  strokeWeight(3);
  rect(1160,164,255,15);
    
   //hair red box
  fill(255,0,0);
  rect(1160+hr,160,23,23);
  
  
  //mouse control hair red 
  if(155<mouseY && mouseY<193){
    if(mouseIsPressed){
      hr = mouseX-1160;     
    }
  }
  
//greeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen
  
  // hair green  color bar
  noFill();
  strokeWeight(3);
  rect(1160,264,255,15);
    
   //hair green box
  fill(0,255,0);
  rect(1160+hg,260,23,23);
  
  
  //mouse control green red 
  if(255<mouseY && mouseY<293){
    if(mouseIsPressed){
      hg = mouseX-1160;     
    }
  }
  
//blueeeeeeeeeeeeeeeeeeeeeeeeeee
  
  // hair blue  color bar
  noFill();
  strokeWeight(3);
  rect(1160,364,255,15);
    
   //hair blue box
  fill(0,0,255);
  rect(1160+hb,360,23,23);
  
  
  //mouse control blue red 
  if(355<mouseY && mouseY<393){
    if(mouseIsPressed){
      hb = mouseX-1160;     
    }
  }
  
  
  //reset button
  imageMode(CENTER);
 image(reset,1400,100,100+a,100+a);
 if((1350<mouseX&&mouseX<1450)&&(50<mouseY&&mouseY<150)){
  a= 20; 
  if(mouseIsPressed){
  sc=255;
  hr = 255;
  hg= 255; 
  hb=255;
  }
 }else a=0;
 
 imageMode(CORNER);
 
  
  
  
}
