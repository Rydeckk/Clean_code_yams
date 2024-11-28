export function yamsResultRoll(rolls: Array<number>): number {
    let rollIsYams = true

    for(let i = 0; i < rolls.length; i++) {
        for(let j = 0; j < rolls.length; j++) {
            if(j === i) {
                continue
            }
            if(rolls[j] !== rolls[i]) {
                rollIsYams = false
                break
            }
        }
        if(rollIsYams === true) {
            return 50
        }
    }

    return rolls.reduce((sumDices, currentDiceValue) => sumDices + currentDiceValue, 0);
}