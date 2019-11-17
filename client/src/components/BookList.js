import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error : (</p>;
  return data.books.map((book, index) => {
    return (<li key={index}>
      {book.name} : {book.genre}
    </li>)
  });
}

export default BookList;
