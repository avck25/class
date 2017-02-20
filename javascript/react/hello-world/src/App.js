import React, { Component } from 'react';
import RecipeBook from './RecipeBook';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: [
        { name: 'eggs', instructions: 'Crack eggs. Fry them', details: 'Egg details go here' },
        { name: 'pasta', instructions: 'Boil water. Add pasta', details: 'Pasta details go here' },
        { name: 'spaghetti', instructions: 'Boil water. Add spaghetti', details: 'Spaghetti details go here' }
      ]
    };

    /* setTimeout(() => this.setState({
      recipes: [
        { name: 'scrambled eggs', instructions: 'Crack eggs. Fry them' },
        { name: 'El Dante pasta', instructions: 'Boil water. Add pasta' },
        { name: 'El Dante spaghetti', instructions: 'Boil water. Add spaghetti' }
      ]
    }), 5000); */
  }

  render () {
    return (
      <div>
        <h1>The App</h1>
        <ul>
          <li><IndexLink to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
          <li><Link to="/recipeBook" activeStyle={{ color: 'red' }}>Recipe Book</Link></li>
          <li><Link to="/addRecipe" activeStyle={{ color: 'red' }}>Add Recipe</Link></li>
          <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
        </ul>
        {React.cloneElement(this.props.children, { recipes: this.state.recipes })};
      </div>
    );
  }
}

export default App;
