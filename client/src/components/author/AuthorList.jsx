import React, { useEffect, useState } from 'react'
import { FilterContainer } from '../../styles/GlobalStyles';
import { ListContainer } from '../../styles/author/AuthorListStyles';
import { Heading } from '../../styles/GlobalStyles';
import AuthorItem from './AuthorItem';
import ErrorMessage from '../notifications/ErrorMessage';
import LoadingMessage from '../notifications/LoadingMessage';
import { getAuthors } from '../../api/api'
import { AuthorForm } from './AuthorForm';
import { FilterInput } from '../../styles/GlobalStyles';

export const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState('');

  const fetchAuthors = async () => {
    const result = await getAuthors();
    if (result.error) {
      setError(result.error);
    } else {
      setAuthors(result.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAuthors();
  }, []);

  const filteredAuthors = authors.filter(author => 
    author.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  }

  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <ListContainer>
      <Heading>Authors</Heading>
      <FilterContainer>
        <FilterInput 
          type="text" 
          placeholder="Filter by name" 
          value={filterText} 
          onChange={handleFilterChange} 
        />
      </FilterContainer>
      <ul>
        <AuthorForm fetchAuthors={fetchAuthors}/>
        {filteredAuthors.length > 0 ? filteredAuthors.map(author => (
          <AuthorItem key={author.id} author={author} fetchAuthors={fetchAuthors}/>
        )) : <p>No author match your filter.</p>}
      </ul>
    </ListContainer>
  )
}
