import logo from './logo.svg';
import './App.css';

import FilteringTable from './component/FilteringTable';
import FilteringTable1 from './component/FilteringTable1';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<FilteringTable />} />
        <Route path='filteringtable1' element={<FilteringTable1 />} />
      </Routes>

    </div>
  );
}

export default App;
