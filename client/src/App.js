import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//components
import BookList from './components/BookList';

//apollo config
let client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>
          My list of books
        </h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
