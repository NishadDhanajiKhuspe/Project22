var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png","images/fairyImage2.png")
	fairyVoice = loadSound("JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy = createSprite(140,350);
    fairy.addImage(fairyImg);
    fairy.scale = 0.3;

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);
	}
	fairyVoice.play();
  //write code to stop star in the hand of fairy
  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x + 1;
	}
	//writw code to move fairy left and right
	
}
