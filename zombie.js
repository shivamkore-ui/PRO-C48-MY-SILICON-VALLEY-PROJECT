function spawnZombies(){
   if(frameCount % 70 === 0){
    zombie = createSprite(platform1.x+30 ,platform1.y - 50)
    zombie.addAnimation("runs", zombieRuns);
    zombie.addAnimation("attacks", zombieAttacks);
    zombie.addAnimation("dead", zombieDies);
    zombie.scale = 0.15;
    // zombie.debug = true;
   // zombie.lifetime = 80;
    zombieGroup.add(zombie);
    
}
}