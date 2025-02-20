import React, { useState } from 'react';
import { DropDownArrow } from '../../styles/GlobalStyles';
import { FormContainer, FormHeading, FormGroup, FormInput, FormTitle, FormButton } from '../../styles/FormStyles';
import { createAuthor } from '../../api/api';
import ErrorMessage from '../notifications/ErrorMessage';

export const AuthorForm = ({ fetchAuthors }) => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name) {
      setError('Name is required');
      return <ErrorMessage message={error} />;
    }

    try {
      const authorData = { name };

      if (birthDate) {
        authorData.birth_date = birthDate;
      }
      
      await createAuthor(authorData);
      setName('');
      setBirthDate('');
      setError('');

      fetchAuthors();
    } catch (err) {
      setError(`Failed to add author ${error}`);
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
          Add New Author
        </FormTitle>
      </FormHeading>
      {show && (
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              placeholder="Name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormInput
              placeholder="Date of birth"
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </FormGroup>
          <FormButton type="submit">Add Author</FormButton>
        </form>
      )}
    </FormContainer>
  );
};
