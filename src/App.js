import Header from './components/Header';
import './components/Header.css';
import './App.css';
import Nav from './components/Nav';
import './components/Nav.css'
import FormValidator from './components/FormValidator';
import './components/FormValidator.css';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Nav></Nav>
        <Header></Header>
        <FormValidator></FormValidator>
      </div>  
    </div>
  );
}

export default App;
