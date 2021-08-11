let windowHeight = window.screen.availHeight;
let windowWidth = window.screen.availWidth;
let gameWindow = document.getElementById("gamewindow");
let gwH = gameWindow.height;
let gwW = gameWindow.width;
let ctx = gameWindow.getContext("2d");

// game sprite
let runner = new Runner(gwW, gwH);

if(windowHeight > windowWidth) {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);
    ctx.fillText("Please rotate", (gwW/2), (gwH/2));
    ctx.fillText("to landscape view", (gwW/2), (gwH/2) + 30);
} else {
    if((windowHeight/windowWidth) < (16/9)) {
        gameWindow.className = 'isnot169';
    } else {
        gameWindow.className = 'is169';
    }
    gwH = gameWindow.height;
    gwW = gameWindow.width;
    gameLoop();
}

var lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, gwW, gwH);
    runner.update(deltaTime);
    runner.draw(ctx);
    requestAnimationFrame(gameLoop);
}