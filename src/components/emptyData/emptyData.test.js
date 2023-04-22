import { render, screen } from '@testing-library/react';
import EmptyData from '.';

describe('<EmptyData />', () => {
  it('should render message', () => {
    render(<EmptyData message='Test Message' />);
    
    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });
});