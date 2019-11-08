class EndScene extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('r', () => {
            var s = new TitleScene(game)
            game.replaceScene(s)
        })
        this.setup()
    }

    setup() {
        this.bg = new NikuImage(this.game, 'bg')
        this.title = new NikuImage(this.game, 'title1')
        this.bg.w = 800
        this.bg.h = 1000
        this.title.x = 120
        this.title.y = 300
        this.title.w = 570
        this.title.h = 200
        this.addElements(this.bg)
        this.addElements(this.title)
    }

    draw() {
        super.draw()
        this.game.context.font = "30pt Georgia";            //设置文本大小 + 字体
        this.game.context.fillStyle = "black";
        this.game.context.fillText("按 R 返回标题页面", 230, 570, 600)
    }
}