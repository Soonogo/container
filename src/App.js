import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import { Home } from './Home.tsx';
import { About } from './About.tsx';
import { ReactMicroApp } from './ReactMicroApp';
import { ReactMicroApp2 } from './ReactMicroApp2';
import { ReactMicroApp3 } from './ReactMicroApp3';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header >
          <Link to="/">基座 Home</Link> | <br/>
          <Link to="/about">基座 About</Link> | <br/>
          <Link to="/react-app">React 子应用</Link> | <br/>
          <Link to="/flow-app">flow 子应用</Link>
          <Link to="/flow2-app">flow 子应用</Link>
        </header>
      <hr/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/react-app' element={<ReactMicroApp/>}/>
          <Route path='/flow-app' element={<ReactMicroApp2/>}/>
          <Route path='/flow2-app' element={<ReactMicroApp3/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
