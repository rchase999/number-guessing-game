input.onButtonPressed(Button.A, function () {
    if (have_chosen == 0) {
        if (choice >= 1) {
            choice += -1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    have_chosen = 1
    if (attempts >= 1) {
        attempts += -1
        if (choice == random) {
            basic.showIcon(IconNames.Yes)
            win = 1
            InitGame()
        } else {
            basic.showIcon(IconNames.No)
            if (choice < random) {
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    `)
            } else {
                basic.showLeds(`
                    # . . . #
                    . . . . .
                    . # . # .
                    . . . . .
                    . . # . .
                    `)
            }
            basic.pause(2000)
            have_chosen = 0
        }
    } else {
        basic.showString("The number is" + random)
        InitGame()
    }
})
input.onButtonPressed(Button.B, function () {
    if (have_chosen == 0) {
        if (choice <= max_range - 1) {
            choice += 1
        }
    }
})
function InitGame () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
    have_chosen = 0
    max_range = 30
    win = 0
    random = randint(0, max_range)
    attempts = 5
    choice = 0
}
let max_range = 0
let win = 0
let random = 0
let attempts = 0
let choice = 0
let have_chosen = 0
InitGame()
basic.forever(function () {
    if (have_chosen == 0) {
        basic.showNumber(choice)
        basic.clearScreen()
        basic.pause(1000)
    }
})
