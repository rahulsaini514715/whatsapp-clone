
import './App.css';
import Chat from './Chat';
import Sidebar from './sidebar';
function App() {
  return (
    <div className="App">
       <div className='app_body'>
        <Sidebar/>
        <Chat/>
       </div>
    </div>
  );
}

export default App;
