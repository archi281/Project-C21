var path,boy,coin,diamonds,sword;
var pathImg,boyImg,coinImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var coinG,diamondsG,swordGroup;


var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  diamondsImg = loadImage("diamonds.png");
  swordImg = loadImage("sword.png");
  
  
}

function setup(){
  
  createCanvas(400,600);
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


boy = createSprite(70,580,20,20);
boy.addAnimation(boyImg);
boy.scale=0.08;
  
  
coinG=new Group();
diamondsG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  
  if(path.y > 400 ){
    path.y = heightf/2;
  }
  
    createCoin();
    createDiamonds();
    createSword();

    if (coinG.isTouching(boy)) {
      coinG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        coinG.destroyEach();
        diamondsG.destroyEach();
        wordGroup.destroyEach();
     
        coinG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCoin() {
  if (World.frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.12;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coinG.add(coin);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}


function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
