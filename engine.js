const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const frameRate = 1000 / 60;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const controller = new Controller("KeyW", "KeyD", "KeyS", "KeyA", "Space");
const controller2 = new Controller("ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Space");

ctx.fillStyle = "black";


entities = [];



player1 = new Player(new vector2(60, 200), new vector2(20, 110), 20, "black", controller);
player1.setCollider();
entities.push(player1);

player2 = new Player(new vector2(WIDTH - 80, 200), new vector2(20, 110), 20, "black", controller2);
player2.setCollider();
entities.push(player2);

randY = Math.random() * 2.5;
ballSpeed = 14;
if(Math.random() > 0.5)
{
    randY *= -1;
}
if(Math.random() > 0.5)
{
    ballSpeed *= -1;
}

ball = new Ball(new vector2(WIDTH / 2, HEIGHT / 2 + 12), 12, new vector2(ballSpeed, 1),  "black");
ball.setCollider();
entities.push(ball);

score1 = 0;
score2 = 0;


function gameLoop()
{
    let length = entities.length; 

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    ctx.font = "75px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(score1, 240, 100);
    
    
    ctx.fillText("|", 395, 90); 


    ctx.fillText(score2, 545, 100);


    for (let i = 0; i < length; i++) {
        entities[i].tick();
        entities[i].render();      
    }
}


setInterval(gameLoop, frameRate)


  