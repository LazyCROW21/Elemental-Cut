class Runner {
    constructor (gW, gH, spriteSheet) {
        this.height = gH/9;
        this.width = this.height/3;
        this.swordSwing = true;
        this.runframe = 0;
        this.runSprites = spriteSheet['run']
        this.runMaxframe = this.runSprites.length;
        this.runAnimationFrameDelay = 30; // adds delay
        this.runAnimationFrameDelayCnt = 30;
        // this.swordHeight = this.height * 0.8;
        // this.swordWidth = this.height * 0.05;
        this.position = {
            x : 100,
            y : gH * 0.8
        };
        this.swordAngle = 225;
        this.stanceSprite = spriteSheet['stance'];
    }
    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(this.runSprites[this.runframe], this.position.x, this.position.y);
        if(this.runAnimationFrameDelayCnt <= 0) {
            this.runframe = (this.runframe + 1 ) % this.runMaxframe;
            this.runAnimationFrameDelayCnt = this.runAnimationFrameDelay;
        } else {
            this.runAnimationFrameDelayCnt--;
        }
        if(this.swordSwing) {
            
        }
    }
    update(deltaTime) {
        if(!deltaTime) {
            return;
        }
        // this.position.x += 5/deltaTime;
    }
}