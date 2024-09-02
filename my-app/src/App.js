import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import './App.css';

function App() {
  return (
    <>
    <Navbar title= "TextUtils"/>
    <div className="container">
    <TextForms heading= "Enter text to analyse" buttonname = "Convert to uppercase"/>
    </div>
    </>
  );
}

export default App;
