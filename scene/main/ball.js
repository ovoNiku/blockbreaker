class Ball extends NikuImage {
    constructor(game) {
        super(game, 'ball')
        this.setup()
    }

    setup() {
        this.speed = 10
        this.x = 150
        this.y = 270
    }

    move() {
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x > 400 + this.w * 2) {
            this.x = 400  + this.w * 2
        }
    }

    fire() {
    }

    moveLeft() {
        this.move(this.x -= this.speed)
    }

    moveRight() {
        this.move(this.x += this.speed)
    }
}

