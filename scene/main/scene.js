class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.score = 0
        this.level = 0
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.bg = new NikuImage(this.game, 'bg')
        this.bg.w = 600
        this.bg.h = 400
        this.paddle = new Paddle(this.game)
        this.ball = new Ball(this.game)
        this.addElements(this.bg)
        this.addElements(this.paddle)
        this.addElements(this.ball)
        this.addEnemies()
    }

    addEnemies() {
        var bs = []
        for (var i of levels[this.level]) {
            var b = new Block(this.game, i)
            bs.push(b)
            this.addElements(b)
        }
        this.blocks = bs
    }

    setupInputs() {
        this.game.registerAction('a', () => {
            this.paddle.moveLeft()
        })
        this.game.registerAction('d', () => {
            this.paddle.moveRight()
        })
        this.game.registerAction(' ', () => {
            this.ball.fire()
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
        this.ball.move()
        var existBlocks = this.blocks.filter(b => b.lives > 0)
        // 小球和挡板碰撞
        if (this.ball.collide(this.paddle)) {
            this.ball.rebound()
        }
        // 小球和砖块碰撞
        for (var b of existBlocks) {
            if (b.collide(this.ball)) {
                b.lives--
                this.ball.rebound()
                if (b.lives === 0) {
                    this.removeElements(b)
                }
                this.score += 100
            }
        }
        // 砖块打完进入下一关
        if (existBlocks.length === 0) {
            this.level++
            this.addEnemies()
        }
        // 小球掉落或关卡打完游戏结束
        if (this.ball.live === false || levels[this.level] === undefined) {
            var s = new EndScene(this.game)
            this.game.replaceScene(s)
        }
    }
}


