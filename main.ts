function lampu4 () {
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0xffff00)
    basic.pause(Delay)
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0xff9da5)
    basic.pause(Delay)
}
// When button A is pressed, show the current tempo (bpm).
input.onButtonPressed(Button.A, function () {
    mode = randint(1, 4)
})
function lampu1 () {
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0xff0000)
    basic.pause(Delay)
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0x00ff00)
    basic.pause(Delay)
}
function lampu3 () {
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0x0000ff)
    basic.pause(Delay)
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0xff8000)
    basic.pause(Delay)
}
function lampu2 () {
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0xffff00)
    basic.pause(Delay)
    edubitRgbBit.rotatePixels(1)
    basic.pause(Delay)
    edubitRgbBit.showColor(0xff0080)
    basic.pause(Delay)
}
let Delay = 0
let mode = 0
mode = 1
basic.forever(function () {
    basic.showNumber(mode)
    // Set variable tempo to rounded value of potentiometer reading mapped from low 0 high 1023 to low 40 high 200.
    Delay = Math.round(pins.map(
    edubitPotentioBit.readPotValue(),
    0,
    1023,
    100,
    1000
    ))
    if (mode == 1) {
        lampu1()
    } else if (mode == 2) {
        lampu2()
    } else if (mode == 3) {
        lampu3()
    } else {
        lampu4()
    }
})
