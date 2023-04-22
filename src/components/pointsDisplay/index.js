import { tableColumns } from '../../mock';
import { Suspense } from 'react';
import Table from '../table';
import Loader from '../loader';

const PointsDisplay = ({ dataToRender }) => {
    const { perMonth, total } = dataToRender;

    return (
        <Suspense fallback={<Loader />}>
            <section className='display'>
                <Table
                    title='Data per months'
                    head={tableColumns.perMonth}
                    body={perMonth} 
                />
                <Table 
                    title='Data total'
                    head={tableColumns.total}
                    body={total}
                />
            </section>
        </Suspense>
        
    )
};

export default PointsDisplay;
