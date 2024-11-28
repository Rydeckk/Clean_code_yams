export function yamsResultRoll(rolls: Array<number>): number {
    let rollIsYams = true

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