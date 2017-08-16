import React, { Component } from 'react';

class SortingCell extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onSortingCellClick({field: this.props.fieldName})
  }

  render() {
    if (!this.props.name || !this.props.onSortingCellClick || !this.props.fieldName) return null;
    return (
      <th
        onClick={this.handleClick}
        className="sorted-table__cell sorted-table__cell--head">
        <span>{this.props.name}</span>
        {this.props.order && <span> {this.props.order} </span>}
        {!this.props.order && <span>N</span>}
      </th>
    );
  }
}

export default SortingCell;
