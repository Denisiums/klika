import React, { Component } from 'react';
import SortedTableHead from './sorted-table-head';
import '../styles/sorted-table.css';

class SortedTable extends Component {

  //todo click handlers

  render() {
    if (!this.props.tracks || !this.props.sorting) return null;
    return (
      <table className="sorted-table">
        <SortedTableHead sorting={this.props.sorting} />
      </table>
    );
  }
}

export default SortedTable;
