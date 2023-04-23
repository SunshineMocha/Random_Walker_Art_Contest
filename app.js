const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

let newGeneration = Generation.generateRandom(5, myCanvas.width, myCanvas.height);

console.log(newGeneration);

function step(timestamp){
    newGeneration.draw(ctx);

    if (newGeneration.isDead()) {
        ctx.fillStyle = `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}, 0.2)`;
        ctx.fillRect(0,0,myCanvas.width, myCanvas.height)
        newGeneration = Generation.generateRandom(5, myCanvas.width, myCanvas.height);
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
