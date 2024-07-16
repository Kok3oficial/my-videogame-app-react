import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
    return (
        <Router>
            <Navbar />
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game/:id" element={<GameDetails />} />
                </Routes>
            </ErrorBoundary>
        </Router>
    );
};

export default App;
