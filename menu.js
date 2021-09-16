class Menu {
    constructor (gW, gH) {
        this.windowW = gW;
        this.windowH = gH;
        this.halfW = gW/2;
        this.halfH = gH/2;
        this.menuScreen = 'main';
    }
    draw(ctx, inputStatus) {
        if(this.menuScreen == 'main') {
            ctx.fillStyle = "white";
            ctx.strokeStyle = 'black';
            ctx.textAlign = "center";
            if(Math.abs(inputStatus.mouseX - this.halfW) < 120) {
                if(Math.abs(inputStatus.mouseY - this.halfH + 40) < 20) {
                    ctx.font = "40px Comic Sans MS";
                } else {
                    ctx.font = "30px Comic Sans MS";
                }
                ctx.fillText("play", this.halfW, this.halfH);
                ctx.strokeText("play", this.halfW, this.halfH);

                if(Math.abs(inputStatus.mouseY - (this,this.halfH + 30)) < 20) {
                    ctx.font = "40px Comic Sans MS";
                } else {
                    ctx.font = "30px Comic Sans MS";
                }
                ctx.fillText("options", this.halfW, this.halfH + 60);
                ctx.strokeText("options", this.halfW, this.halfH + 60);

                if(Math.abs(inputStatus.mouseY - (this,this.halfH + 60)) < 20) {
                    ctx.font = "40px Comic Sans MS";
                } else {
                    ctx.font = "30px Comic Sans MS";
                }
                ctx.fillText("credits", this.halfW, this.halfH + 120);
                ctx.strokeText("credits", this.halfW, this.halfH + 120);
            } else {
                ctx.font = "30px Comic Sans MS";
                ctx.fillText("play", this.halfW, this.halfH);
                ctx.strokeText("play", this.halfW, this.halfH);
                ctx.fillText("options", this.halfW, this.halfH + 60);
                ctx.strokeText("options", this.halfW, this.halfH + 60);
                ctx.fillText("credits", this.halfW, this.halfH + 120);
                ctx.strokeText("credits", this.halfW, this.halfH + 120);
            }
        }
    }
}