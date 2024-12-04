import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppPage } from './components/AppPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppPage />
  </BrowserRouter>
);
