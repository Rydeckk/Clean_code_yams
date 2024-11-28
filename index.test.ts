import { sumDices  } from ".";

describe("romanNumber", () => {
    it('Envoi un tableau de lancers [2,4,6,2,4] et doit obtenir 18', () => {
        expect(sumDices([2,4,6,2,4])).toBe(18);
      })
});