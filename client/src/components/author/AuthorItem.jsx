import React, { useState } from 'react';
import { DropDownArrow, Button, ButtonContainer, DeleteButton, EditForm  } from '../../styles/GlobalStyles';
import { ListItem, AuthorDetails, AuthorName, AuthorBirthDate } from '../../styles/author/AuthorItemStyles';
import BookList from '../book/BookList';
import { updateAuthor, deleteAuthor } from '../../api/api';

const AuthorItem = ({ author, fetchAuthors }) => {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [authorData, setAuthorData] = useState(author);

  const handleClick = () => {
    setShow(!show);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setAuthorData(author);
  };

  const handleDeleteClick = async () => {
    try {
      await deleteAuthor(author.id);
      fetchAuthors();
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor(author.id, authorData);
      setIsEditing(false);
      fetchAuthors();
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ListItem>
      <AuthorDetails onClick={handleClick}>
        {!isEditing ? (
          <>
            <AuthorName>
              <DropDownArrow isOpen={show}>
                <span>▸</span>
              </DropDownArrow>
              {authorData.name}
            </AuthorName>
            { authorData.birth_date && <AuthorBirthDate>
              Born: {authorData.birth_date}
            </AuthorBirthDate> }
          </>
        ) : (
          <EditForm onSubmit={handleUpdateSubmit}>
            <input
              type="text"
              name="name"
              value={authorData.name}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="birth_date"
              value={authorData.birth_date}
              onChange={handleInputChange}
            />
            <Button type="submit">Update</Button>
            <Button type="button" onClick={handleCancelClick}>Cancel</Button>
          </EditForm>
        )}
      </AuthorDetails>
      {show && !isEditing && (
        <>
          <BookList authorId={author.id} />
          <ButtonContainer>
            <Button onClick={handleEditClick}>Edit</Button>
            <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
          </ButtonContainer>
        </>
      )}
    </ListItem>
  );
};

export default AuthorItem;
