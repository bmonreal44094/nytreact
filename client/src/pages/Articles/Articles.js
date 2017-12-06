import React from 'react';

const Articles = props =>

  <div className="card">
    <h1 className="card-header" style={{ textAlign: "center" }}>Top 5 Articles</h1>
    <div className="card-body">
    {props.children}
    </div>
  </div>

export default Articles;
