import { BrowserRouter, Link } from 'react-router-dom';

import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter>
      <header
        style={{
          width: '100%',
          backgroundColor: 'lightblue',
          color: 'white',
          padding: '10px',
        }}
      >
        <nav
          style={{
            width: '100%',
            gap: '30px',
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Router />
    </BrowserRouter>
  );
}
