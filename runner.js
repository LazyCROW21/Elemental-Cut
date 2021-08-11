class Runner {
    constructor (gW, gH) {
        this.height = gH/10;
        this.width = this.height/3;
        this.swordSwing = true;
        this.swordHeight = this.height * 0.8;
        this.swordWidth = this.height * 0.1;
        this.position = {
            x : 100,
            y : gH * 0.8
        };
        this.swordAngle = -45;
    }
    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        if(this.swordSwing) {
            ctx.translate(this.position.x, this.position.y);
            ctx.rotate(this.swordAngle * Math.PI / 180);
            ctx.fillStyle = '#f00';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
    update(deltaTime) {
        if(!deltaTime) {
            return;
        }
        // this.position.x += 5/deltaTime;
    }
}