(function () {
    'use strict';

    var canvas = document.getElementById('theCanvas'),
        ctx = canvas.getContext('2d'),
        numAntsInput = document.getElementById('numAnts'),
        antColorInput = document.getElementById('antColor'),
        ants = [],
        frameNumber = 0;

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function Ant(color, speed) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.color = color || 'black';
        this.brains = 0;
        this.speed = speed || 1;
    }

    Ant.prototype.move = function () {
        if (frameNumber % this.speed === 0) {
            if (--this.brains <= 0) {
                this.brains = getRandomNumber(50, 100);
                this.moveX = getRandomNumber(-1, 1);
                this.moveY = getRandomNumber(-1, 1);
            }
            this.x += this.moveX;
            this.y += this.moveY;

            if (this.x < 0) {
                this.x = 0;
            } else if (this.x >= canvas.width) {
                this.x = canvas.width - 1;
            }

            if (this.y < 0) {
                this.y = 0;
            } else if (this.y >= canvas.height) {
                this.y = canvas.height - 1;
            }
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 2, 2);
    };

    function addAnts(numAnts, color) {
        for (var i = 0; i < numAnts; i++) {
            ants.push(new Ant(color, i % 2 !== 0 ? 1 : 2));
        }
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 10;
    }

    window.addEventListener('resize', function () {
        resizeCanvas();
    });

    resizeCanvas();
    addAnts(10000);

    setInterval(function () {
        ++frameNumber;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(function (ant) {
            ant.move();
        });
    }, 100);

    document.getElementById('addAnts').addEventListener('click', function () {
        addAnts(numAntsInput.value, antColorInput.value);
    });
} ());