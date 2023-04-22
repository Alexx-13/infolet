import { render, screen } from '@testing-library/react';
import Table from '.';
import { tableColumns, personAPaymentData } from '../../mock';

describe('<Table />', () => {
    it('should render passed columns', () => {
        render(<Table head={tableColumns.total} body={personAPaymentData} />);

        const columnLabel1 = screen.getByText('Person Id');
        expect(columnLabel1).toBeInTheDocument();
        const columnLabel2 = screen.getByText('Name');
        expect(columnLabel2).toBeInTheDocument();
        const columnLabel3 = screen.getByText('Total Points Earned');
        expect(columnLabel3).toBeInTheDocument();
    });

    it('should render passed title', () => {
        render(<Table head={tableColumns.total} body={personAPaymentData} title='Test Title' />);

        const title = screen.getByText('Test Title');
        expect(title).toBeInTheDocument();
    });

    it('should not render if there are no data', () => {
        render(<Table head={tableColumns.total} body={[]} title='Test Title'/>);

        expect(screen.queryByText("Test Title")).toBeNull();
    })
});
