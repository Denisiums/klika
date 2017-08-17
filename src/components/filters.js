import React, { Component } from 'react';
import FilterSelect from './filter-select';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.onSelectPerformer = this.onSelectPerformer.bind(this);
    this.onSelectGenre = this.onSelectGenre.bind(this);
    this.onSelectYear = this.onSelectYear.bind(this);
  }

  onSelectFilter(filter, value) {
    if (!filter || !value) throw new Error('Invalid arguments');
    console.log('on select: ', filter, value);
  }

  onSelectPerformer(value) {
    console.log('on select');
    this.onSelectFilter('performer', value);
  }

  onSelectGenre(value) {
    console.log('on select');
    this.onSelectFilter('genre', value);
  }

  onSelectYear(value) {
    console.log('on select');
    this.onSelectFilter('year', value);
  }

  render() {
    const filtersFields =  this.props.filtersFields;
    const filters = this.props.filters;
    if (!filtersFields || !filters) return null;
    console.log('filters: ', filters);
    return (
      <div className='filters'>
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
    );
  }
}

export default Filters;
