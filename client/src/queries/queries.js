import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
  {
    authors{
      id
      name
      age
    }
  }
`;

const getBooksQuery = gql`
  {
    books{
      id
      name
      genre
    }
  }
`;

export { getAuthorsQuery, getBooksQuery };