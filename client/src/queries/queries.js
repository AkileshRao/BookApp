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


const addBookMutation = gql`
  mutation($name : String!, $genre : String!, $authorId : ID!){
    addBook(name : $name, genre : $genre , authorId :$authorId ){
      id
      name
      genre
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };