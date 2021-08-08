import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
width: 100%;

& > *:not(:last-child) {margin-bottom: 0.2em};
`;

export const FieldContainer = styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: center;

& > *:not(:last-child) {margin-right: 0.2em};
`;

export const Input = styled.input`
flex: 1;
padding: 0.4em;
border: none;
color: #222;
font-size: 0.9em;
outline: none;
background: none;

&:disabled{
background: #eee;
cursor: not-allowed;
}
`;

interface LinePs {
  focused: boolean;
}

export const Line = styled.div`
display: block;
width: 100%;
height: 1.5px;
background: ${(p: LinePs) => (p.focused ? 'var(--primary)' : 'var(--lightGray)')};
box-shadow: ${(p: LinePs) => (p.focused ? '1px 1px 2px rgba(0, 0, 0, 0.2)' : 'none')};
`;

interface IconWrapperPs {
  focused: boolean;
}

export const IconWrapper = styled.div`
color: ${(p: IconWrapperPs) => (p.focused ? 'var(--primary)' : 'var(--lightGray)')};
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
font-size: 1.15em;
`;
