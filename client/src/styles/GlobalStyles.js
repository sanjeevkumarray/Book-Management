import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const DropDownArrow = styled.span`
  font-size: 1.2em;
  margin-right: 20px;
  transition: transform 0.3s;
  
  ${({ isOpen }) => isOpen && `
    transform: rotate(90deg);
  `}
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;
  
  &:hover {
    background-color: #c82333;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
  ${DeleteButton} {
    margin-left: auto; 
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  input {
    margin: 5px 0;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto; 
`;

export const FilterInput = styled.input`
  padding: 0.5em;
  margin: 1em 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;


export const StyledApp = styled.div`
    margin: 0;
    font-family: Arial, sans-serif;
`;