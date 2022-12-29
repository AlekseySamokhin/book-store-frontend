import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';
import App from './App';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Router>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </Router>,
);
