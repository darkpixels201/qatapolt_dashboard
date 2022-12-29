
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound';
import DashboardRoutes from './Routes/DashboardRoutes';
import HomeRoutes from './Routes/HomeRoutes';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/*" element={<HomeRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
