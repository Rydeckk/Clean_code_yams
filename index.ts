export function yamsResultRoll(rolls: Array<number>): number {
    let rollIsYams = true

    for(let i = 0; i < rolls.length; i++) {
        let countDiceValueAppear = 1
        for(let j = 0; j < rolls.length; j++) {
            if(j === i) {
                continue
            }

            if(rolls[j] === rolls[i]) {
                countDiceValueAppear++
            }
        }
        if(countDiceValueAppear === 4) {
            return 35
        }
    }

    for(let i = 1; i < rolls.length; i++) {
        if(rolls[i] !== rolls[0]) {
            rollIsYams = false
            break
        }
    }

    if(rollIsYams === true) {
        return 50
    }

    return rolls.reduce((sumDices, currentDiceValue) => sumDices + currentDiceValue, 0);
}