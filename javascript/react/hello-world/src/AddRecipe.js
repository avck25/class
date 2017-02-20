import React, { Component } from 'react';

class AddRecipe extends Component {
  render () {
      return (
            <div>
                <h1>Add Recipe</h1>
                Name: <input /><br />
                Instructions: <input /><br />
                Details: <input /><br />
            </div>
        );
    }
}

export default AddRecipe;
