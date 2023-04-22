import { useState, useMemo, Suspense } from 'react';
import Loader from '../loader';
import { personAPaymentData, personBPaymentData, personCPaymentData } from '../../mock';
import { pointsFormulaCalculator }from '../../utils';
import PointsDisplay from '../pointsDisplay';
import NoData from '../emptyData';
import { getRequest } from '../../service';

import './styles.scss';

const PointsCalculator = () => {
    const paymentDataCombined = useMemo(() => [...personAPaymentData, ...personBPaymentData, ...personCPaymentData], []);
    const [calculatedData, setCalculatedData] = useState({ perMonth: [], total: [] });
    const [isFakeResponse, setIsFakeResponse] = useState({ // API call simulation
        pending: false,
        filfilled: false,
    });

    const handleCalculate = () => {
        try {
            setIsFakeResponse({ pending: true, fulfilled: false });
            const monthArr = [],
            totalArr = [];
            paymentDataCombined.forEach((paymentData) => {
                monthArr.push({ ...paymentData, points: pointsFormulaCalculator(paymentData.paymentSum) });
            });
    
            let totalValue = 0;
    
            for (let i = 0; i < monthArr.length; i++ ) {
                const filteredData = {
                    _id: monthArr[ i ]._id,
                    personId: monthArr[ i ].personId,
                    name: monthArr[ i ].name
                };
                if (!monthArr[ i + 1]) {
                    totalArr.push({ ...filteredData, total: totalValue });
                    break;
                };
                if (monthArr[ i ].personId === monthArr[ i + 1 ].personId) {
                    totalValue += monthArr[ i ].points;
                } else {
                    totalArr.push({ ...filteredData, total: totalValue + monthArr[ i ].points });
                }
            };

            getRequest(() => { // API call simulation
                setIsFakeResponse({ pending: false, filfilled: true });
                setCalculatedData({ perMonth: monthArr, total: totalArr });
            });
            // throw new Error('Something went wrong, try again'); // Error simulation

        } catch (error) {
            alert(error);
        };
    };

    return (
        <>
            <div className='calculator'>
                <h1 data-testid='calculate-title'><b>Click to calculate points</b></h1>
                <button
                    type='button'
                    onClick={handleCalculate}
                    data-testid='calculate-btn'
                >
                    <b>{calculatedData.perMonth.length || calculatedData.total.length ? 'Update' : 'Calculate'}</b>
                </button>
            </div>
            {isFakeResponse.pending && <Loader />}
            {isFakeResponse.filfilled && (
                <Suspense fallback={<Loader />}>
                    <PointsDisplay dataToRender={calculatedData} />
                </Suspense>
            )}
            {(!isFakeResponse.filfilled && !isFakeResponse.pending) && <NoData message='No data found' />}
        </>
    )
};

export default PointsCalculator;
