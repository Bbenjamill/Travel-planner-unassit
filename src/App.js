import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Planner from './components/Planner';
import Footer from './components/Footer';
import { useState } from 'react';



function App() {
  const [planner, setPlanner ] = useState([])

  return (
    <div className="app">
      <Header/>
      <Input planner = {planner} setPlanner = {setPlanner}  />
      <Planner planner = {planner} setPlanner = {setPlanner}/>
      <Footer planner = {planner}/>

    </div>
  );
}

export default App;
