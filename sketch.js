  var plr, plrImg, enemy, enemyImg,bg, bgImage;
  var gameState;
  var reward, rewardImg;
  var action = "attacks";
  var plrWalks, plrAttacks, plrJumps, plrDies;
  var x,y;
  var enemyRuns, enemyAttacks, enemyDies;
  var button;
  var zombie;
  var zombieRuns, zombieAttacks, zombieDies;

  var platform1, platform2;
  var zombieGroup;
  var platform1Img, platform2Img;

  var score = 0;
  var coinGroup;

  var coin, coinAnimation;


  function preload(){
    bgImage = loadImage("images/bg/bg2.jpg")
    
    plrWalks = loadAnimation("images/freeknight/png/Run (1).png",
    "images/freeknight/png/Run (2).png", "images/freeknight/png/Run (3).png", "images/freeknight/png/Run (4).png", 
    "images/freeknight/png/Run (5).png", "images/freeknight/png/Run (6).png", "images/freeknight/png/Run (7).png",
    "images/freeknight/png/Run (8).png", "images/freeknight/png/Run (9).png", "images/freeknight/png/Run (10).png");
    
    plrAttacks = loadAnimation("images/freeknight/png/Attack (1).png","images/freeknight/png/Attack (2).png",
    "images/freeknight/png/Attack (3).png","images/freeknight/png/Attack (4).png","images/freeknight/png/Attack (5).png",
    "images/freeknight/png/Attack (6).png","images/freeknight/png/Attack (7).png","images/freeknight/png/Attack (8).png",
    "images/freeknight/png/Attack (9).png","images/freeknight/png/Attack (10).png");
    
    plrJumps = loadAnimation("images/freeknight/png/Jump (1).png","images/freeknight/png/Jump (2).png",
    "images/freeknight/png/Jump (3).png","images/freeknight/png/Jump (4).png","images/freeknight/png/Jump (5).png",
    "images/freeknight/png/Jump (6).png","images/freeknight/png/Jump (7).png","images/freeknight/png/Jump (8).png",
    "images/freeknight/png/Jump (9).png","images/freeknight/png/Jump (10).png");
    
    plrDies = loadAnimation("images/freeknight/png/Dead (1).png","images/freeknight/png/Dead (2).png",
    "images/freeknight/png/Dead (3).png","images/freeknight/png/Dead (4).png","images/freeknight/png/Dead (5).png",
    "images/freeknight/png/Dead (6).png","images/freeknight/png/Dead (7).png","images/freeknight/png/Dead (8).png",
    "images/freeknight/png/Dead (9).png","images/freeknight/png/Dead (10).png",)

    enemyRuns = loadAnimation("images/freedinosprite/png/1.png","images/freedinosprite/png/2.png",
    "images/freedinosprite/png/3.png","images/freedinosprite/png/4.png","images/freedinosprite/png/5.png",
    "images/freedinosprite/png/Walk (6).png","images/freedinosprite/png/Walk (7).png","images/freedinosprite/png/Walk (8).png",
    "images/freedinosprite/png/Walk (9).png","images/freedinosprite/png/Walk (10).png");

    enemyAttacks = loadAnimation("images/freedinosprite/png/Run (1).png","images/freedinosprite/png/Run (2).png",
    "images/freedinosprite/png/Run (3).png","images/freedinosprite/png/Run (4).png","images/freedinosprite/png/Run (5).png",
    "images/freedinosprite/png/Run (6).png","images/freedinosprite/png/Run (7).png","images/freedinosprite/png/Run (8).png");

    enemyDies = loadAnimation("images/freedinosprite/png/Dead (1).png","images/freedinosprite/png/Dead (2).png",
    "images/freedinosprite/png/Dead (3).png","images/freedinosprite/png/Dead (4).png","images/freedinosprite/png/Dead (5).png",
    "images/freedinosprite/png/Dead (6).png","images/freedinosprite/png/Dead (7).png","images/freedinosprite/png/Dead (8).png")

    zombieRuns = loadAnimation("images/zombiefiles/png/male/Walk (1).png","images/zombiefiles/png/male/Walk (2).png",
    "images/zombiefiles/png/male/Walk (3).png","images/zombiefiles/png/male/Walk (4).png","images/zombiefiles/png/male/Walk (5).png",
    "images/zombiefiles/png/male/Walk (6).png","images/zombiefiles/png/male/Walk (7).png","images/zombiefiles/png/male/Walk (8).png",
    "images/zombiefiles/png/male/Walk (9).png","images/zombiefiles/png/male/Walk (10).png")
    
    zombieAttacks = loadAnimation("images/zombiefiles/png/male/Attack (1).png","images/zombiefiles/png/male/Attack (2).png",
    "images/zombiefiles/png/male/Attack (3).png","images/zombiefiles/png/male/Attack (4).png","images/zombiefiles/png/male/Attack (5).png",
    "images/zombiefiles/png/male/Attack (6).png","images/zombiefiles/png/male/Attack (7).png","images/zombiefiles/png/male/Attack (8).png")
    
    zombieDies = loadAnimation("images/zombiefiles/png/male/Dead (1).png","images/zombiefiles/png/male/Dead (2).png",
    "images/zombiefiles/png/male/Dead (3).png","images/zombiefiles/png/male/Dead (4).png","images/zombiefiles/png/male/Dead (5).png",
    "images/zombiefiles/png/male/Dead (6).png","images/zombiefiles/png/male/Dead (7).png","images/zombiefiles/png/male/Dead (8).png",
    "images/zombiefiles/png/male/Dead (9).png","images/zombiefiles/png/male/Dead (10).png")

    coinAnimation = loadAnimation("images/coin/1.png","images/coin/2.png","images/coin/3.png",
                                  "images/coin/4.png","images/coin/5.png","images/coin/6.png",)
    

    platform1Img = loadImage("images/platform/platform1.png")
    
    platform2Img = loadImage("images/platform/platform2.png")
  }

  function setup() {
    createCanvas(800,400);
    bg = createSprite(400, 180, 50, 50);
    bg.addImage(bgImage)
    bg.scale = 1.8
    bg2 = createSprite(1370, 180, 50, 50);
    bg2.addImage(bgImage)
    bg2.scale = 1.8
    bg2.mirrorX(-1)

    
    plr = createSprite(70,150,50,50)
    plr.addAnimation("walk", plrWalks)
    plr.addAnimation("attacks", plrAttacks)
    plr.scale = 0.15
    
    platform1 = createSprite(200, 200)
    platform1.addImage(platform1Img)
    // platform2 = createSprite(450, 100)
    // platform2.addImage(platform2Img)


    platform4 = createSprite(650, 100)
    platform4.addImage(platform2Img)

    zombieGroup = createGroup();
    coinGroup = createGroup();
    platform1.scale = 0.7
    // platform2.scale = 0.7

    spawnEnemies();
    button = createButton("Restart");
  
    button.style("background-color","orange")
    button.style("color","black")
    button.style("font-size","15px")
    gameState = "start"
  }

  function draw() {
    background(0,0,0);  
  
  if(gameState === "start"){
    // button.hide()
    camera.x = plr.x+200;
    camera.y = plr.y;
    button.position(200,200)
  action = "walk"
  plr.changeAnimation("walk", plrWalks)
    plr.collide(platform1)
  
    plr.collide(platform4)

    if(keyDown("space")){
      plr.y -= 12
    }

    if(plr.isTouching(enemy)){

    }

    if(keyDown("right")){
      plr.x += 15
    };

    if(keyDown("left")){
      plr.x -= 15
    }
    plr.velocityY += 0.5

    if(keyIsDown(UP_ARROW)){
      plr.changeAnimation("attacks", plrAttacks)
      action = "attacks"
      
    }

  if(action === "attacks" && plr.isTouching(zombieGroup)){
    zombieGroup[0].destroy()
  }

  
  if(keyIsDown(UP_ARROW)){
    plr.changeAnimation("attacks", plrAttacks)
    action = "attacks2"
    
  }

  if(action === "attacks2" && plr.isTouching(enemy)){
    enemy.destroy();
  }

  if( plr.isTouching(zombieGroup)){
    gameState = "end"
    x = plr.x + 5;
    y = plr.y; 
  }

  if( plr.isTouching(coinGroup)){
    score += 1;
    coinGroup[0] .destroy();
  }


    if(plr.x-platform1.x>400) platform1.x=plr.x+400;

    if(plr.x-platform4.x>400) platform4.x=plr.x+400;
      
    spawnZombies();

    spawnCoin();
    
    drawSprites();
    textSize(30);
    stroke("black")
    // strokeWeight(1)
    fill("red")
    text("Score: " + score, plr.x-150,plr.y-150)
  } 
    else if(gameState == "end") {
    textSize(40);
    stroke("black")
    // strokeWeight(1)
    fill("orange")
  text("GAME OVER ", x+70,y)



  if(mousePressedOver(button)){
    reset();
  }
  }
  }

  // function keyPressed(){
  //   if(keyCode === 38){
  //     plr.changeAnimation("attacks", plrAttacks)
  //   } 
  // }

  function spawnCoin(){
    if(frameCount % 50 === 0){
    coin = createSprite(plr.x+700,random(30,100))
    coin.addAnimation("coin", coinAnimation);
    coin.velocityX = -5;
    coin.scale = 0.30;
    //  coin.debug = true;
    // coin.lifetime = 80;
    coinGroup.add(coin);
    
  }
  }

  function reset(){
      gameState ="start";
    plr.position ={x:70,y:150}
    zombieGroup.destroyEach();

  }