import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5em;
  color: blue;
`;

const LoadingMessage = () => {
  return (
    <LoadingContainer>
      <p>Loading...</p>
    </LoadingContainer>
  );
};

export default LoadingMessage;
