import React from 'react'
import { Heading } from '../styles/GlobalStyles';
import { AuthorList } from '../components/author/AuthorList'

export const ManageBooks = () => {
  return (
    <>
      <Heading>Manage Books</Heading>
      <AuthorList/>
    </>
  )
}
