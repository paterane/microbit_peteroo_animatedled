function crossCatch () {
    I = [
    0,
    -40,
    -80,
    -120,
    -160
    ]
    index2 = randint(0, 4)
    index3 = randint(0, 4)
    for (let index = 0; index < 50; index++) {
        for (let index1 = 0; index1 <= 4; index1++) {
            if (I[index1] <= 255 && lock[index1] == false) {
                I[index1] = I[index1] + 15
            } else {
                I[index1] = I[index1] - 15
                led.plotBrightness(index2, index1, I[index1])
                led.plotBrightness(index1, index3, I[index1])
                if (I[index1] <= 0) {
                    lock[index1] = false
                } else {
                    lock[index1] = true
                }
            }
        }
        basic.pause(15)
    }
}
input.onButtonPressed(Button.A, function () {
    active = false
    onetime = true
})
function barShift () {
    index3 = randint(0, 1)
    for (let index2 = 0; index2 <= 4; index2++) {
        I = [
        0,
        -40,
        -80,
        -120,
        -160
        ]
        for (let index = 0; index < 54; index++) {
            for (let index1 = 0; index1 <= 4; index1++) {
                if (I[index1] <= 255 && lock[index1] == false) {
                    I[index1] = I[index1] + 15
                } else {
                    I[index1] = I[index1] - 15
                    if (index3 == 0) {
                        if (index2 == 1 || index2 == 3) {
                            led.plotBrightness(4 - index1, index2, I[index1])
                        } else {
                            led.plotBrightness(index1, index2, I[index1])
                        }
                    } else {
                        if (index2 == 1 || index2 == 3) {
                            led.plotBrightness(index2, 4 - index1, I[index1])
                        } else {
                            led.plotBrightness(index2, index1, I[index1])
                        }
                    }
                    if (I[index1] <= 0) {
                        lock[index1] = false
                    } else {
                        lock[index1] = true
                    }
                }
            }
            if (lock[index1] == true) {
                basic.pause(30)
            }
        }
    }
}
function backforth () {
    I = [
    0,
    -40,
    -80,
    -120,
    -160
    ]
    index2 = randint(0, 1)
    for (let index = 0; index < 46; index++) {
        for (let index1 = 0; index1 <= 4; index1++) {
            if (I[index1] <= 255 && lock[index1] == false) {
                I[index1] = I[index1] + 15
            } else {
                I[index1] = I[index1] - 15
                for (let index = 0; index <= 4; index++) {
                    if (index2 == 0) {
                        led.plotBrightness(index, index1, I[index1])
                    } else {
                        led.plotBrightness(index1, index, I[index1])
                    }
                }
                if (I[index1] <= 0) {
                    lock[index1] = false
                } else {
                    lock[index1] = true
                }
            }
        }
        if (lock[index1] == true) {
            basic.pause(30)
        }
    }
    I = [
    0,
    -40,
    -80,
    -120,
    -160
    ]
    for (let index = 0; index < 46; index++) {
        for (let index1 = 0; index1 <= 4; index1++) {
            if (I[index1] <= 255 && lock[index1] == false) {
                I[index1] = I[index1] + 15
            } else {
                I[index1] = I[index1] - 15
                for (let index = 0; index <= 4; index++) {
                    if (index2 == 0) {
                        led.plotBrightness(index, 4 - index1, I[index1])
                    } else {
                        led.plotBrightness(4 - index1, index, I[index1])
                    }
                }
                if (I[index1] <= 0) {
                    lock[index1] = false
                } else {
                    lock[index1] = true
                }
            }
        }
        if (lock[index1] == true) {
            basic.pause(30)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    active = true
})
function helix () {
    if (onetime) {
        onetime = false
        I = [
        0,
        -40,
        -80,
        -120,
        -160,
        -200,
        -240,
        -280,
        -320,
        -360,
        -400,
        -440,
        -480,
        -520,
        -560,
        -600,
        -640,
        -680,
        -720,
        -760,
        -800,
        -840,
        -880,
        -920,
        -960
        ]
    }
    for (let index1 = 0; index1 <= 24; index1++) {
        if (I[index1] <= 255 && lock[index1] == false) {
            I[index1] = I[index1] + 15
        } else {
            I[index1] = I[index1] - 15
            if (index1 >= 0 && index1 <= 4) {
                led.plotBrightness(index1, 0, I[index1])
            } else if (index1 >= 5 && index1 <= 8) {
                led.plotBrightness(4, index1 - 4, I[index1])
            } else if (index1 >= 9 && index1 <= 12) {
                led.plotBrightness(12 - index1, 4, I[index1])
            } else if (index1 >= 13 && index1 <= 15) {
                led.plotBrightness(0, 16 - index1, I[index1])
            } else if (index1 >= 16 && index1 <= 18) {
                led.plotBrightness(index1 - 15, 1, I[index1])
            } else if (index1 >= 19 && index1 <= 20) {
                led.plotBrightness(3, index1 - 17, I[index1])
            } else if (index1 >= 21 && index1 <= 22) {
                led.plotBrightness(23 - index1, 3, I[index1])
            } else {
                led.plotBrightness(index1 - 22, 2, I[index1])
            }
            if (I[index1] <= 0) {
                lock[index1] = false
            } else {
                lock[index1] = true
            }
        }
    }
    basic.pause(20)
}
let index1 = 0
let index3 = 0
let index2 = 0
let I: number[] = []
let onetime = false
let active = false
let lock: boolean[] = []
lock = [
false,
false,
false,
false,
false
]
active = false
onetime = true
basic.forever(function () {
    while (active == false) {
        backforth()
    }
    basic.clearScreen()
    while (active == true) {
        crossCatch()
    }
    basic.clearScreen()
    while (active == false) {
        barShift()
    }
    basic.clearScreen()
    while (active == true) {
        helix()
    }
    basic.clearScreen()
})
