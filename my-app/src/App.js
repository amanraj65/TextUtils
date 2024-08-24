import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import './App.css';

function App() {
  return (
    <>
    <Navbar title= "TextUtils"/>
    <div className="container">
    <TextForms input1= "phone no" btntext = "submit"/>
      
    </div>
    </>
  );
}

export default App;
