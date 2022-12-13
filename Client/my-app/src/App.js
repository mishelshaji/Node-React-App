import './App.css';
import {Outlet, Link} from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <span>My React App</span>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
