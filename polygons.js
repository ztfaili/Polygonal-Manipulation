var canvas = document.getElementById('puzzle');
var context = canvas.getContext('2d');
context.strokeRect(0, 0, canvas.width, canvas.height);
var redSlider = document.getElementById('redSlider');
redSlider.value = 0;
var greenSlider = document.getElementById('greenSlider');
greenSlider.value = 0;
var blueSlider = document.getElementById('blueSlider');
blueSlider.value = 0;
var yellowSlider = document.getElementById('yellowSlider');
yellowSlider.value = 0;

function draw() {
    
    canvas.width = canvas.width;

    var theta1 = redSlider.value*(-0.01)*Math.PI;
    var theta2 = redSlider.value*(0.01)*Math.PI;
    var theta3 = redSlider.value*(0.01)*Math.PI;
    var theta4 = redSlider.value*(-0.01)*Math.PI;

    // draws a square at given position and color
    function drawSquare(x, y, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.beginPath();
        context.moveTo(x - 25, y - 25);
        context.lineTo(x + 25, y - 25);
        context.stroke();
        context.lineTo(x + 25, y + 25);
        context.stroke();
        context.lineTo(x - 25, y + 25);
        context.stroke();
        context.closePath();
        context.stroke();
    }

    function drawRedSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x, y, width, height);
    }
    
    function drawGreenSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x - 50, y, width, height);
    }

    function drawBlueSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x, y - 50, width, height);
    }

    function drawYellowSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x - 50, y - 50, width, height);
    }

    context.save();
    context.translate(125, 125);
    context.rotate(theta1);
    drawRedSquare(0, 0, 50, 50, 5, 'red');
    context.restore();
    context.save();
    context.translate(250, 125);
    context.rotate(theta2);
    drawGreenSquare(0, 0, 50, 50, 5, 'green');
    context.restore();
    context.save();
    context.translate(125, 250);
    context.rotate(theta3);
    drawBlueSquare(0, 0, 50, 50, 5, 'blue');
    context.restore();
    context.save();
    context.translate(250, 250);
    context.rotate(theta4);
    drawYellowSquare(0, 0, 50, 50, 5, 'gold');


}
redSlider.addEventListener("input", draw);
greenSlider.addEventListener("input", draw);
blueSlider.addEventListener("input", draw);
yellowSlider.addEventListener("input", draw);
window.onload = draw();