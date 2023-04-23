class Generation{
    constructor(pointsArray = [], lifetime = 2){
        this.pointsArray = pointsArray;
        this.lifetime = lifetime;
    }

    addPoint(point){
        this.pointsArray.push(point);
    }

    isDead(){
        return this.lifetime <= 0;
    }

    draw(ctx){
        this.lifetime--;
        if (!this.isDead()) {
            for (let i = 0; i < this.pointsArray.length; i++) {
                const point = this.pointsArray[i];
                point.draw(ctx);
                point.changePosition();
            }
        }    
    }

    static generateRandom(numberOfPoints, canvasWidth, canvasHeight){
        const newGeneration = new Generation();
        for (let i = 0; i < numberOfPoints; i++) {
            const newPoint = Point.generateRandom(canvasWidth, canvasHeight);
            newGeneration.addPoint(newPoint);
        }
        return newGeneration;
    }
}