import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/LoginComponent";
import Register from "./components/RegisterComponent";
import Home from "./components/HomeComponent";
import Blog from "./components/BlogComponent";
import Opportunities from "./components/OpportunitiesComponent";
import QuestionBank from "./components/QuestionBankComponent";
import CurrentAffairsGK from "./components/CurrentAffairsGKComponent";
import BlogDetail from "./components/BlogDetailComponent";
import NotFound from "./components/NotFoundComponent";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Switch>
            {/* <Route path="/home1" render={(props) => <Home sortBy="newst" {...props} />}></Route> */}
            <Route path="/home" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/currentaffairs" component={CurrentAffairsGK}></Route>
            <Route path="/opportunities" component={Opportunities}></Route>
            <Route path="/questionbank" component={QuestionBank}></Route>
            <Route path="/post/:id" component={BlogDetail}></Route>
            <Redirect from="/xxx" to="/home" />
            <Route path="/notfound" component={NotFound}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/notfound" />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
