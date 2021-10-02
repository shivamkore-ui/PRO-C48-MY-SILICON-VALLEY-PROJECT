function spawnEnemies(){
    enemy = createSprite(8500,150)
    enemy.addAnimation("runs", enemyRuns);
    enemy.addAnimation("attacks", enemyAttacks);
    enemy.addAnimation("dies", enemyDies);
    enemy.scale = 0.4;
    enemy.mirrorX(-1)
    
}