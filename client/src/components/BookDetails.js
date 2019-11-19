import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

export default function BookDetails(props) {
  const { loading: loadBookDetails, error: errorBookDetails, data } = useQuery(getBookQuery, {
    variables: { id: props.id }
  });

  const displayBookDetails = () => {
    if (loadBookDetails) return <h2>Loading book details</h2>;
    if (errorBookDetails) return <h2>Oops, an error occured while loading book details!</h2>
    return (
      <div className='book_details'>
        <h1>{data.book.name}</h1>
        <p>{data.book.genre} / {data.book.author.name}</p>
        <div>All books by the author :
          <ul>
            {data.book.author.books.map(book => {
              return <li key={book.id}>{book.name}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }

  return <div>
    {displayBookDetails()}
  </div>
}
