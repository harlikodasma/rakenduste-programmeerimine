import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import Lesson from "./components/Lesson";
import BotCheck from "./components/BotCheck";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
//import { DatePicker } from 'antd';

ReactDOM.render(<DatePicker />, mountNode);

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>
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
          <br/><br/><br/>
          <h2>Kodune töö</h2>
          <Lesson which="1" lesson="Chemistry"/>
          <Lesson which="2" lesson="Physics"/>
          <BotCheck correct="Eepiliselt tore"/>
          <BotCheck correct="Suurepäraselt koomiline"/>
          <br/><br/><br/>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ShowMagic} />
              <Route exact path="/posts" component={Posts} />
            </Switch>
          </BrowserRouter>
        </div>
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default App;
