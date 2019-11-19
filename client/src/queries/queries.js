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

const getBookQuery = gql`
  query($id : ID){
    book(id : $id){
      name
      genre
      author{
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`

const addBookMutation = gql`
  mutation($name : String!, $genre : String!, $authorId : ID!){
    addBook(name : $name, genre : $genre , authorId :$authorId ){
      id
      name
      genre
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, getBookQuery, addBookMutation };