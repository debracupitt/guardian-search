import React, { Component } from "react";

import "./Search.css";
import axios from "../../axios-articles";
import Results from "../../components/Results/Results";
import Aux from "../../hoc/Aux/Aux";

class Search extends Component {
  state = {
    searchInput: "",
    articles: [],
    sections: [],
    error: false
  };

  handleChange = event => {
    // Make API resuest as the user types
    axios
      .get(
        "https://content.guardianapis.com/search?q=" +
          event.target.value +
          "&api-key=27157d59-4928-405b-baff-081c8792db26"
      )
      .then(response => {
        const sectionsSet = new Set();
        response.data.response.results.forEach(result =>
          sectionsSet.add(result.sectionName)
        );
        this.setState({
          articles: response.data.response.results,
          sections: sectionsSet
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });
    this.setState({ searchInput: event.target.value });
  };

  render() {
    // If error, handle, if not render search results
    let responseResults = this.state.error ? (
      <h4> Sorry... looks like something has gone wrong</h4>
    ) : (
      <Results articles={this.state.articles} sections={this.state.sections} />
    );

    return (
      <Aux>
        <div className="search">
          <input
            type="search"
            placeholder="What are you looking for?"
            title="Search"
            autoFocus="autofocus"
            className="searchInput"
            onChange={this.handleChange}
          />
        </div>
        {responseResults}
      </Aux>
    );
  }
}

export default Search;
