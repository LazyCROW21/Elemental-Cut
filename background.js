class Backgroud {
    constructor (gW, gH, spriteSheet) {
        this.windowW = gW;
        this.windowH = gH;
        this.swordSwing = true;
        this.layers = spriteSheet;
        this.noOfLayers = 11;
        this.layerDetails = {width: 928, height: 693};
        this.layerSpeed = [2.1, 1.7, 1.5, 1.1, 0.9, 0.6, 0.4, 0.1, 0.08, 0.05, 0];
        this.layerTravelled = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.adj_W = (gH / this.layerDetails.height) * this.layerDetails.width;
        this.bound = this.windowW + this.layerDetails.width;
    }
    draw(ctx) {
        let drawn_width = 0;
        for(let i=(this.noOfLayers - 1); i>=0; i--) {
            drawn_width = 0;
            while(drawn_width < this.bound) {
                ctx.drawImage(
                    this.layers[i], 
                    drawn_width - this.layerTravelled[i],
                    0,
                    this.adj_W,
                    this.windowH
                );
                drawn_width += this.adj_W;
            }
            this.layerTravelled[i] = (this.layerTravelled[i] + this.layerSpeed[i]) % this.adj_W;
        }
    }
}