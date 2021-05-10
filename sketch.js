const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg="sunrise1.png"

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    console.log(bg);
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(bg){
        background(bg);
}
    

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJson=await response.json();
    console.log(responseJson);

    // write code to fetch time from API
    var dt=responseJson.datetime;
    
    var hour=dt.slice(11,13);
    if(hour>= 6 && hour <= 19){
        bg=loadImage("sprites/bg1.png");
    }
    else{
     bg=loadImage("sprites/bg2.jpg");
    }
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
   if(hour>=04 && hour<=06){
       bg= loadImage ("sunrise1.png")
   }
   else if(hour>=06 && hour<=08){
       bg=loadImage ("sunrise2.png")
       
   }
  else if(hour>=23 && hour==0){
    bg= loadImage ("sunset10.png")
}
else if(hour==0 && hour<=03){
    bg =  loadImage ("sunset11.png")

    
}
else{
    bg = loadImage ("sunset12.png") ;
}
    console.log (bg)
//load the image in backgroundImg variable here

}
