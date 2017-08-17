import React, { Component } from 'react';

class PaginationPaging extends Component {

  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(e) {
    console.log(e.target.value); // TODO:
    this.props.handlePageClick(e.target.value);
  }

  render() {
    const page = this.props.page;
    const totalPages = this.props.totalPages;
    if (!page || !totalPages) return null;
    return (
      <div className='paging'>
        <div>{'<<'}</div>
        <div>{'<'}</div>
          {PaginationPaging.generatePages(totalPages, page)}
        <div>{'>'}</div>
        <div>{'>>'}</div>
      </div>
    );
  }

  static generatePages(total, page) {
    if (!total || !page) throw new Error('Invalid arguments!');
    const AROUND_PAGES = 4; // should be even
    const result = [];

    let from = (page - AROUND_PAGES < 1) ? 1 : (page - AROUND_PAGES < 1);
    let to = (page + AROUND_PAGES > total) ? total : (page + AROUND_PAGES);
    console.log('from: ', from, ' to: ', to);
    for (let i = from; i <= to; i++) {
      const button = PaginationPaging.generatePageButton(i);
      result.push(button);
    }
    return result;

  }

  static generatePageButton(number) {
    if (!number) throw new Error('Invalid arguments!');
    return (
      <div onClick={this.handlePageClick} className='paging__button' key={number}>{number}</div>

    )
  }

}

export default PaginationPaging;
