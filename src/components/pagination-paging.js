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
    if (!this.props.page || !this.props.totalPages) return null;
    const page = this.props.page;
    const totalPages = this.props.totalPages;
    return (
      <div>
        page: {page}. Total pages: {totalPages}
      </div>
    );
  }
}

export default PaginationPaging;
