input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    Player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    Player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    Player.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    Player.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    Player.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    Player.change(LedSpriteProperty.X, 1)
    basic.pause(100)
    Player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
let Player: game.LedSprite = null
Player = game.createSprite(0, 0)
