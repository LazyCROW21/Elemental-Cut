class Runner {
    constructor (gW, gH) {
        this.height = gH/9;
        this.width = this.height/3;
        this.swordSwing = true;
        this.swordHeight = this.height * 0.8;
        this.swordWidth = this.height * 0.05;
        this.position = {
            x : 100,
            y : gH * 0.8
        };
        this.swordAngle = 225;
    }
    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        if(this.swordSwing) {
            ctx.translate(this.position.x, this.position.y);
            ctx.rotate(this.swordAngle * Math.PI / 180);
            ctx.fillStyle = '#f00';
            ctx.fillRect(0 - this.width, 0, this.swordWidth, this.swordHeight);
            if(this.swordAngle < 295) {
                this.swordAngle++;
            }
        }
    }
    update(deltaTime) {
        if(!deltaTime) {
            return;
        }
        // this.position.x += 5/deltaTime;
    }
}