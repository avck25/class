import React, { Component } from 'react';
import RecipeList from './RecipeList';
// import AddRecipe from './AddRecipe';

class RecipeBook extends Component {
  /* componentWillMount () {
    // pretend got this from ajax
    this.setState({
      recipes: [
        { name: 'eggs', instructions: 'Crack eggs. Fry them' },
        { name: 'pasta', instructions: 'Boil water. Add pasta' },
        { name: 'spaghetti', instructions: 'Boil water. Add spaghetti' }
      ]
    });
  } */
  render () {
    return (
      <div>
        Im a recipe book. I have {this.props.recipes.length} recipes
          <RecipeList recipes={this.props.recipes} />
        { /*<AddRecipe /> */}
      </div>
    );
  }
}

export default RecipeBook;
