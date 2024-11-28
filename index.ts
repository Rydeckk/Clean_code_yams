export function sumDices(rolls: Array<number>): number {
    return rolls.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}