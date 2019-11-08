class NikuImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.texttureByname(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }

    update() {
    }

    draw() {
        this.game.drawImage(this)
    }

    collide(b) {
        return rectIntersects(this, b) || rectIntersects(b, this)
    }
}
