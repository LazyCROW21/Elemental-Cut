let windowHeight = window.screen.availHeight;
let windowWidth = window.screen.availWidth;
let gameWindow = document.getElementById("gamewindow");
let gwH = gameWindow.height;
let gwW = gameWindow.width;
let ctx = gameWindow.getContext("2d");

let windowOK = false;

// image assets count
let total_assets = 0;
const animation_data =  {
    stance_frames: 1,
    run_frames: 6,
    bg_main: 1,
    bg_parallax: 0
}
for(key in animation_data) {
    total_assets += animation_data[key];
}
let currently_loaded = 0;

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
        gameWindow.width = windowWidth * 0.9;
        gameWindow.height = windowWidth * 0.9 * 9 / 16;
    } else {
        gameWindow.height = windowHeight * 0.9;
        gameWindow.width = windowHeight * 0.9 * 16 / 9;
    }
    gwH = gameWindow.height;
    gwW = gameWindow.width;

    // runner = new Runner(gwW, gwH);
    // gameLoop();
    windowOK = true;
}

var lastTime = 0;

function startGame() {
    if(windowOK) {
        //for the runner
        let spriteSheet = {
            'stance': playerStanceSprite,
            'run': playerRunSprite
        };
        runner = new Runner(gwW, gwH, spriteSheet);
        gameLoop();
    }
}

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, gwW, gwH);
    ctx.drawImage(bgMain, 0, 0, gwW, gwH); 
    runner.update(deltaTime);
    runner.draw(ctx);
    requestAnimationFrame(gameLoop);
}


// backgroud main
var bgMain = new Image();
bgMain.addEventListener('load', function() {
    currently_loaded++;
    startGame();
}, false);
bgMain.src = './assets/bg/Layer_0010_1.png';


// background parallax

// Load Stance img asset
var playerStanceSprite = new Image();
playerStanceSprite.addEventListener('load', function() {
    currently_loaded++;
    startGame();
}, false);
playerStanceSprite.src = './assets/stance/zabuza_stance.png';

// Load Running animation img asset
var playerRunSprite = [];
for(let i=1; i<=6; i++) {
    let frame = new Image();
    frame.addEventListener('load', function() {
        currently_loaded++;
        startGame();
    }, false);
    frame.src = './assets/run/zabuza_run_frame'+i+'.png';
    playerRunSprite.push(frame);
}