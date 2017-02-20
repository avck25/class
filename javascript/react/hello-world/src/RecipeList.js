import React, { Component } from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router';

class RecipeList extends Component {
  render () {
    // const recipes = this.props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe} />);
    const recipes = this.props.recipes.map((recipe, i) =>
      <li key={i}><Link to={'/recipe/' + recipe.name} activeStyle={{ color: 'red' }}>{recipe.name}</Link></li>);
    return (
      <div>
        Im a recipe list. I have {this.props.recipes.length} recipes
          {recipes}
      </div>
    );
  }
}

export default RecipeList;
