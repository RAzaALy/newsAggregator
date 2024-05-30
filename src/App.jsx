import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import PersonalizedFeed from "./pages/PersonalizedFeed";
import Notification from "./components/Notification";

const App = () => {
  return (
    <>
      <Notification />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<PersonalizedFeed />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
