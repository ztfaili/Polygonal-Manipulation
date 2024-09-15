var canvas = document.getElementById('puzzle');
var context = canvas.getContext('2d');
context.strokeRect(0, 0, canvas.width, canvas.height);
var rotate = document.getElementById('rotate');
rotate.value = 0;

function draw() {
    
    canvas.width = canvas.width;

    // determines angle and direction of rotation for squares
    var theta1 = rotate.value*(-0.01)*Math.PI;
    var theta2 = rotate.value*(0.01)*Math.PI;
    var theta3 = rotate.value*(0.01)*Math.PI;
    var theta4 = rotate.value*(-0.01)*Math.PI;

    // draw the red square
    function drawRedSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x, y, width, height);
    }
    
    // draw the green square
    function drawGreenSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x - 50, y, width, height);
    }

    // draw the blue square
    function drawBlueSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x, y - 50, width, height);
    }

    // draw the yellow square
    function drawYellowSquare(x, y, width, height, lineWidth, color) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.strokeRect(x - 50, y - 50, width, height);
    }

    context.save();
    context.translate(125, 125); // r square pos
    context.rotate(theta1);
    drawRedSquare(0, 0, 50, 50, 5, 'red');
    context.restore();
    context.save();
    context.translate(250, 125); // g square pos
    context.rotate(theta2);
    drawGreenSquare(0, 0, 50, 50, 5, 'green');
    context.restore();
    context.save();
    context.translate(125, 250);
    context.rotate(theta3);
    drawBlueSquare(0, 0, 50, 50, 5, 'blue'); // b square pos
    context.restore();
    context.save();
    context.translate(250, 250);
    context.rotate(theta4);
    drawYellowSquare(0, 0, 50, 50, 5, 'gold'); // y square pos


}
rotate.addEventListener("input", draw);
window.onload(draw());