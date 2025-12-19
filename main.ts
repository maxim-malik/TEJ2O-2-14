/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maxim Malik
 * Created on: Dec 2025
 * This program lights microbit lights diagonally
*/

// variables
let loopCounter: number = 0
let sprite: game.LedSprite = null

// on start
basic.showIcon(IconNames.Happy)

// on button A pressed an LED lights up diagonally from the top left corner to the bottom right corner
input.onButtonPressed(Button.A, function () {
    // setting values
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(500)
        loopCounter++
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// on button B pressed an LED lights up diagonally from the bottom right corner to top the left corner
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    loopCounter = 5
    sprite = game.createSprite(5, 5)

    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        basic.pause(500)
        loopCounter--
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
