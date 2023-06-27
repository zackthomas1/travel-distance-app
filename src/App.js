import React from 'react'

import LocationsForm from './components/LocationsForm';
import Results from './components/Results';
import LocationsProvider from './store/LocationsProvider';

function App() {
  return (
    <div>
      <h1>Travel Distance Calculator</h1>

      <div>
        <LocationsProvider>
          <LocationsForm/>
        </LocationsProvider>

      </div>

      <div>
        <h2>Results:</h2>
        <Results/>
      </div>
    </div>
  );
}

export default App;
