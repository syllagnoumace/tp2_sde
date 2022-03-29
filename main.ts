input.onButtonPressed(Button.A, function () {
    for (let i = 0; i <= 9; i++) {
        basic.showNumber(8)
    }
})
let a = "gnoumace sylla"
basic.showString(a)
led.plot(2, 3)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        images.iconImage(IconNames.Heart).showImage(0)
    } else if (input.buttonIsPressed(Button.B)) {
        images.iconImage(IconNames.Sad).showImage(0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(0, 0)
    } else if (input.buttonIsPressed(Button.A)) {
        led.unplot(0, 0)
    }
})
