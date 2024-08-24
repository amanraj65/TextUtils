import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import './App.css';

function App() {
  return (
    <>
    <Navbar title= "TextUtils"/>
    <div className="container">
    <TextForms input1= "Enter text" btntext = "Convert to uppercase"/>
      
    </div>
    </>
  );
}

export default App;
