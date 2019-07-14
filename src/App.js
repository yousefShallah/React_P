import React from 'react';
import NavBar from './Components/NavBar/index'
import Connect from './Components/Connect/index'
import Index from './Components/Index/index'
import {BrowserRouter, Route} from 'react-router-dom';
class App extends React.Component {
  render(){
    
  return (
    <div className="App">
      <BrowserRouter> 
      <NavBar />
      <Route exact path='/' component={Index} />
      <Route path='/contact' component={Connect} />
      </BrowserRouter>
    </div>
  );
}
}

export default App;
