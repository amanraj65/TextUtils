import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import './App.css';

function App() {
  return (
    <>
    <Navbar title= "TextUtils"/>
    <div className="container">
    <TextForms heading= "Enter text to analyse" button1 = "Convert to uppercase" button2 = "Convert to lowercase" button3 = "Clear"/>
    </div>
    </>
  );
}

export default App;
