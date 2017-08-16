import React, { Component } from 'react';
import SortedTableHead from './sorted-table-head';
import TableRow from './table-row';
import '../styles/sorted-table.css';

class SortedTable extends Component {

  constructor(props) {
    super(props);
    this.handleSorting = this.handleSorting.bind(this);
  }

  handleSorting(fieldData) {
    this.props.handleSorting(fieldData);
  }

  generateRows() {
    return (
      this.props.tracks.map(track => {
        return (<TableRow key={track.id} track={track} />);
      })
    )
  }

  render() {
    if (!this.props.tracks || !this.props.sorting) return null;
    return (
      <table className="sorted-table">
        <SortedTableHead handleSorting={this.handleSorting} sorting={this.props.sorting} />
        <tbody>
          {this.generateRows()}
        </tbody>
      </table>
    );
  }
}

export default SortedTable;
