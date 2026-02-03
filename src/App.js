import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Login
        </p>
        <form>
        <label>Username : <input className='sub' name='name' type='text' required></input> </label><br/>
        <label>Password : <input className='sub' name='pass' type='password' required></input>  </label> <br/><br/>
        
        <button className='sub' type='submit'>LOGIN</button>
        </form>
      </header>
    </div>
  );
}

export default App;
