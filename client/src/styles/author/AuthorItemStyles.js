import styled from "styled-components";
import { Button } from "../GlobalStyles";

export const ListItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  list-style-type: none;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const AuthorName = styled.h3`
  font-size: 1.2em;
  margin: 0;
  color: #333;
  display: flex;
  align-items: center;
`;

export const AuthorBirthDate = styled.p`
  font-size: 1em;
  margin: 5px 0 0;
  color: #666;
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
