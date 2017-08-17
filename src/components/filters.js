import React, { Component } from 'react';
import FilterSelect from './filter-select';
import '../styles/filters.css';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.onSelectPerformer = this.onSelectPerformer.bind(this);
    this.onSelectGenre = this.onSelectGenre.bind(this);
    this.onSelectYear = this.onSelectYear.bind(this);
  }

  onSelectFilter(filter, value) {
    if (!filter || !value) throw new Error('Invalid arguments');
    this.props.onSelectFilter( { filter, value } );
  }

  onSelectPerformer(value) {
    this.onSelectFilter('performer', value);
  }

  onSelectGenre(value) {
    this.onSelectFilter('genre', value);
  }

  onSelectYear(value) {
    this.onSelectFilter('year', +value);
  }

  render() {
    const filtersFields =  this.props.filtersFields;
    const filters = this.props.filters;
    if (!filtersFields || !filters || !this.props.onSelectFilter) return null;
    return (
      <div className='filters'>
        <h2 className='filters__header'>Filters</h2>
        <div className='filters__set'>
          <FilterSelect
            onSelectFilter={this.onSelectPerformer}
            name={'Performer'}
            options={filtersFields.performer}
            value={filters.performer} />
          <FilterSelect
            onSelectFilter={this.onSelectGenre}
            name={'Genre'}
            options={filtersFields.genre}
            value={filters.genre} />
          <FilterSelect
            onSelectFilter={this.onSelectYear}
            name={'Year'}
            options={filtersFields.year}
            value={filters.year} />
        </div>
      </div>
    );
  }
}

export default Filters;
