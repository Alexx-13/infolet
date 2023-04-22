import { render } from '@testing-library/react';
import Loader from '.';

describe('<Loader />', () => {
  it('should render loader', () => {
    const { container } = render( <Loader />);
    expect(container).toMatchSnapshot();
  });
});