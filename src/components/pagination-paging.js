import React, { Component } from 'react';

class PaginationPaging extends Component {

  constructor(props) {
    super(props);
    // this.handleSorting = this.handleSorting.bind(this);
  }

  // handleSorting(fieldData) {
  //   this.props.handleSorting(fieldData);
  // }


  render() {
    const page = this.props.page;
    const totalPages = this.props.totalPages;
    if (!page || !totalPages) return null;
    return (
      <div>
        page: {page}. Total pages: {totalPages}
      </div>
    );
  }
}

export default PaginationPaging;
