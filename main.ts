enum ActionKind {
    Walking,
    Idle,
    Jumping
}
// Don't forget to comment your code as you work!
let notPlanning: Sprite = null
let planning: Sprite = null
scene.setBackgroundColor(6)
let birthday = game.askForNumber("How many days are left till your birthday?", 4)
let name = game.askForString("What's your name?", 12)
if (birthday < 20) {
    planning = sprites.create(img`
        . 6 6 6 6 6 6 6 6 6 6 6 . . . . 
        6 6 6 6 6 6 6 5 5 6 6 6 6 6 . . 
        5 5 5 5 5 5 5 5 5 5 6 6 6 6 . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    for (let index = 0; index < 3; index++) {
        planning.sayText("It's almost my birthday!")
    }
    animation.runMovementAnimation(
    planning,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
} else {
    notPlanning = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    for (let index = 0; index < 3; index++) {
        notPlanning.sayText("It's still not my birthday!")
    }
    animation.runMovementAnimation(
    notPlanning,
    animation.animationPresets(animation.shake),
    2000,
    true
    )
}
