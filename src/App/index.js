import React from 'react';

import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {

  // =========== return =========== //
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
