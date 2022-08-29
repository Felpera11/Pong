class Player {
    constructor(position = new vector2(0, 0), size = new vector2(), speed = 1, color = "black", controller) {
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.color = color;
        this.controller = controller;

        this.col = new collider(new vector2(), 0);
    }

    setCollider(col = new collider(new vector2(this.position.x, this.position.y), new vector2(this.size.x, this.size.y))) {
        this.col = col;
    }

    /**Runs rendering logic */
    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }


    /**Runs game logic */
    tick() {
        var move = new vector2(0, this.controller.state.Vertical * this.speed);
        this.position = this.position.add(move);
        this.col.position = this.position;

        this.position = clampPosition(this.position, this.size, HEIGHT);


        if (this.col.checkCollision(ball.col)) {
            if (Math.abs(ball.speed.x) < 30) {
                ball.speed.x = ball.speed.x * -1.04;
            }
            else {
                ball.speed.x = ball.speed.x * -1;
            }

            let speedY = Math.random() * 8 + 1.5;
            if (Math.random() > 0.5) {
                speedY *= -1;
            }
            ball.speed.y = speedY;
        }

    }
}




class Ball {
    constructor(position = new vector2(0, 0), size = 10, speed = new vector2(), color = "black") {
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.color = color;

        this.col = new collider(new vector2(), 0);
    }

    setCollider(col = new collider(new vector2(this.position.x, this.position.y), new vector2(this.size * 2, this.size * 2))) {
        this.col = col;
    }

    /**Runs rendering logic */
    render() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false);
        ctx.fill();
    }


    /**Runs game logic */
    tick() {
        var move = new vector2(this.speed.x, this.speed.y);
        this.position = this.position.add(move);
        this.col.position = this.position;

        if (this.position.y < 0) {
            this.position.y = 0;
            this.speed.y *= -1;
        }
        else if (this.position.y > HEIGHT - this.size * 2) {
            this.position.y = HEIGHT - this.size * 2;
            this.speed.y *= -1;
        }




        if (this.position.x < 0) {
            score2++;

            entities.length = 0;

            player1 = new Player(new vector2(60, 200), new vector2(20, 110), 20, "black", controller);
            player1.setCollider();
            entities.push(player1);

            player2 = new Player(new vector2(WIDTH - 80, 200), new vector2(20, 110), 20, "black", controller2);
            player2.setCollider();
            entities.push(player2);

            randY = Math.random() * 2.5;
            ballSpeed = 14;
            if (Math.random() > 0.5) {
                randY *= -1;
            }
            if (Math.random() > 0.5) {
                ballSpeed *= -1;
            }

            ball = new Ball(new vector2(WIDTH / 2, HEIGHT / 2 + 12), 12, new vector2(ballSpeed, 1), "black");
            ball.setCollider();
            entities.push(ball);
        }
        else if (this.position.x > WIDTH + this.size) {
            score1++;

            entities.length = 0;

            player1 = new Player(new vector2(60, 200), new vector2(20, 110), 20, "black", controller);
            player1.setCollider();
            entities.push(player1);

            player2 = new Player(new vector2(WIDTH - 80, 200), new vector2(20, 110), 20, "black", controller2);
            player2.setCollider();
            entities.push(player2);

            randY = Math.random() * 2.5;
            ballSpeed = 14;
            if (Math.random() > 0.5) {
                randY *= -1;
            }
            if (Math.random() > 0.5) {
                ballSpeed *= -1;
            }

            ball = new Ball(new vector2(WIDTH / 2, HEIGHT / 2 + 12), 12, new vector2(ballSpeed, 1), "black");
            ball.setCollider();
            entities.push(ball);
        }
    }
}





class collider {
    constructor(position = new vector2(), size = new vector2()) {
        this.position = position;
        this.size = size;

        collider.prototype.toString = function () {
            return "(" + this.position.x + "," + this.position.y + ")";
        }
    }

    /**Returns wheter this object's shape overlaps with another shape */
    checkCollision(col) {
        if (col.size.x == 0 || col.size.y == 0) {
            return false;
        }

        if (this.position.x + this.size.x < col.position.x || this.position.x > col.position.x + col.size.x) {
            return false;
        }
        if (this.position.y + this.size.y < col.position.y || this.position.y > col.position.y + col.size.y) {
            return false;
        }
        return true;
    }
}
