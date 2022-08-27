import snorlax from './images/snorlax.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <h1 className='main-text'>
          Hello, i'm working on redesigning this...once I find the energy to do so...
        </h1>
        <img src={snorlax} alt="Sleeping Snorlax" className='main-img'/>
        <div className='main-footer'>
          <p>For the meantime you can follow me on</p>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/nihaprezz">twitter</a>
        </div>
      </div>
    </div>
  );
}

export default App;
