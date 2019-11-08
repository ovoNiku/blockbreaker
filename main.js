var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        }
    })
}

// var loadLevel = (game) => {
//     var level = levels[0]
//     enemies = new Array()
//     for (let i = 0; i < level.length; i++) {
//         var p = level[i]
//         var e = Enemy(game, p)
//         enemies.push(e)
//     }
//     return enemies
// }

var __main = function () {
    var images = {
        ball: 'images/ball.png',
        paddle: 'images/paddle.png',
        bg: 'images/bg.png',
        title: 'images/title.png',
        title1: 'images/title1.png',
    }
    var game = new Game(30, images, function () {
        var s = new TitleScene(game)
        game.runWithScene(s)
    })
    enableDebugMode(game, true)
}

__main()

