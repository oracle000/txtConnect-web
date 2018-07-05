import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// react-router
import { BrowserRouter } from 'react-router-dom'

// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from './Utilities/styles/light-base-theme';

// apollo client
import { ApolloProvider, Query   } from "react-apollo";
import { ApolloClient } from 'apollo-client';
// import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

// apollo to rest client
// import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';


const restLink = new RestLink({ uri: 'https://swapi.co/api/' });


const restClient = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const query = gql`
query luke {
  person @rest(type: "Person", path: "people/1/") {
    name
  }
}
`;

// Invoke the query and log the person's name
restClient.query({ query }).then(response => {
  console.log(response, 'dddd');
  console.log(response.data.name);
});

// client.query ({
//   query: gql
//     `{
//       rates(currency: "USD") { currency }
//     }`
// })
// .then(result => console.log(result));

// const ExchangeRates = () => (
//     <Query
//       query={gql`
//         {
//           rates(currency: "USD") {
//             currency
//             rate
//           }
//         }
//       `}
//     >
//       {({ loading, error, data }) => {
//         if (loading) return <p>Loading...</p>;
//         if (error) return <p>Error :(</p>;
        
//         console.log(data);
//         return data.rates.map(({ currency, rate }) => (
//           <div key={currency}>
//             <p>{`${currency}: ${rate}`}</p>
//           </div>
//         ));
//       }}
//     </Query>
//   );


injectTapEventPlugin();

ReactDOM.render(
    <ApolloProvider client={client}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
