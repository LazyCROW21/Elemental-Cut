let windowHeight = window.screen.availHeight;
let windowWidth = window.screen.availWidth;
let gameWindow = document.getElementById("gamewindow");
let gwH = gameWindow.height;
let gwW = gameWindow.width;
let ctx = gameWindow.getContext("2d");

// game sprite
let runner = null;

if(windowHeight > windowWidth) {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);
    ctx.fillText("Please rotate", (gwW/2), (gwH/2));
    ctx.fillText("to landscape view", (gwW/2), (gwH/2) + 30);
} else {
    if((windowHeight/windowWidth) < (16/9)) {
        // gameWindow.className = 'isnot169';
        gameWindow.width = windowWidth * 0.9;
        gameWindow.height = windowWidth * 0.9 * 9 / 16;
        console.log("not");
    } else {
        // gameWindow.className = 'is169';
        gameWindow.height = windowHeight * 0.9;
        gameWindow.width = windowHeight * 0.9 * 16 / 9;
    }
    // gameWindow.width = windowWidth * 0.9;
    // gameWindow.height = windowHeight * 0.9;
    gwH = gameWindow.height;
    gwW = gameWindow.width;

    runner = new Runner(gwW, gwH);
    gameLoop();
}

var lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, gwW, gwH);
    runner.update(deltaTime);
    runner.draw(ctx);
    // for(let i = 0; i<10000; i++) {
    //     for(let j=0; j<10000; j++) {

    //     }
    // }
    requestAnimationFrame(gameLoop);
}