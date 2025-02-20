import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5em;
  color: red;
`;

const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
        <p>Error: {message}</p>
    </ErrorContainer>
  )
}

export default ErrorMessage;