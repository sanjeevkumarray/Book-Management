import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Utility function to handle API errors
const handleApiError = (error) => {
  if (error.response) {
    console.error('Response error:', error.response.data);
    return { error: error.response.data };
  } else if (error.request) {
    console.error('No response received:', error.request);
    return { error: 'No response received from the server.' };
  } else {
    console.error('Error setting up request:', error.message);
    return { error: error.message };
  }
};

// Authors requests
export const getAuthors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/authors/`);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getAuthorById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/authors/${id}/`);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const createAuthor = async (authorData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/authors/`, authorData);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateAuthor = async (id, authorData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/authors/${id}/`, authorData);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteAuthor = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/authors/${id}/`);
    return { data: 'Author deleted successfully' };
  } catch (error) {
    return handleApiError(error);
  }
};

// Books requests
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/`);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${id}/`);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const createBook = async (bookData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/books/`, bookData);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateBook = async (id, bookData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/books/${id}/`, bookData);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/books/${id}/`);
    return { data: 'Book deleted successfully' };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getBooksByAuthorId = async (authorId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/authors/${authorId}/books/`);
    return { data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
};