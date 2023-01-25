import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { store } from './redux/store';

import { GlobalStyle } from './styles/globalStyle';
import { theme } from './styles/theme';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
);
