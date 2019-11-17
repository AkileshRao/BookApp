import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getBooksQuery = gql`
  {
    books{
      id
      name
      genre
    }
  }
`
function BookList() {
  const { loading, error, data} = useQuery(getBooksQuery);
  if(loading) return <p>Loading ...</p>;
  if(error) return <p>Error : (</p>;
  console.log(data);
  return (
    <div className="BookList">
      <ul id='book_list'>
        <li>Book A</li>
      </ul>
    </div>
  );
}

export default BookList;
