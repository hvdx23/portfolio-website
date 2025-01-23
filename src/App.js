import logo from './logo.svg';
import './App.css';
import photo from '../src/components/assets/images/hari.jpeg';


function App() {
  function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="profile-photo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButton />
          

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
