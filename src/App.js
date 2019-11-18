import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <PizzaBuilder/>
      </Layout>
    );
  }
}

export default App;