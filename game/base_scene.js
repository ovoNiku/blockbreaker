class BaseScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.draw()
    }
    addElements(img) {
        img.scene = this
        this.elements.push(img)
    }
    removeElements(img) {
        img.scene = this
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i] === img) {
                this.elements.splice(i, 1)
            }
        }
    }
    draw() {
        for (var e of this.elements) {
            e.draw()
        }
    }
    update() {
        for (let i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
}

