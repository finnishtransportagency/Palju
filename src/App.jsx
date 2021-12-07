import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import GridContainer from './components/GridContainer';
import './App.scss';

// apiUrl needs to end with forward-dash
export const config = {
  basePath: '', // this has been /palju at some point, left here just in case
  defaultFolder: 'palju',
  apiUrl:
    process.env.REACT_APP_API_URL ||
    'https://devpalju.testivaylapilvi.fi/hakemisto/', // dev-mock
  paginationPageSize: 50
};

const App = () => {
  // const onLogout = () => {
  //   TODO: currently single-logout is not yet supported
  //   from applications, direct user to Extranet?
  // };

  return (
    <Router>
      <Route path={`${config.basePath}/:folder*/`}>
        <GridContainer />
      </Route>
      <Footer />
    </Router>
  );
};

export default App;
