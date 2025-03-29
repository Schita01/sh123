import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Register from "./pages/Register";
import RegisterStepTwo from "./pages/RegisterStepTwo";
import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Saferty from "./pages/Saferty";
import PassengerSafety from "./pages/PassengerSafety";
import DriversSafety from "./pages/DriversSafety";
import UserContextProvider from "./context/userContext";
import usePersistUser from "./hooks/usePersistUser";

// Changed initial state to boolean

function App() {
  usePersistUser()
  
  
  return (
    <div className="wrapper">
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register">
            <Route index={true} element={<Register />} /> {/* Default route */}
            <Route path="RegisterStepTwo" element={<RegisterStepTwo />} />
          </Route>
          <Route path="saferty">
            <Route index={true} element={<Saferty />} />
            <Route path="passengersafety" element={<PassengerSafety />} />
            <Route path="drivesaferty" element={<DriversSafety />} />
          </Route>
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
