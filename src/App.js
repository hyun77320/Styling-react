import React from 'react';
import styled, {css} from 'styled-component';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

function App(props) {
  return (
    <Circle />
  );
}

export default App;