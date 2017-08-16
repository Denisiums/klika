import React, { Component } from 'react';
import SortingCell from './sorting-cell';

class SortedTableHead extends Component {

  //todo click handler

  render() {
    console.log('this.props.sorting: ', this.props.sorting);
    if (!this.props.sorting) return null;
    const order = this.props.sorting.order;
    const sortingField = this.props.sorting.field;
    return (
      <thead className="sorted-table__head">
        <tr>
          <SortingCell name={'Исполнитель'} order={sortingField === 'performer' ? order : null } />
          <SortingCell name={'Песня'} order={sortingField === 'name' ? order : null } />
          <SortingCell name={'Жанр'} order={sortingField === 'genre' ? order : null } />
          <SortingCell name={'Год'} order={sortingField === 'year' ? order : null } />
          <SortingCell name={'Продолжительность'} order={sortingField === 'duration' ? order : null } />
        </tr>
      </thead>
    );
  }
}

export default SortedTableHead;
