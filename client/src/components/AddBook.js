import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../queries/queries';


function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  let displayAuthors = () => {
    if (loading) return <option>Loading authors...</option>;
    if (error) return <option>Could not load authors</option>;
    return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
  }

  return (
    <form id='add_book'>
      <div className='field'>
        <label>Book Name :</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Genre :</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Author :</label>
        <select>
          <option>Select Author : </option>
          {displayAuthors()}
        </select>
      </div>

      <button type='submit'>+</button>
    </form>
  )
}

export default AddBook;
