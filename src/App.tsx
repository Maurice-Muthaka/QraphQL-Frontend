import { ThemeProvider } from './contexts/themeContext';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import './styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './Main';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path } : any) => {
      alert(`Graphql error ${message}`)
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://ql-api.herokuapp.com/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
