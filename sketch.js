var starImg,bgImg;
var star, starBody;
var fairy, fairyImg
var music
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	music = loadSound("joyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    music.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(150,600,50,50);
	fairy.addAnimation("moving",fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  edges=createEdgeSprites();
  fairy.bounceOff(edges);
  star.bounceOff(edges)
  
  keyPressed()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if (star.isTouching(fairy)){
	Matter.Body.setStatic(starBody,true); 
	  fairy.velocityX=0;
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right

	if (keyDown(LEFT_ARROW)){
		fairy.velocityX=-2;
	}

	if (keyDown(RIGHT_ARROW)){
		fairy.velocityX=2;
	}
}
