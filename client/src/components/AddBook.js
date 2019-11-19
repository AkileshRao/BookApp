import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';


function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading: authorsLoading, error: authorsError, data } = useQuery(getAuthorsQuery);
  const [addBook, { loading: bookMutationLoading, error: bookMutationError }] = useMutation(addBookMutation);

  if (bookMutationError) {
    console.log(bookMutationError);
  }
  let displayAuthors = () => {
    if (authorsLoading) return <option>Loading authors...</option>;
    if (authorsError) return <option>Could not load authors</option>;
    return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
  }

  let submitForm = (e) => {
    e.preventDefault();
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  return (
    <form id='add_book' onSubmit={submitForm}>
      <div className='field'>
        <label>Book Name :</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>

      <div className='field'>
        <label>Genre :</label>
        <input type='text' onChange={(e) => setGenre(e.target.value)} />
      </div>

      <div className='field'>
        <label>Author :</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author : </option>
          {displayAuthors()}
        </select>
      </div>

      <button type='submit'>+</button>
    </form>
  )
}

export default AddBook;
