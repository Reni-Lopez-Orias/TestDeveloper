import './app.css';

import { BrowserRouter } from 'react-router-dom';

//components
import { Router } from './routes/router';

//context
import { DataProvider } from './context/contextData';


function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
