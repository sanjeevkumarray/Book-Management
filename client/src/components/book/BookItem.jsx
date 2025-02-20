import React, { useState } from 'react';
import { ButtonContainer, Button, DeleteButton, EditForm } from '../../styles/GlobalStyles';
import { BookItemContainer, BookTitle } from '../../styles/book/BookItemStyles';
import { deleteBook, updateBook } from '../../api/api';

const BookItem = ({ book, fetchBooks }) => {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [bookTitle, setBookTitle] = useState(book.title);
  const [error, setError] = useState(null);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setIsEditing(false);
    setBookTitle(book.title);
  };

  const handleDeleteClick = async () => {
    try {
      await deleteBook(book.id);
      fetchBooks();
    } catch (err) {
      setError('Failed to delete book');
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const bookData = { title: bookTitle, author: book.author };

    try {
      console.log('Updating book with data:', bookData);
      const result = await updateBook(book.id, bookData);
      console.log('Update result:', result);
      if (result.error) {
        throw new Error(result.error);
      }
      fetchBooks();
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update book:', err);
      setError('Failed to update book');
    }
  };

  const handleInputChange = (e) => {
    setBookTitle(e.target.value);
  };

  return (
    <BookItemContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isEditing ? (
        <>
          <BookTitle>
            {bookTitle}
          </BookTitle>
          {show && !isEditing && (
            <ButtonContainer>
              <Button onClick={handleEditClick}>Edit</Button>
              <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
            </ButtonContainer>
          )}
        </>
      ) : (
        <EditForm onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            name="title"
            value={bookTitle}
            onChange={handleInputChange}
          />
          <Button type="submit">Update</Button>
          <Button type="button" onClick={handleCancelClick}>Cancel</Button>
        </EditForm>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </BookItemContainer>
  );
};

export default BookItem;
