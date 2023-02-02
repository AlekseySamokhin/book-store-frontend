import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { store } from './redux/store';

import { GlobalStyles, theme } from './components/styles';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
);
