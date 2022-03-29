def on_button_pressed_a():
    for i in range(10):
        basic.show_number(8)
input.on_button_pressed(Button.A, on_button_pressed_a)

a = "gnoumace sylla"
basic.show_string(a)
led.plot(2, 3)

def on_forever():
    if input.button_is_pressed(Button.A):
        images.icon_image(IconNames.HEART).show_image(0)
    elif input.button_is_pressed(Button.B):
        images.icon_image(IconNames.SAD).show_image(0)
basic.forever(on_forever)
