import styled from 'styled-components'

export const BookItemContainer = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  list-style-type: none;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BookTitle = styled.h4`
  font-size: 0.95em;
  margin: 0;
  color: #333;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* Adjust gap between buttons as needed */
  margin-top: 5px; /* Adjust top margin as needed */
`;