import React, { useState } from 'react';
import { createBook } from '../../api/api';
import ErrorMessage from '../notifications/ErrorMessage';
import { DropDownArrow } from '../../styles/GlobalStyles';
import { FormContainer, FormHeading, FormGroup, FormInput, FormButton, FormTitle } from '../../styles/FormStyles';

export const BookForm = ({ authorId, onSubmit}) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title) {
      setError('Title is required');
      return <ErrorMessage message={error} />;
    }

    try {
      const bookData = { title, author: authorId };
      await createBook(bookData);
      setTitle('');
      setError('');

      onSubmit();
    } catch (err) {
      setError(`Failed to add book: ${err.message}`);
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <FormContainer>
      <FormHeading onClick={handleClick}>
        <FormTitle>
          <DropDownArrow isOpen={show}>
            <span>▸</span>
          </DropDownArrow>
          Add New Book
        </FormTitle>
      </FormHeading>
      {show && (
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              placeholder="Book Title"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>
          <FormButton type="submit">Add Book</FormButton>
        </form>
      )}
      {error && <ErrorMessage message={error} />}
    </FormContainer>
  );
};
