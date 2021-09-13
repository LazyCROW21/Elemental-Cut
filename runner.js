class Runner {
    constructor (gW, gH, spriteSheet) {
        this.height = gH/9;
        this.width = this.height/3;
        this.status = 'run';
        
        // run animation
        this.runframe = 0;
        this.runSprites = spriteSheet['run'];
        this.runAnimationFrameDelay = 60;
        this.runAnimationFrameDelayCnt = 60;
        this.runMaxframe = this.runSprites.length;
        
        // attack1 animation
        this.attack1frame = 0;
        this.attack1Sprites = spriteSheet['attack1'];
        this.attack1AnimationFrameDelay = 60;
        this.attack1AnimationFrameDelayCnt = 60;
        this.attack1Maxframe = this.attack1Sprites.length;
        // this.swordHeight = this.height * 0.8;
        // this.swordWidth = this.height * 0.05;
        this.position = {
            x : 100,
            y : gH * 0.81
        };
        this.swordAngle = 225;
        this.stanceSprite = spriteSheet['stance'];
    }
    draw(ctx, inputStatus) {
        ctx.fillStyle = '#0f0';
        if(inputStatus['f'] == true) {
            this.status = 'attack1';
        }
        switch(this.status) {
            case 'run':
                ctx.drawImage(this.runSprites[this.runframe], this.position.x, this.position.y);
                if(this.runAnimationFrameDelayCnt <= 0) {
                    this.runframe = (this.runframe + 1 ) % this.runMaxframe;
                    this.runAnimationFrameDelayCnt = this.runAnimationFrameDelay;
                } else {
                    this.runAnimationFrameDelayCnt--;
                }
                break;
            case 'attack1':
                ctx.drawImage(this.attack1Sprites[this.attack1frame], this.position.x, this.position.y);
                if(this.attack1AnimationFrameDelayCnt <= 0) {
                    this.attack1frame += 1;
                    this.attack1AnimationFrameDelayCnt = this.attack1AnimationFrameDelay;
                    if(this.attack1frame >= this.attack1Maxframe) {
                        this.attack1frame = 0;
                        this.status = 'run';
                    }
                } else {
                    this.attack1AnimationFrameDelayCnt--;
                }
                break;
        }
    }
}