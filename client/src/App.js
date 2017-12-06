import React, { Component } from 'react';
import Search from "./pages/Search";
import Head from "./components/Head";


class App extends Component {
 render() {
  return (
    <div className="container">
      <Head />
      <Search />
    </div>
  );
 }
}

export default App;
