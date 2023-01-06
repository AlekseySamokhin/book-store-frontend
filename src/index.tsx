import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './redux/store';

import GlobalStyles from './globalStyles';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </Router>
  </StrictMode>,
);
