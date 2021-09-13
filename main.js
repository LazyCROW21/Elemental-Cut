// let windowWidth = window.screen.availWidth;
let windowWidth = window.innerWidth;
// let windowHeight = window.screen.availHeight;
let windowHeight = window.innerHeight;
let gameWindow = document.getElementById("gamewindow");
let gwH = gameWindow.height;
let gwW = gameWindow.width;
let ctx = gameWindow.getContext("2d");

let windowOK = false;

// image assets count
let total_assets = 0;
const animation_data =  {
    stance_frames: 1,
    attack_frames: 5,
    run_frames: 6,
    bg_frames: 11
}
for(key in animation_data) {
    total_assets += animation_data[key];
}
let currently_loaded = 0;

// game sprite
let runner = null;
let bg = null

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

var inputStatus = {
    'f': false
}

// input listeners 
window.addEventListener('keydown', function(e){
    inputStatus[e.key] = true;
    console.log(e.key);
});
window.addEventListener('keyup', function(e){
    inputStatus[e.key] = false;
    console.log(e.key);
});


var lastTime = 0;

function startGame() {
    if(windowOK) {
        //for the runner
        let spriteSheet = {
            'stance': playerStanceSprite,
            'run': playerRunSprite,
            'attack1': playerAttack1Sprite,
        };
        runner = new Runner(gwW, gwH, spriteSheet);
        bg = new Backgroud(gwW, gwH, bgSprite);
        gameLoop();
    }
}

function gameLoop(timeStamp) {
    // let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, gwW, gwH);
    bg.draw(ctx);
    // runner.update(deltaTime);
    runner.draw(ctx, inputStatus);
    requestAnimationFrame(gameLoop);
}


// Load backgroud animation img asset
var bgSprite = [];
for(let i=0; i<=10; i++) {
    let frame = new Image();
    frame.addEventListener('load', function() {
        currently_loaded++;
        startGame();
    }, false);
    frame.src = './assets/bg/Layer_00'+((i<10)?'0'+i:i)+'.png';
    bgSprite.push(frame);
}

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

// Load Running animation img asset
var playerAttack1Sprite = [];
for(let i=1; i<=5; i++) {
    let frame = new Image();
    frame.addEventListener('load', function() {
        currently_loaded++;
        startGame();
    }, false);
    frame.src = './assets/attack1/zabuza_attack1_frame'+i+'.png';
    playerAttack1Sprite.push(frame);
}