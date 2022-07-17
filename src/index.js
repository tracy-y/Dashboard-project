import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import APP from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider>
      <APP />
    </ContextProvider>,
     document.getElementById('root')
     );