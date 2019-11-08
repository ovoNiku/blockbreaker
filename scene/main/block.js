class Block extends NikuImage {
    constructor(game, position) {
        super(game, 'block')
        this.x = position[0]
        this.y = position[1]
        this.setup()
    }

    setup() {
        this.lives = randomBetween(1, 3)
        // this.life = true
    }
}
