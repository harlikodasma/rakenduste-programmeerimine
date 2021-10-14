import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import Lesson from "./components/Lesson";
import BotCheck from "./components/BotCheck";

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Harli" age="21"/>
      <Lesson which="1" lesson="Chemistry"/>
      <Lesson which="2" lesson="Physics"/>
      <BotCheck correct="Eepiliselt tore"/>
      <BotCheck correct="Suurepäraselt koomiline"/>
    </div>
  );
}

export default App;
