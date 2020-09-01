import React from 'react';
import { BmSection, BmContainer, BmButton } from '@bulmil/react';

// Global css
import '@bulmil/core/dist/css/bulmil.css';

function App() {
  return (
    <BmSection>
      <BmContainer>
        <BmButton color='is-primary'>Button</BmButton>
      </BmContainer>
    </BmSection>
  );
}

export default App;
