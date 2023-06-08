import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './home_page/HomePage';
import { FaGripLines, FaList, FaMicrophone, FaPlay, FaSearch } from "react-icons/fa";
import Routing from './routing_component/Routing';
import { useState } from 'react';
import Search_form from './search_form/Search_form';

function App() {
  const [wwwGoogleApis, setWwwGoogleApis] = useState([]);
  return (
    <div className="App container-fluid">
      <header>
        <FaList />
        <strong><FaPlay />YouTube</strong>
        <Search_form setWwwGoogleApis={setWwwGoogleApis} />
        <FaMicrophone />
      </header>
      <Router>
        <Routing wwwGoogleApis={wwwGoogleApis}/>
      </Router>
    </div>
  );
}

export default App;
