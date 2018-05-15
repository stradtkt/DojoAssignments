var score = 0;
var world = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,3,1,1,3,2,2,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1],
  [1,3,2,2,3,1,1,1,0,0,0,0,0,1,1,2,2,1,0,0,0,0,1],
  [1,3,1,1,3,2,2,1,0,0,0,0,0,1,1,2,2,1,0,0,0,0,1],
  [1,3,2,2,3,1,1,1,0,0,0,0,0,1,1,2,1,1,0,0,0,0,1],
  [1,3,1,1,3,2,2,1,0,0,0,0,0,2,2,2,1,1,0,0,0,0,1],
  [1,3,2,2,3,1,1,1,0,0,0,0,0,1,1,2,1,1,0,0,0,0,1],
  [1,3,1,1,3,2,2,1,0,0,0,0,0,1,1,2,1,1,0,0,0,0,1],
  [1,3,2,2,3,1,1,1,0,0,0,0,0,1,1,2,2,1,0,0,0,0,1],
  [1,3,1,1,3,2,2,1,0,0,0,0,0,1,1,2,2,1,0,0,0,0,1],
  [1,3,2,2,3,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1],
  [1,3,1,1,3,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
var worldDict = {
  0: 'blank',
  1: 'wall', 
  2: 'sushi',
  3: 'onigiri'
};

function drawWorld() {
  output = "";
  for(var row = 0; row < world.length; row++) {
    output += "<div class='row'>";
    for(var x = 0; x < world[row].length; x++) {
      output += "<div class='"+worldDict[world[row][x]]+"'></div>";
    }
      output += "</div>";
  }
  document.getElementById('world').innerHTML = output;
}
drawWorld();

var ninjaman = {
  x: 1, 
  y: 1
}
function drawNinjaman() {
document.getElementById("ninjaman").style.top = ninjaman.y *40+"px";
document.getElementById("ninjaman").style.left = ninjaman.x *40+"px";
document.getElementById("score").innerHTML = score.toString();

}
drawNinjaman();

document.onkeydown = function(e) {
if(e.keyCode == 37) {
  if(world[ninjaman.y][ninjaman.x - 1] != 1) {
    ninjaman.x--;
    if(world[ninjaman.y][ninjaman.x] == 2) {
      score += 10;
    } else if(world[ninjaman.y][ninjaman.x] == 3) {
      score += 5;
    } else {
      console.log('There is nothing here');
    }
  }
 }
 if(e.keyCode == 39) {
   if(world[ninjaman.y][ninjaman.x + 1] != 1) {
    ninjaman.x++;
    if(world[ninjaman.y][ninjaman.x] == 2) {
      score += 10;
    } else if(world[ninjaman.y][ninjaman.x] == 3) {
      score += 5;
    } else {
      console.log('There is nothing here');
    }
   }
 }
 if(e.keyCode == 40) {
   if(world[ninjaman.y + 1][ninjaman.x] != 1) {
    ninjaman.y++;
    if(world[ninjaman.y][ninjaman.x] == 2) {
      score += 10;
    } else if(world[ninjaman.y][ninjaman.x] == 3) {
      score += 5;
    } else {
      console.log('There is nothing here');
    }
   }
 }
 if(e.keyCode == 38) {
   if(world[ninjaman.y  - 1][ninjaman.x] != 1) {
    ninjaman.y--;
    if(world[ninjaman.y][ninjaman.x] == 2) {
      score += 10;
    } else if(world[ninjaman.y][ninjaman.x] == 3) {
      score += 5;
    } else {
      console.log('There is nothing here');
    }
   }
 }
world[ninjaman.y][ninjaman.x] = 0;
 drawNinjaman();
 drawWorld();
}

//keep score of how many sushi ninjaman eats
//sushi 10pts onigiri = 5pts