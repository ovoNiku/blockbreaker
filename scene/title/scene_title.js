class TitleScene extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('Enter', () => {
            var s = new Scene(game)
            game.replaceScene(s)
        })
        this.setup()
    }

    setup() {
        this.bg = new NikuImage(this.game, 'bg')
        this.title = new NikuImage(this.game, 'title')
        this.bg.w = 600
        this.bg.h = 400
        this.title.x = 100
        this.title.y = 50
        this.title.w = 400
        this.title.h = 200
        this.addElements(this.bg)
        this.addElements(this.title)
    }

    draw() {
        super.draw()
        this.game.context.font = "small-caps bold 20pt arial";            //设置文本大小 + 字体
        this.game.context.fillStyle = "white";
        this.game.context.fillText("按 Enter 开始游戏", 270, 250, 300)
    }
}