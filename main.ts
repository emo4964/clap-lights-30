let lightsOn = false
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
