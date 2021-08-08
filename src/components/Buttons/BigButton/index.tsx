import { ReactNode } from 'react';
import { Button } from './styles';

interface BigButtonPs {
  onClick?: () => any,
  children?: ReactNode,
  dataTestId?: string,
  type?: 'submit' | 'button',
  disabled?: boolean
}

const BigButton = ({
  onClick, children, dataTestId, type, disabled,
}: BigButtonPs) => (
  <Button
    onClick={onClick || (() => {})}
    data-testid={dataTestId ?? 'button'}
    type={type || 'button'}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default BigButton;
