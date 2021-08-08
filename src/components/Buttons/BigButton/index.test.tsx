import { render, screen, userEvent } from '@tests/.';
import BigButton from '.';

describe('BigButton', () => {
  it('should trigger callback when clicked', () => {
    const mockFn = jest.fn();

    render(
      <BigButton onClick={mockFn}>Test</BigButton>,
    );

    const button = screen.getByTestId('button');

    userEvent.click(button);
    userEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should render text correctly', () => {
    render(
      <BigButton onClick={() => {}}>Test</BigButton>,
    );

    const button = screen.getByTestId('button');

    expect(button.innerHTML).toBe('Test');
  });
});
