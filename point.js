class Point{
    constructor(x,y, speedX, speedY, color){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.forceX = (Math.random()*0.2)-0.1;
        this.forceY = (Math.random()*0.2)-0.1;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, 2, 2);
        ctx.arcTo(this.x, this.y, 5, 8, 5);
        ctx.strokeStyle = `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}, 0.2)`
        ctx.stroke();
    }

    changePosition(x,y){

        if(Math.random() > 0.9){
            this.forceX = (Math.random()*0.2)-0.1;
        }
        if(Math.random() > 0.9){
            this.forceY = (Math.random()*0.2)-0.1;
        }

        this.speedX += this.forceX;
        this.speedY += this.forceY;

        if(this.speedX > 1){
            this.speedX = 1;
        }
        if(this.speedX < -1){
            this.speedX = -1;
        }
        if(this.speedY > 1){
            this.speedY = 1;
        }
        if(this.speedY < -1){
            this.speedY = -1;
        }


        this.x += this.speedX;
        this.y += this.speedY;
    }


    static generateRandom(canvasWidth, canvasHeight){

        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        const randomColor = `rgba(${r},${g},${b})`;

        const randomX = Math.random() * canvasWidth;

        const randomY = Math.random() * canvasHeight;

        const speedX = (Math.random()*2)-1;
        const speedY = (Math.random()*2)-1;
        
        const newPoint = new Point(randomX,randomY, speedX, speedY, randomColor);
        return newPoint;
    }
}
