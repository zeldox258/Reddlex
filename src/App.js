import HomePage from './Pages/HomePage';
import Tracker from './Pages/Tracker';
import ReddlexAi from './Pages/ReddlexAi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracker-wallet" element={<Tracker />} />
          <Route path="/reddlexai" element={<ReddlexAi />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
