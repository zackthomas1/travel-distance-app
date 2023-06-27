import React from 'react'

import LocationsForm from './components/LocationsForm';
import Results from './components/Results';

function App() {
  return (
    <div>
      <h1>Travel Distance Calculator</h1>

      <div>
        <LocationsForm/>
      </div>

      <div>
        <h2>Results:</h2>
        <Results/>
      </div>
    </div>
  );
}

export default App;
