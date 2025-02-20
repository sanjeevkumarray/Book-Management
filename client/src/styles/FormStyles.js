import styled from 'styled-components';
import { Button } from './GlobalStyles'; 

export const FormContainer = styled.div`
  border-bottom: 1px solid #ddd;
  list-style-type: none;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const FormHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.2em;
  margin: 0;
  color: #333;
  display: flex;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;

  ::placeholder {
    color: #888; // Style for the hint text
  }
`;

export const FormButton = styled(Button)`
  width: 100%;
  padding: 8px;
`;
