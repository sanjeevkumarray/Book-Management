import React, { useState, useEffect, useCallback } from 'react';
import BookItem from './BookItem';
import LoadingMessage from '../notifications/LoadingMessage';
import ErrorMessage from '../notifications/ErrorMessage';
import { getBooksByAuthorId } from '../../api/api';
import { BookListContainer } from '../../styles/book/BookListStyles';
import { BookForm } from './BookForm';
import { FilterContainer, FilterInput } from '../../styles/GlobalStyles';

const BookList = ({ authorId }) => {
  const [books, setBooks] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    const result = await getBooksByAuthorId(authorId);
    if (result.error) {
      setError(result.error);
    } else {
      setBooks(result.data);
    }
    setLoading(false);
  }, [authorId]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <BookListContainer>
      <BookForm authorId={authorId} onSubmit={fetchBooks} />
      <FilterContainer>
        <FilterInput 
          type="text" 
          placeholder="Filter by title"
          value={filterText} 
          onChange={handleFilterChange} 
        />
      </FilterContainer>
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookItem key={book.id} book={book} fetchBooks={fetchBooks}/>
          ))
        ) : (
          <p>No books match your filter.</p>
        )}
      </ul>
    </BookListContainer>
  );
};

export default BookList;
