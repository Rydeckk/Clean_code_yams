export function yamsResultRoll(rolls: Array<number>): number {

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
        if(countDiceValueAppear === 3) {
            return 28
        } else if(countDiceValueAppear === 4) {
            return 35
        } else if (countDiceValueAppear === 5) {
            return 50
        }
    }

    return rolls.reduce((sumDices, currentDiceValue) => sumDices + currentDiceValue, 0);
}