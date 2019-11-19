import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';


//components
import BookDetails from './BookDetails';

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selectedBook, setSelectedBook] = useState(null);

  const displayBookDetails = () => {
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error : (</p>;

    return data.books.map((book, index) => {
      return (
        <li key={book.id} onClick={e => { setSelectedBook(book.id) }}>
          {book.name} : {book.genre}
        </li>
      )
    });
  };

  return (
    <div>
      {(displayBookDetails())}
      {
        selectedBook !== null ? <BookDetails id={selectedBook} /> : <div>No book selected.</div>
      }
    </div>
  )

}

export default BookList;
