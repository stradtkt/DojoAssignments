var hero = {
  x: 300,
  y: 300
}

var enemies = [{x: 50, y: 50}, {x: 250, y:50}, {x:450, y:50}, {x:300, y: 50}];
var bullets = [];

function displayHero() {
  document.getElementById('hero').style['top'] = hero.y + "px";
  document.getElementById('hero').style['left'] = hero.x + "px";
}
function displayScore() {
  document.getElementById('score').innerHTML = score;
}

function displayEnemies() {
  var output = '';
  for(var i = 0; i < enemies.length; i++) {
    output += '<div class="enemy1" style="top:'+enemies[i].y+'px; left:'+enemies[i].x+'px;"></div>';
  }
  document.getElementById('enemies').innerHTML = output;
}
function moveBullets() {
  for(var i = 0; i < bullets.length; i++) {
    bullets[i].y -= 10;
    if(bullets[i].y < 0) {
      bullets[i] = bullets[bullets.length - 1];
      bullets.pop();
    }
  }
}
function moveEnemies() {
  for(var i = 0; i < enemies.length; i++) {
    enemies[i].y += 10;
    if(enemies[i].y > 564) {
      enemies[i].y = 0;
      enemies[i].x = Math.random()*500;
    }
  }
}
function displayBullets() {
  var output = '';
  for(var i = 0; i < bullets.length; i++) {
    output += '<div class="bullet" style="top:'+bullets[i].y+'px; left:'+bullets[i].x+'px;"></div>';
  }
  document.getElementById('bullets').innerHTML = output;
}
function gameLoop() {
  displayHero();
  moveEnemies();
  displayEnemies();
  moveBullets();
  displayBullets();
  detectCollision();
}

function detectCollision() {
  for(var i = 0; i < bullets.length; i++) {
    for(var j = 0; j < enemies.length; j++) {
      if(Math.abs(bullets[i].x - enemies[j].x) < 10 && Math.abs(bullets[i].y - enemies[j].y) < 10) {
        console.log("Bullet ", i, " and enemy ", j, " collided");
        score+=10;
      }
    }
  }
}

setInterval(gameLoop, 80);
document.onkeydown = function(e) {
  if(e.keyCode == 37) {
    hero.x-=15;
  } else  if(e.keyCode == 38) {
    hero.y-=15;
  } else if(e.keyCode == 39) {
    hero.x+=15;
  } else if(e.keyCode == 40) {
    hero.y+=15;
  } else if(e.keyCode == 32) {
    bullets.push({x: hero.x+8, y: hero.y-15});
    displayBullets();
  }
  displayHero();
}



displayHero();