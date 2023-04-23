const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

let newGeneration = Generation.generateRandom(50, myCanvas.width, myCanvas.height);

console.log(newGeneration);

function step(timestamp){
    newGeneration.draw(ctx);

    if (newGeneration.isDead()) {
        ctx.fillStyle = 'rgba(0,0,60, 0.2)';
        ctx.fillRect(0,0,myCanvas.width, myCanvas.height)
        newGeneration = Generation.generateRandom(50, myCanvas.width, myCanvas.height);
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);