import React, { Component } from 'react';
import '../styles/filtered-table.css';



class FilteredTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.applyAllFilters(props.rawTracks)
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('current props: ', this.props);
    console.log('nextProps: ', nextProps);
  }

  applyAllFilters(list) {
    if (!list) throw new Error('Invalid list');
    const result = [];

    //TODO: apply all filters and paging and sorting from state

    return result;
  };

  render() {
    if (!this.state.tracks) return null;
    return (
      <div className="filtered-table">
        <div>Table</div>
        <div>Filters</div>
      </div>
    );
  }
}

export default FilteredTable;
