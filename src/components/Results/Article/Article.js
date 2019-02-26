import React from "react";

import "./Article.css";

const article = props => (
  <div className="Article" href={props.url}>
    <div>
      <p className="title">{props.title}</p>
    </div>
    <div>
      <p className="date">{props.date}</p>
      <a className="link" href={props.url}>
        READ MORE
      </a>
      <p onClick={props.clicked} className="save" title="Save Article">
        SAVE
      </p>
    </div>
  </div>
);

export default article;
