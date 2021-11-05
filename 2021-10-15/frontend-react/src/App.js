import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Route path="/" component={Navbar}/>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/posts" component={Posts} />
          </Switch>
        </Content>
        <Footer>
          Harli Kodasma
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
