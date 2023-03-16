import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='portfolio-react' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
