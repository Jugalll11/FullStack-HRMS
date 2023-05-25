import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import JobCard from './Components/JobCard/JobCardComponent';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <JobCard/>
      </div>
    </div>
  );
}

export default App;
