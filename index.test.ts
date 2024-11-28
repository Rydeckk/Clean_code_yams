import { yamsResultRoll  } from ".";

describe("romanNumber", () => {
    it.each([
        { input: [2,4,6,2,4], output: 18},
        { input: [2,2,2,2,2], output: 50},
        { input: [2,2,2,2,4], output: 35},
    ])
    ('Envoi un tableau de lancers $input et doit obtenir $output', ({input, output}) => {
        expect(yamsResultRoll(input)).toBe(output);
      })
});