import React, { Component } from 'react';
import PaginationItemsPerPageButton from './pagination-items-per-page-button'

const ITEMS_PER_PAGE = [10, 25, 50, 100];

class PaginationItemsPerPage extends Component {

  constructor(props) {
    super(props);
    // this.handleSorting = this.handleSorting.bind(this);
  }

  // handleSorting(fieldData) {
  //   this.props.handleSorting(fieldData);
  // }


  render() {
    if (!this.props.itemsPerPage) return null;
    return (
      <div className="items-per-page">
        {this.generateItems(ITEMS_PER_PAGE)}
      </div>
    );
  }

  generateItems(listOfValues) {
    const currentItemsPerPage = this.props.itemsPerPage;
    if (!currentItemsPerPage || !listOfValues || !Array.isArray(listOfValues)) throw new Error('Invalid arguments!');
    return (listOfValues.map(value => {
        return (
          <PaginationItemsPerPageButton key={value} value={value} active={value === currentItemsPerPage} />
        )
      })
    )
  }
}

export default PaginationItemsPerPage;
