class Game {
    constructor(fps, images, callback) {
        window.fps = fps
        this.images = images
        this.callback = callback
        this.actions = {}
        this.keydowns = {}
        this.scene = null
        this.canvas = e("#myCanvas")
        this.context = this.canvas.getContext("2d")
        window.addEventListener('keydown', (event) => {
            var k = event.key
            this.keydowns[event.key] = true
        })

        window.addEventListener('keyup', (event) => {
            var k = event.key
            this.keydowns[event.key] = false
        })
        this.init()
    }

    draw() {
        this.scene.draw()
    }

    update() {
        this.scene.update()

    }

    drawImage(image) {
        this.context.drawImage(image.texture, image.x, image.y, image.w, image.h)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    runloop() {
        var g = this
        var actions = Object.keys(this.actions)
        for (let i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    texttureByname(name) {
        var g = this
        var img = g.images[name]
        // var image = {
        //     image: img,
        //     w: img.width,
        //     h: img.height,
        // }
        return img
    }

    runWithScene(scene) {
        var g = this
        g.scene = scene
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    run() {
        this.callback(this)
    }

    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                g.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    g.run()
                }
            }
        }
    }
}

