import './css/App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import {MovieProvider} from './contexts/MovieContext';
function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
