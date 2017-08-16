import React, { Component } from 'react';
import SortedTableHead from './sorted-table-head';
import '../styles/sorted-table.css';

class SortedTable extends Component {

  constructor(props) {
    super(props);
    this.handleSorting = this.handleSorting.bind(this);
  }

  handleSorting(fieldData) {
    this.props.handleSorting(fieldData);
  }

  render() {
    if (!this.props.tracks || !this.props.sorting) return null;
    return (
      <table className="sorted-table">
        <SortedTableHead handleSorting={this.handleSorting} sorting={this.props.sorting} />
      </table>
    );
  }
}

export default SortedTable;
