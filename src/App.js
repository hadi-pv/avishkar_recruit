import './App.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import Login from './Login';
import Content from './Content';
import img from './images/image2.png';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Row className="topbar">
          <center>
            <h4><b>AVISHKAR</b></h4>
          </center>
        </Row>
        <Row>
          <Col className="left d-none d-lg-block">
            <center>
              <img alt="rocket" src={img} className="image img-fluid"/>
            </center>
          </Col>
          <Col className="right">
          <Switch>
          <Route exact path='/' component={()=><Login/>}/>
          <Route exact path='/content' component={()=><Content/>}/>
          <Redirect to='/'/>
        </Switch>
          </Col>
        </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
