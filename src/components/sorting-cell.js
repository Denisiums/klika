import React, { Component } from 'react';

class SortingCell extends Component {


  render() {
    if (!this.props.name) return null;
    return (
      <th className="sorted-table__cell sorted-table__cell--head">
        <span>{this.props.name}</span>
        {this.props.order && <span> {this.props.order} </span>}
        {!this.props.order && <span>N</span>}
      </th>
    );
  }
}

export default SortingCell;
