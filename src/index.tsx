import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { store } from './redux/store';

import { GlobalStyles } from './components/styles';
import { theme } from './components/styles/theme';

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
