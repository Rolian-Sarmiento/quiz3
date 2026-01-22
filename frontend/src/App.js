import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import Services from "./screens/Service";
import ContentScreen from "./screens/ContentScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/service" element={<Services />} />
            <Route path="/content/:id" element={<ContentScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
