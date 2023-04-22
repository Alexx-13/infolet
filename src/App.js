import { Route, Routes } from 'react-router';
import { urls } from './constants';
import Home from './pages/home'

const App = () => {
  const { home } = urls;
  return (
    <div className="App">
      <Routes>
        <Route path={home} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
