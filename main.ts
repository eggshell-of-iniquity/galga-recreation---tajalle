controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerLaser = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 8 8 8 8 8 8 8 8 8 8 8 9 . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 100, 0)
})
let alienSprite: Sprite = null
let playerLaser: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . d d d d d d . . . . . . . . . 
    . d 1 1 1 1 d d . . . . . . . . 
    . d 1 1 1 1 1 d d . . . . . . . 
    . d 1 1 1 1 1 1 1 e d . . . . . 
    . . d 1 1 1 1 e e e f d d . . . 
    . . . e e e e e f d d d f d . . 
    . . . . f d f d d d d d f f d . 
    . . . . . d d d d d d d d d d . 
    . . . . . . d d d d d . . . . . 
    . . . . . . . . . . 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    alienSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 8 . 7 7 7 . 8 . . . . . . 
        . . . . 8 7 7 7 8 7 . . . . . . 
        . . . . 7 8 7 8 7 7 . . . . . . 
        . . . . 7 2 7 2 7 7 . . . 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 . 7 7 f f f f 7 . . . . . 
        . 7 7 . f f f f f f 7 . . . . . 
        . 7 . . f f f f f f f . . . . . 
        . . . . 9 f 9 f f f 9 . . . . . 
        . . . . . . . f 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
