const log = console.log.bind(console)
const e = (selector) => document.querySelector(selector)

var imgFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}
var randomBetween = function (start, end) {
    var m = Math.random() * (end - start + 1)
    return Math.floor(m + start)
}
var rectIntersects = function (a, b) {
    if (b.y > a.y - a.h && b.y < a.y + a.h) {
        if (b.x > a.x && b.x < a.x + a.w) {
            return true
        }
    }
    return false
}
