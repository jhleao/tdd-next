import { render, screen, userEvent } from '@tests/.';
import { AiFillAliwangwang } from 'react-icons/ai';
import TextInput from '.';

describe('TextInput', () => {
  it('should call function at onChange event', () => {
    const mockSetState = jest.fn();

    render(
      <TextInput
        Icon={AiFillAliwangwang}
        value={''}
        set={mockSetState}
      />,
    );

    const testValue = 'T';

    const input = screen.getByTestId('input');

    userEvent.type(input, testValue);

    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenLastCalledWith(testValue);
  });

  it('should render value', () => {
    const testValue = 'Test';

    render(
      <TextInput
        Icon={AiFillAliwangwang}
        value={testValue}
        set={() => {}}
      />,
    );

    const input = screen.getByTestId('input');

    expect(input).toHaveValue(testValue);
  });

  it('should initially render gray lines and icon', () => {
    render(
      <TextInput
        Icon={AiFillAliwangwang}
        value={'test'}
        set={() => {}}
      />,
    );

    const icon = screen.getByTestId('input-icon');
    const line = screen.getByTestId('input-line');

    expect(icon).toHaveStyleRule('color', 'var(--lightGray)');
    expect(line).toHaveStyleRule('background', 'var(--lightGray)');
  });

  it('should render colored lines and icon when focused', () => {
    render(
      <TextInput
        Icon={AiFillAliwangwang}
        value={'test'}
        set={() => {}}
      />,
    );

    const icon = screen.getByTestId('input-icon');
    const line = screen.getByTestId('input-line');
    const input = screen.getByTestId('input');

    userEvent.click(input);

    expect(icon).toHaveStyleRule('color', 'var(--primary)');
    expect(line).toHaveStyleRule('background', 'var(--primary)');
  });

  it('should not render icon if not provided', () => {
    render(
      <TextInput
        value={'test'}
        set={() => {}}
      />,
    );

    const input = screen.queryByTestId('input-icon');

    expect(input).not.toBeInTheDocument();
  });

  it('should correctly render placeholder', () => {
    const testPlaceholder = 'TestPlaceholder';

    render(
      <TextInput
        value={'test'}
        set={() => {}}
        placeholder={testPlaceholder}
      />,
    );

    const input = screen.queryByPlaceholderText(testPlaceholder);

    expect(input).toBeInTheDocument();
  });
});
