import { ComponentType, useState } from 'react';
import {
  Input, IconWrapper, Line, Container, FieldContainer,
} from './styles';

interface TextInputPs {
  placeholder?: string;
  Icon?: ComponentType;
  value: string | number;
  set: (v: string) => void;
  type?: 'text' | 'password' | 'email';
  dataTestId?: string;
  required?: boolean
}

const TextInput = ({
  placeholder, Icon, value, set, type, dataTestId = 'input', required,
}: TextInputPs) => {
  const [focused, setFocused] = useState(false);

  return (
    <Container data-testid={`${dataTestId}-countainer`}>
      <FieldContainer>
        {Icon
          ? <IconWrapper
            focused={focused}
            data-testid={`${dataTestId}-icon`}>
            <Icon />
          </IconWrapper>
          : null}
        <Input
          data-testid={dataTestId}
          value={value}
          onChange={(e) => set(e.target.value)}
          type={type ?? 'text'}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
        />
      </FieldContainer>
      <Line focused={focused} data-testid={`${dataTestId}-line`}/>
    </Container>
  );
};

export default TextInput;
