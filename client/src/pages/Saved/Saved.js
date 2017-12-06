import React from 'react';

const Saved = props =>

  <div className="card">
    <h1 className="card-header" style={{ textAlign: "center" }}>Saved Articles</h1>
    <div className="card-body">
    {props.children}
    </div>
  </div>

export default Saved;