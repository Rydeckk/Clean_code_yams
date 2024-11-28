export function yamsResultRoll(rolls: Array<number>): number {
    const valueDicePossible: Record<number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    }

    rolls.forEach((currentValueDice) => {
        valueDicePossible[currentValueDice]++
    })

    for (const valueDice in valueDicePossible) {
        if(valueDicePossible[valueDice] === 3) {
            for(const valueDice in valueDicePossible) {
                if(valueDicePossible[valueDice] === 2) {
                    return 30
                }
            }
            return 28
        } else if(valueDicePossible[valueDice] === 4) {
            return 35
        } else if (valueDicePossible[valueDice] === 5) {
            return 50
        }
    }

    return rolls.reduce((sumDices, currentDiceValue) => sumDices + currentDiceValue, 0);
}