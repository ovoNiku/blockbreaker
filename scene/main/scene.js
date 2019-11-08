class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.score = 0
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.numberOfEnemies = 10
        this.numberOflives = 3
        this.bg = new NikuImage(this.game, 'bg')
        this.bg.w = 600
        this.bg.h = 400
        this.paddle = new Paddle(this.game)
        this.ball = new Ball(this.game)
        // this.addEnemies()
        this.addElements(this.bg)
        this.addElements(this.paddle)
        this.addElements(this.ball)
    }

    addEnemies() {
        // var es = []
        // for (let i = 0; i < this.numberOfEnemies; i++) {
        //     var e = new Enemy(this.game)
        //     es.push(e)
        //     this.addElements(e)
        // }
        // this.enemies = es
    }

    setupInputs() {
        this.game.registerAction('a', () => {
            this.paddle.moveLeft()
        })
        this.game.registerAction('d', () => {
            this.paddle.moveRight()
        })
        this.game.registerAction(' ', () => {
            this.paddle.fire()
        })
    }

    draw() {
        super.draw()
        this.game.context.font = "18pt Georgia";
        this.game.context.fillStyle = "white";
        this.game.context.fillText('score: ' + this.score, 5, 20, 200)
    }

    update() {
        super.update()
    }
}


