import React from "react";
import "./App.css";
class SearchBar extends React.Component {
  state = { input: "" };

  //Using arrow function so that error should not come (this is not defined)
  onFormSubmit = (event) => {
    event.preventDefault();
    /*below we are sending value entered by user to App component 
     which is parent of Search Bar and it is sending prop as  onSearchSubmit which is running a function */
    this.props.handleSubmit(this.state.input);
  };

  render() {
    return (
      //All these classes are of sematic-ui CDN, and not user written
      <div className="ui segment searchbar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
