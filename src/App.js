import React, { Component } from 'react';
import './App.css';
import { getListings } from './data';

import Header from './components/Header';
import Listing from './components/Listing';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: getListings(),
      filters: [],
    };
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          {this.state.filters.length > 0
            ? this.filteredResults()
            : this.state.listings.map((listing) => (
                <Listing key={listing.id} listing={listing} />
              ))}
        </main>
      </div>
    );
  }
}

export default App;
