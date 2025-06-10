import './style/App.css';


import Header from './components/Header/Header.jsx';
import { DashboardOverview } from './components/Dashboard/DashboardOverview.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Statistics } from './components/Statistics/Statistics.jsx';
import { HomePage } from './components/HomePage/HomePage.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { FieldAnalytics } from './components/Fields/FieldAnalytics.jsx';
import {TaskManager} from './components/TaskManager/TaskManager.jsx';
import { Login } from './components/Form/Login.jsx';
import { PrivateRoute } from './components/Form/PrivateRoute.jsx';
import { AuthProvider } from './components/Context/AuthContext.jsx';
import WeatherBoard from './components/Dashboard/Weather/WeatherBoard.jsx';
import EquipmentList from './components/Dashboard/EquipmentStatus/EquipmentList/EquipmentList.jsx';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <div className="App">
      <div className="wrapper">
        <main>
          <div className="container">
            <Header/>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
                }/>
              <Route path="/statistics" element={
                <PrivateRoute>
                  <Statistics/>
                </PrivateRoute>
                }/>
              {/* <Route path="/dashboard" element={<DashboardOverview />}/> */}
              <Route path="/fields" element={
                <PrivateRoute>
                  <FieldAnalytics/>
                </PrivateRoute>
                }/>
              <Route path='/tasks' element={
                <PrivateRoute>
                  <TaskManager/>
                </PrivateRoute>
                } />
                <Route path='/7dayWeather' element={<WeatherBoard/>}></Route>
                <Route path='/equipment-list' element={<EquipmentList/>}></Route>
            </Routes>
          </div>
        </main>
      <Footer/>
      </div>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
