const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const BOARD_SIZE = 11;

// Hexagon constants
const angle = Math.PI / 3;
const outer_radius = 20;
const inner_radius = outer_radius * Math.sqrt(3) / 2;

function drawHexagon(x, y, ctx) {
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
        ctx.lineTo(x + outer_radius * Math.cos(angle * i), y + outer_radius * Math.sin(angle * i));
    }
    ctx.closePath();
    ctx.stroke();
}

function drawGrid(x, y, size, ctx) {
    for (let row = 0; row < size; row++) {
        for (let col = 0, j = 0; col < size; col++, j++) {
            drawHexagon(x + col * 1.5 * outer_radius, y + row * 2 * inner_radius - col * inner_radius, ctx);
        }
    }
}

function main() {
    let gridX = canvas.width / 2;
    let gridY = canvas.height / 2;
    gridX -= Math.floor(BOARD_SIZE / 2) * 1.5 * outer_radius;
    gridY -= Math.floor(BOARD_SIZE / 2) * inner_radius;
    drawGrid(gridX, gridY, BOARD_SIZE, ctx);
}