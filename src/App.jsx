import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import TextForm from './components/Textform.jsx'
import About from './components/About.jsx'
import Alert from './components/Alert.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


function App() {
  const [Theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  const ToggleTheme = () => {
    if (Theme === 'dark') {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled!', 'success');
    } else {
      setTheme('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode enabled!', 'success');
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
  return (
    <>
      <Router>
        <Navbar Title="Caveman TextUtils" About="About" Theme={Theme} ToggleMode={ToggleTheme} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="Enter Text To Analyze" Rows="8" Theme={Theme} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App