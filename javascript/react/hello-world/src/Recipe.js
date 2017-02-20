import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      hover: false,
      recipe: this.props.recipes.find(r => r.name === this.props.params.recipe)
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  /*handleClick (e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }*/
  handleClick = (e) => {
    console.log('click', e);
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleMouseEnter = (e) => {
    console.log('mouse enter', e);
    this.setState({
      hover: true
    });
  }

  handleMouseLeave = (e) => {
    console.log('mouse leave', e);
    this.setState({
      hover: false
    });
  }

  render() {
    const dropdown = this.state.dropdownOpen ? <p> {this.state.recipe.details} </p> : null,
      style = this.state.hover ? { backgroundColor: 'yellow', display: 'inline-block' } : null;
    // const boundHandleClick = this.handleClick.bind(this);
    // let that = this;

    return (
      <div>
        <h2>{this.state.recipe.name}</h2>
        <p>{this.state.recipe.instructions}</p>

        <div onClick={this.handleClick} style={style}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >Click here to see more details</div>
        { /* <div onClick={e => this.handleClick(e)}>Click here to open</div> */}
        { /* <div onClick={function (e) { that.handleClick(e); }}>Click here to open</div> */}
        {dropdown}
      </div>
    );
  }
}

export default Recipe;
