import React, { Component } from 'react';
import PaginationPaging from './pagination-paging'

class Pagination extends Component {

  constructor(props) {
    super(props);
    // this.handleSorting = this.handleSorting.bind(this);
  }

  // handleSorting(fieldData) {
  //   this.props.handleSorting(fieldData);
  // }


  render() {
    if (!this.props.pagination) return null;
    const page = this.props.pagination.page;
    const itemsPerPage = this.props.pagination.itemsPerPage;
    const totalPages = this.props.pagination.totalPages;
    return (
      <div>
        <PaginationPaging page={page} totalPages={totalPages} />
        <div>Items</div>
      </div>
    );
  }
}

export default Pagination;
