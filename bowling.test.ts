import { calculateScore } from './bowling';

describe('Calculateur de score de bowling', () => {
    it('un score de 300 pour une partie parfaite', () => {
        expect(calculateScore('XXXXXXXXXXXX')).toBe(300);
    });

    it('un score de 90 pour tous les 9 et ratés', () => {
        expect(calculateScore('9-9-9-9-9-9-9-9-9-9-')).toBe(90);
    });

    it('un score de 150 pour tous les spares avec 5', () => {
        expect(calculateScore('5/5/5/5/5/5/5/5/5/5/5')).toBe(150);
    });

    it('un score de 167 pour une séquence valide connue', () => {
        expect(calculateScore('X7/9-X-88/-6XXX81')).toBe(167);
    });

    it('une partie avec un score de 0', () => {
        expect(calculateScore('--------------------')).toBe(0);
    });
});
