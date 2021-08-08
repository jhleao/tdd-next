import styled from 'styled-components';

export const Container = styled.div`
min-height: 100vh;
max-width: 20rem;
margin: 0 auto;

display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

& > *:not(:last-child) {margin-bottom: 0.5rem;};
`;
