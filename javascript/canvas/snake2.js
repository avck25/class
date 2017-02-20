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
        snake = [{ x: -64, y: 0 }],
        appleX,
        appleY,
        score = 0,
        speed = 500;

    function resizeCanvas() {
        var width = window.innerWidth - 10,
            height = window.innerHeight - 10;

        canvas.width = width - width % snakeSize;
        canvas.height = height - height % snakeSize;

        if (appleX) {
            placeApple();
        }
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

    function gameLoop() {
        setTimeout(function () {
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

            if (snake[0].x + x < 0 || snake[0].y + y < 0 ||
                snake[0].x + x >= canvas.width || snake[0].y + y >= canvas.height) {
                dingSound.play();
                return;
            }

            var i;
            for (i = 3; i < snake.length; i++) {
                if (snake[i].x === snake[0].x + x && snake[i].y === snake[0].y + y) {
                    dingSound.play();
                    return;
                }
            }

            var grew = false;
            if (snake[0].x + x === appleX && snake[0].y + y === appleY) {
                snake.push({ x: snake[0].x, y: snake[0].y });
                dingSound.play();
                score++;
                grew = true;
                speed *= 0.85;
            }

            var head = snake[0];
            var tail = snake.pop();
            if (!grew) {
                ctx.clearRect(tail.x, tail.y, snakeSize, snakeSize);
            }
            // var newhead = {x: head.x + x, y: head.y + y};
            tail.x = head.x + x;
            tail.y = head.y + y;

            snake.unshift(tail);

            ctx.drawImage(face, snake[0].x, snake[0].y, snakeSize, snakeSize);

            if (snake.length > 1) {
                ctx.fillRect(snake[1].x, snake[1].y, snakeSize, snakeSize);
            }

            if (grew) {
                placeApple();
            }

            drawScore();

            gameLoop();
        }, speed);
    }

    face.onload = gameLoop;

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function placeApple() {
        var good;
        do {
            good = true;
            appleX = getRandomNumber(0, canvas.width);
            appleY = getRandomNumber(0, canvas.height);

            appleX -= appleX % snakeSize;
            appleY -= appleY % snakeSize;

            var i;
            for (i = 0; i < snake.length; i++) {
                if (snake[i].x === appleX && snake[i].y === appleY) {
                    good = false;
                    break;
                }
            }
        } while (!good);
        ctx.drawImage(apple, appleX, appleY, snakeSize, snakeSize);
    }

    apple = new Image();
    apple.src = 'apple.jpg';
    apple.onload = placeApple;

    drawScore();

    window.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case LEFT:
                if (snake.length === 1 || direction !== RIGHT) {
                    direction = event.keyCode;
                }
                break;
            case UP:
                if (snake.length === 1 || direction !== DOWN) {
                    direction = event.keyCode;
                }
                break;
            case RIGHT:
                if (snake.length === 1 || direction !== LEFT) {
                    direction = event.keyCode;
                }
                break;
            case DOWN:
                if (snake.length === 1 || direction !== UP) {
                    direction = event.keyCode;
                }
                break;
        }
    });
} ());