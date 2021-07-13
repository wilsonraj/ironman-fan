import React from 'react';
import './App.css';
import { Container,Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
     
    <Container fluid  >
      
  <Row className="pagecontainer">
        <Col xs="2" sm="2"md="2" lg="2">
          <Sidebar /></Col>
        <Col className="profile" xs="8" sm="8"md="8" lg=""><Router>
          <Switch><Profile /></Switch>
          </Router></Col>
        <Col xs="3"sm="3"md="3" lg="3"></Col>
      </Row>
      </Container>
      </div>
  );
}
export default App;