import React, { Component } from "react";

import "./SavedDrawer.css";

class SavedDrawer extends Component {
  // Saved articles in a show/hide drawer
  // state = {
  //   drawerVisibile: false
  // }
  //
  // drawerToggle = () => {
  //
  // };

  render() {
    return (
      <div>
        <section
          className="SavedSection drawer-closed"
          onClick={this.drawerToggle}
        >
          <h2>Your Saved Articles</h2>
          <div className="saved-articles">{this.props.savedArticles}</div>
        </section>
      </div>
    );
  }
}

export default SavedDrawer;
