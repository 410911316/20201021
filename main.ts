basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (x == 1) {
                led.plot(4 - x, 4 - y)
                basic.pause(100)
            } else if (x == 3) {
                led.plot(4 - x, 4 - y)
                basic.pause(100)
            } else {
                led.plot(4 - x, y)
                basic.pause(100)
            }
        }
    }
})
