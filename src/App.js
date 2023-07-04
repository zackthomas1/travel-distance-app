import React, { useState } from 'react'
import LocationsForm from './components/LocationsForm';
import Results from './components/Results';
import LocationsProvider from './store/LocationsProvider';
import Header from './components/Header';

function App() {
  const [results, setResults] = useState([]);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  return (
    <React.Fragment>
      <Header/>

      <div className='body'>
        <LocationsProvider>
            <LocationsForm 
              onSetResults={setResults} 
              onSetResultDisplay={setIsResultDisplayed}
            />

            <Results 
              results={results} 
              isDisplayed={isResultDisplayed}
            />
        </LocationsProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
