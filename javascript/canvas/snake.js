(function () {
    'use strict';

    const LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;

    var canvas = document.getElementById('theCanvas'),
        dingSound = document.getElementById('ding'),
        ctx = canvas.getContext('2d'),
        face,
        apple,
        snakeSize = 64,
        direction = RIGHT,
        snakeX = -64,
        snakeY = 0,
        appleX,
        appleY,
        interval,
        score = 0;

    function resizeCanvas() {
        var width = window.innerWidth - 10,
            height = window.innerHeight - 10;

        canvas.width = width - width % snakeSize;
        canvas.height = height - height % snakeSize;
    }

    window.addEventListener('resize', function () {
        resizeCanvas();
    });

    resizeCanvas();

    face = new Image();
    face.src = 'snakehead.png';

    function drawScore() {
        ctx.font = "48px cursive";
        ctx.fillStyle = 'white';
        ctx.fillText(score - 1, canvas.width - 150, 50);
        ctx.fillStyle = 'black';
        ctx.fillText(score, canvas.width - 150, 50);
    }

    function init() {
        interval = setInterval(function () {
            var x = 0,
                y = 0;
            switch (direction) {
                case LEFT:
                    x = -snakeSize;
                    break;
                case RIGHT:
                    x = snakeSize;
                    break;
                case UP:
                    y = -snakeSize;
                    break;
                case DOWN:
                    y = snakeSize;
                    break;
            }

            if (snakeX + x < 0 || snakeY + y < 0 ||
                snakeX + x >= canvas.width || snakeY + y >= canvas.height) {
                clearInterval(interval);
                dingSound.play();
                return;
            }

            ctx.clearRect(snakeX, snakeY, snakeSize, snakeSize);
            snakeX += x;
            snakeY += y;

            if (snakeX === appleX && snakeY === appleY) {
                dingSound.play();
                score++;
                placeApple();
            }
            ctx.drawImage(face, snakeX, snakeY, snakeSize, snakeSize);
            drawScore();
        }, 500);
    }

    face.onload = init;

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function placeApple() {
        appleX = getRandomNumber(0, canvas.width);
        appleY = getRandomNumber(0, canvas.height);

        appleX -= appleX % snakeSize;
        appleY -= appleY % snakeSize;

        ctx.drawImage(apple, appleX, appleY, snakeSize, snakeSize);
    }

    apple = new Image();
    apple.src = 'apple.jpg';
    apple.onload = placeApple;

    drawScore();

    window.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case LEFT:
            case UP:
            case RIGHT:
            case DOWN:
                direction = event.keyCode;
                break;
        }
    });
} ());