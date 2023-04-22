import { render, screen } from '@testing-library/react';
import PointsCalculator from '.';

describe('<PointsCalculator />', () => {
  it('should render calculate button', () => {
    render(<PointsCalculator />);
    
    expect(screen.getByTestId('calculate-btn')).toBeInTheDocument();
  });
  it('should render calculate title', () => {
    render(<PointsCalculator />);

    expect(screen.getByTestId('calculate-title')).toBeInTheDocument();
  });
});