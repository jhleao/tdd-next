import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
min-height: 100vh;
background: url(bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

export const Card = styled.div`
background: var(--foreground);
border-radius: 10px;
box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.5);
width: 30rem;
padding: 3rem 5rem;
position: relative;
overflow: hidden;

display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

& > *:not(:last-child) {margin-bottom: 1.2rem}
`;

export const Form = styled.form`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
& > *:not(:last-child) {margin-bottom: 1.2rem}
`;

const loadAnim = keyframes`
0% {left: 0; right: auto; width: 0;}
50% {left: 0; right: auto; width: 100%;}
51% {left: auto; right: 0; width: 100%;}
100% {left: auto; right: 0; width: 0;}
`;

export const LoadingBar = styled.div`
position: absolute;
z-index: 999;
top: 0;
min-height: 0.3rem;
background: var(--primary);
animation: ${loadAnim} 2s ease-out 0.1s infinite forwards running;
`;

export const ErrorBox = styled.div`
border: solid 1px red;
border-radius: 5px;
background: rgba(255, 0, 0, 0.3);
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
padding: 1rem;
color: #020202;
width: 100%;

display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
`;
