var rotate = document.getElementById('rotate');
rotate.value = 0;
var sliderX = document.getElementById('sliderX');
sliderX.value = 0;
var sliderY = document.getElementById('sliderY');
sliderY.value = 0;
function setup() {
    function drawHouse() {
        var canvas = document.getElementById('house');
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
        function drawRoof(color) {
            context.beginPath();
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
        context.translate(52, 30);
        context.rotate(theta5);
        drawRoof('gold');
    }
    
    function drawPuzzle() {
        var canvas = document.getElementById('puzzle');
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        context.strokeRect(0, 0, canvas.width, canvas.height);

        // determines the movement of the box in the x and y directions 
        var dx = sliderX.value;
        var dy = sliderY.value;
        
        function drawSquare(color) {
            context.fillStyle = color;
            context.fillRect(0, 0, 25, 25);
        }

        function drawPath() {
            // draw bottom part of path
            context.beginPath();
            context.fillStyle = 'purple';
            context.moveTo(200, 350);
            context.lineTo(200, 300);
            context.lineTo(250, 300);
            context.lineTo(250, 250);
            context.lineTo(400, 250);
            context.lineTo(400, 350);
            context.closePath();
            context.fill();

            // draw top part of path
            context.beginPath();
            context.fillStyle = 'purple';
            context.moveTo(200, 0);
            context.lineTo(200, 50);
            context.lineTo(250, 50);
            context.lineTo(250, 200);
            context.lineTo(400, 200);
            context.lineTo(400, 0);
            context.closePath();
            context.fill();
        }

        function collidedTopX() {
            var xPos = sliderX.value;
            var yPos = sliderY.value;

            // collision of box with top path
            if(xPos >= 175 && (yPos >= 0 && yPos <= 50)) {
                return true;
            }
            else if(xPos >= 175 && (yPos >= 275 && yPos <= 350)) {
                return true;
            }
        }
        function collidedTopY()  {
            var xPos = sliderX.value;
            var yPos = sliderY.value;
            // collision of box with top path
            if(yPos <= 50 && (xPos > 175 && xPos <= 250)) {
                return true;
            }
        }

        function collidedMiddleX() {
            var xPos = sliderX.value;
            var yPos = sliderY.value;

            // collision of box with middle path
            if(xPos >= 225 && (yPos >= 50 && yPos <= 200)) {
                return true;
            }
            else if(xPos >= 225 && (yPos >= 225 && yPos <= 300)) {
                return true;
            }
        }
        
        drawPath();

        if(!collidedTopX() && !collidedMiddleX() && !collidedTopY()) {
            dx = sliderX.value;
            dy = sliderY.value;
            context.save();
            context.translate(dx, dy);
            drawSquare('red');
            context.restore();
        }
        
        if(collidedTopX()) {
            context.save();
            context.translate(175, dy);
            drawSquare('red');
            context.restore();
            sliderX.value = 175;
        }

        if(collidedTopY()) {
            context.save();
            context.translate(dx, 60);
            drawSquare('red');
            context.restore();
            sliderY.value = 60;
        }

        if(collidedMiddleX()) {
            context.save();
            context.translate(225, dy); 
            drawSquare('red');
            context.restore();
            sliderX.value = 225;
        }
        /*
        else {
            context.save();
            context.translate(dx, dy);
            drawSquare('red');
            context.restore();
        } */
    }

    drawHouse();
    drawPuzzle();
}

rotate.addEventListener("input", setup);
sliderX.addEventListener("input", setup);
sliderY.addEventListener("input", setup);

window.onload = setup();