import React from 'react';
import{Switch ,Redirect,Route,BrowserRouter} from "react-router-dom"
import Main from './Main/Main';
import Login from './Login/Login';
import Article from './Main/Article';
import Written from './Main/WrittenArticles';

export const aa = () =>{
  return(
    <div>Hello world</div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/my_articles'>
        <Written />
      </Route>
      
      <Route path='/write_article'>
        <Article />
      </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
