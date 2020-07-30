import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './containers/Categories'
import Ingredients from './containers/Ingredients'
import IngredientMeals from './containers/IngredientMeals'
import CategoryMeals from './containers/CategoryMeals'
import Home from './components/Home'
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/ingredients' component={Ingredients} />
          <Route  path='/ingredients/:id' component={IngredientMeals} />
          <Route  path='/categories/:id' component={CategoryMeals} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
