import { formulaParams } from '../constants';

export const pointsFormulaCalculator = (spendingAmount) => {
    let pointsResult = 0;
    const { 
        onePointLimit,
        twoPointsLimit,
        onePoint,
        twoPoints
    } = formulaParams;
    
    if (!spendingAmount || spendingAmount < onePointLimit) return pointsResult;

    const amountOfDoublePointsIterations = Math.floor(spendingAmount / twoPointsLimit);

    if (amountOfDoublePointsIterations === onePoint) {
        pointsResult = (spendingAmount % twoPointsLimit) * twoPoints;
    } else if (amountOfDoublePointsIterations > onePoint) {
        pointsResult = (
            (spendingAmount % twoPointsLimit) + (amountOfDoublePointsIterations * twoPointsLimit) - twoPointsLimit
        ) * twoPoints;
    }

    if (spendingAmount <= twoPointsLimit) {
        pointsResult += spendingAmount - onePointLimit;
    } else {
        pointsResult += onePointLimit;
    }

    return pointsResult;
};