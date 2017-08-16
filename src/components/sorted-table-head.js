import React, { Component } from 'react';
import SortingCell from './sorting-cell';

class SortedTableHead extends Component {

  constructor(props) {
    super(props);
    this.handleSorting = this.handleSorting.bind(this);
  }

  //todo click handler
  handleSorting(fieldData) {
    this.props.handleSorting(fieldData);
  }

  render() {
    if (!this.props.sorting) return null;
    const order = this.props.sorting.order;
    const sortingField = this.props.sorting.field;
    return (
      <thead className="sorted-table__head">
        <tr>
          <SortingCell onSortingCellClick={this.handleSorting} name={'Исполнитель'} fieldName={'performer'} order={sortingField === 'performer' ? order : null } />
          <SortingCell onSortingCellClick={this.handleSorting} name={'Песня'} fieldName={'name'} order={sortingField === 'name' ? order : null } />
          <SortingCell onSortingCellClick={this.handleSorting} name={'Жанр'} fieldName={'genre'} order={sortingField === 'genre' ? order : null } />
          <SortingCell onSortingCellClick={this.handleSorting} name={'Год'} fieldName={'year'} order={sortingField === 'year' ? order : null } />
          <SortingCell onSortingCellClick={this.handleSorting} name={'Продолжительность'} fieldName={'duration'} order={sortingField === 'duration' ? order : null } />
        </tr>
      </thead>
    );
  }
}

export default SortedTableHead;
