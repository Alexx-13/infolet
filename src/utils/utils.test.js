import { pointsFormulaCalculator } from '.';

describe('pointsFormulaCalculator', () => {
    it('should calculate correctly when less then 50', () => {
       expect(pointsFormulaCalculator(1)).toBe(0);
       expect(pointsFormulaCalculator(49)).toBe(0);
       expect(pointsFormulaCalculator(32)).toBe(0);
    });
    it('should calculate correctly when less then 100 and more then 50', () => {
        expect(pointsFormulaCalculator(51)).toBe(1);
        expect(pointsFormulaCalculator(63)).toBe(13);
        expect(pointsFormulaCalculator(97)).toBe(47);
    });
    it('should calculate correctly when more then 100', () => {
        expect(pointsFormulaCalculator(101)).toBe(52);
        expect(pointsFormulaCalculator(450)).toBe(750);
        expect(pointsFormulaCalculator(320)).toBe(490);
    });
});
