import React, { Component } from 'react';

class PaginationItemsPerPageButton extends Component {

  constructor(props) {
    super(props);
    // this.handleSorting = this.handleSorting.bind(this);
  }

  // handleSorting(fieldData) {
  //   this.props.handleSorting(fieldData);
  // }


  render() {
    const value = this.props.value;
    if (!this.props.value) return null;
    return (
      <div className={'items-per-page__button ' + (this.props.active ? 'items-per-page__button--active' : '')}>
        {value}
      </div>
    );
  }

}

export default PaginationItemsPerPageButton;
