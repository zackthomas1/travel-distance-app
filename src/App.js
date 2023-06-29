import React, { useState } from 'react'

import LocationsForm from './components/LocationsForm';
import Results from './components/Results';
import LocationsProvider from './store/LocationsProvider';

function App() {
  const [results, setResults] = useState({
    closest: {
      id: 't000000',
      distance: 0,
    },
    furthest: {
      id: 't000000',
      distance: 0,
    },
  });
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  return (
    <React.Fragment>
      <div className='heading'>
        <h1>Travel Distance Calculator</h1>
      </div>

      <div className='body'>
      <LocationsProvider>
          <div className='form'>
              <LocationsForm 
                onSetResults={setResults} 
                onSetResultDisplay={setIsResultDisplayed}
              />
          </div>

          <div className='results'>
            <Results 
              results={results} 
              isDisplayed={isResultDisplayed}
            />
          </div>
      </LocationsProvider>
      </div>

    </React.Fragment>
  );
}

export default App;
