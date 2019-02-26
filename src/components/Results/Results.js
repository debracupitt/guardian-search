import React, { Component } from "react";

import Article from "./Article/Article";
import "./Results.css";
import SavedDrawer from "../SavedDrawer/SavedDrawer";
import SavedArticle from "../SavedDrawer/SavedArticle/SavedArticle";

class Results extends Component {
  state = {
    results: [],
    savedResults: []
  };

  componentDidMount() {
    this.setState({ results: this.props.articles });
  }

  reformatDate = date => {
    // format date data to DD/MM/YYYY
    const dateArray = date.split("T")[0].split("-");
    let reformattedDateArray = [];

    reformattedDateArray.push(dateArray[2]);
    reformattedDateArray.push(dateArray[1]);
    reformattedDateArray.push(dateArray[0]);

    const finalDate = reformattedDateArray.join("/");
    return finalDate;
  };

  saveHandler = (articleId, articleTitle, articleDate, articleUrl) => {
    const updatedSaved = [
      ...this.state.savedResults,
      {
        id: articleId,
        webTitle: articleTitle,
        webPublicationDate: articleDate,
        webUrl: articleUrl
      }
    ];
    this.setState({ savedResults: updatedSaved });
  };

  deleteHandler = event => {
    // Delete article card
    event.target.parentNode.parentNode.remove();
  };

  render() {
    const sections = [...this.props.sections];
    let results = this.props.articles;

    let formattedSections = sections.map(section => {
      // Create list of articles that match the section name
      let matchingArticles = results.map(a => {
        if (a.sectionName === section) {
          return (
            <Article
              key={a.id}
              title={a.webTitle}
              date={this.reformatDate(a.webPublicationDate)}
              url={a.webUrl}
              clicked={() =>
                this.saveHandler(
                  a.id,
                  a.webTitle,
                  this.reformatDate(a.webPublicationDate),
                  a.webUrl
                )
              }
            />
          );
        } else {
          return "";
        }
      });

      // Return JSX section name and articles that match that section
      return (
        <div className="section" key={section}>
          <h3>{section}</h3>
          <div className="sectionArticles">{matchingArticles}</div>
        </div>
      );
    });

    let savedResults = this.state.savedResults;
    let savedArticles = savedResults.map(a => {
      return (
        <SavedArticle
          className="saved"
          key={a.id}
          title={a.webTitle}
          date={a.webPublicationDate}
          url={a.webUrl}
          clicked={e => this.deleteHandler(e)}
        />
      );
    });

    return (
      <div className="results-container">
        <section className="Results">{formattedSections}</section>
        <SavedDrawer savedArticles={savedArticles} />
      </div>
    );
  }
}

export default Results;
