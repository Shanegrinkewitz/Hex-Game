const BOARD_SIZE = 11;

const a = 2 * Math.PI / 6;
const r = 20;

function drawHexagon(x, y, ctx) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
        ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    ctx.closePath();
    ctx.stroke();
}

function drawGrid(width, height, ctx) {
    for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
        for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
            drawHexagon(x, y, ctx);
        }
    }
}

function main() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    drawGrid(canvas.width, canvas.height, ctx);
}