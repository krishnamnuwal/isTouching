var fixedRect,movingRect,rect1,rect2;
 function setup(){ 
 createCanvas(600,600);
  fixedRect=createSprite(300,300,40,200); 
  movingRect=createSprite(200,200,20,100);
  rect1=createSprite(100,64,30,120);
  rect2=createSprite(230,100,25,69); 


  } 
  function draw(){
  background("white");
   movingRect.x=mouseX; 
   movingRect.y=mouseY; 
   drawSprites();
   

   if(isTouching(fixedRect,movingRect)){
   fixedRect.shapeColor="red";
   movingRect.shapeColor="red";
   }else if(isTouching(rect1,movingRect)){
   	rect1.shapeColor="red";
    movingRect.shapeColor="red";
   }else if(isTouching(rect2,movingRect)){
   	rect2.shapeColor="red";
   	movingRect.shapeColor="red";
   }else {
   	fixedRect.shapeColor="green";
   	movingRect.shapeColor="green";
   	rect1.shapeColor="green";
   	rect2.shapeColor="green";
   }

   }




function isTouching(object1,object2){

  if(object2.x-object1.x<object2.width/2&&object1.x-object2.x<object2.width/2+object1.width/2&&object2.y-object1.y<object2.height/2+object1.height/2
&&object1.y-object2.y<object1.height/2+object2.height/2){
    return true
  }else {
    return false
  }
}








