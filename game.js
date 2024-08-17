const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    dy: 0,
    gravity: 0.6,
    lift: -15,
    draw() {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update() {
        this.dy += this.gravity;
        this.y += this.dy;
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.dy = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.dy = 0;
        }
    }
};

functionanimate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();
    bird.draw();
    requestAnimationFrame(animate);
}

canvas.addEventListener('click', () => {
    bird.dy = bird.lift;
});

animate();
