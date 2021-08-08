import { render, screen } from '@tests/.';
import MinLink from '.';

describe('MinLinkk', () => {
  it('should render children', () => {
    render(
      <MinLink href='/'>
        <span data-testid='test-span'>Test</span>
      </MinLink>,
    );

    const testSpan = screen.getByTestId('test-span');

    expect(testSpan).toBeInTheDocument();
  });

  it('should provide given testId', () => {
    render(
      <MinLink href='/test' dataTestId='provided-test-id'>
        <span>Test</span>
      </MinLink>,
    );

    const link = screen.getByTestId('provided-test-id');

    expect(link).toBeInTheDocument();
  });
});
