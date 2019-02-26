import React from "react";

import "./SavedArticle.css";

const savedArticle = props => (
  <div className="SavedArticle" href={props.url}>
    <div>
      <p className="title">{props.title}</p>
    </div>
    <div>
      <p className="date">{props.date}</p>
      <a className="savedLink" href={props.url}>
        READ MORE
      </a>
      <p onClick={props.clicked} className="delete" title="Delete Article">
        DELETE
      </p>
    </div>
  </div>
);

export default savedArticle;
