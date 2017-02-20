import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from './App';
import About from './About';
import Home from './Home';
import RecipeBook from './RecipeBook';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';

class Routes extends Component {
  render () {
      return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/recipeBook" component={RecipeBook} />
                    <Route path="/recipe/:recipe" component={Recipe} />
                    <Route path="/about" component={About} />
                    <Route path="/addRecipe" component={AddRecipe} />
                </Route>
            </Router>
        );
    }
}

export default Routes;
