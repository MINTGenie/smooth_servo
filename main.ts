input.onButtonPressed(Button.A, function () {
    value += 70
})
input.onButtonPressed(Button.B, function () {
    value += -70
})
let valsmt_prev = 0
let value = 0
let val_smoothed = 70
basic.forever(function () {
    val_smoothed = value * 0.05 + valsmt_prev * 0.95
    valsmt_prev = val_smoothed
    magicbit.Servo(magicbit.Servos.S1, val_smoothed / 2)
    magicbit.Servo(magicbit.Servos.S2, val_smoothed)
    magicbit.Servo(magicbit.Servos.S3, val_smoothed)
    serial.writeValue("x", val_smoothed)
})
