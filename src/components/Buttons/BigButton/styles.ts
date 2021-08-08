import styled from 'styled-components';

export const Button = styled.button`
border-radius: 10rem;
background: var(--primary);
border: none;
width: 100%;
color: var(--overPrimary);
font-weight: 600;
font-size: 1em;
padding: 0.8em;
cursor: pointer;
transition: 0.1s all ease-out;

display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

&:disabled{
  background: var(--lightGray);
  color: #0f0f0f;
}

&:hover {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

& > * {margin-left: 0.5rem;};
`;
