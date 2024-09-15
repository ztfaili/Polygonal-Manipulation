var rotate = document.getElementById('rotate');
rotate.value = 0;
var rotate2 = document.getElementById('rotate2');
rotate2.value = 0;
function setup() {
    function drawHouse() {
        var canvas = document.getElementById('puzzle');
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        context.strokeRect(0, 0, canvas.width, canvas.height);
        // determines angle and direction of rotation for squares
        var theta1 = rotate.value*(-0.01)*Math.PI;
        var theta2 = rotate.value*(0.01)*Math.PI;
        var theta3 = rotate.value*(0.01)*Math.PI;
        var theta4 = rotate.value*(-0.01)*Math.PI;
        var theta5 = rotate.value*(-0.01)*Math.PI;
    
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

        // draw the top of the house
        function drawRoof(lineWidth, color) {
            context.beginPath();
            context.lineWidth = lineWidth;
            context.fillStyle = color;
            context.moveTo(125, 60);
            context.lineTo(185, 95);
            context.lineTo(65, 95);
            context.closePath();
            context.fill();
        }
    
        context.save();
        context.translate(125, 125); // r square pos
        context.rotate(theta1);
        drawRedSquare(0, 0, 50, 50, 5, 'red');
        context.restore();
        context.save();
        context.translate(230, 125); // g square pos
        context.rotate(theta2);
        drawGreenSquare(0, 0, 50, 50, 5, 'green');
        context.restore();
        context.save();
        context.translate(125, 230); // b square pos
        context.rotate(theta3);
        drawBlueSquare(0, 0, 50, 50, 5, 'blue'); 
        context.restore();
        context.save();
        context.translate(230, 230); // y square pos
        context.rotate(theta4);
        drawYellowSquare(0, 0, 50, 50, 5, 'gold'); 
        context.restore();
        context.save();
        context.translate(50, 30);
        context.rotate(theta5);
        drawRoof(5, 'gold');
    }
    
    function drawFigure() {
        var canvas2 = document.getElementById('house');
        var context2 = canvas2.getContext('2d');
        canvas2.width = canvas2.width;
        context2.strokeRect(0, 0, canvas2.width, canvas2.height);
        //context2.translate(0, 0);
        //context2.strokeRect(10, 10, 10, 10);

        // determines angle and direction of rotation for squares
        var angle1 = rotate2.value*(-0.01)*Math.PI;
        var angle2 = rotate2.value*(0.01)*Math.PI;
        var angle3 = rotate2.value*(0.01)*Math.PI;
        var angle4 = rotate2.value*(-0.01)*Math.PI;
    
        // draw the red square
        function drawRedSquare2(x, y, width, height, lineWidth, color) {
            context2.lineWidth = lineWidth;
            context2.strokeStyle = color;
            context2.strokeRect(x, y, width, height);
        }
        
        // draw the green square
        function drawGreenSquare2(x, y, width, height, lineWidth, color) {
            context2.lineWidth = lineWidth;
            context2.strokeStyle = color;
            context2.strokeRect(x - 50, y, width, height);
        }
    
        // draw the blue square
        function drawBlueSquare2(x, y, width, height, lineWidth, color) {
            context2.lineWidth = lineWidth;
            context2.strokeStyle = color;
            context2.strokeRect(x, y - 50, width, height);
        }
    
        // draw the yellow square
        function drawYellowSquare2(x, y, width, height, lineWidth, color) {
            context2.lineWidth = lineWidth;
            context2.strokeStyle = color;
            context2.strokeRect(x - 50, y - 50, width, height);
        }
    
        context2.save();
        context2.translate(125, 125); // r square pos
        context2.rotate(angle1)
        drawRedSquare2(0, 0, 50, 50, 5, 'red');
        context2.restore();
        context2.save();
        context2.translate(230, 125); // g square pos
        context2.rotate(angle2);
        drawGreenSquare2(0, 0, 50, 50, 5, 'green');
        context2.restore();
        context2.save();
        context2.translate(125, 230); // b square pos
        context2.rotate(angle3);
        drawBlueSquare2(0, 0, 50, 50, 5, 'blue'); 
        context2.restore();
        context2.save();
        context2.translate(230, 230); // y square pos
        context2.rotate(angle4);
        drawYellowSquare2(0, 0, 50, 50, 5, 'gold'); 
    }
    drawHouse();
    drawFigure();
}

rotate.addEventListener("input", setup);
rotate2.addEventListener("input", setup);
window.onload = setup();