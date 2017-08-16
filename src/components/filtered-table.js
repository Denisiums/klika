import React, { Component } from 'react';
import '../styles/filtered-table.css';

const DEFAULT_FILTERS = {
  performer: 'all',
  genre: 'all',
  year: 'all'
};

const DEFAULT_PAGINATION = {
  page: 1,
  itemsPerPage: 10,
  totalPages: 1
};

const DEFAULT_SORTING = {
  field: 'performer',
  order: 'asc'
};

const DEFAULT_FILTERS_FIELDS = {
  performer: ['all'],
  genre: ['all'],
  year: ['all']
};

class FilteredTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: props.rawTracks.slice(),
      filters: Object.assign({}, DEFAULT_FILTERS),
      pagination: Object.assign({}, DEFAULT_PAGINATION),
      sorting: Object.assign({}, DEFAULT_SORTING),
      filersFields: Object.assign({}, DEFAULT_FILTERS_FIELDS)
    }
  };

  componentDidMount() {
    if (!this.props.rawTracks) return;

    this.updateFiltersFields(this.props.rawTracks);
    this.updatePaginationTotalPages(this.props.rawTracks);
    this.applyAllFiltersToTracks(this.props.rawTracks);
  }

  componentWillReceiveProps(nextProps) {
    console.log('current props: ', this.props);
    console.log('nextProps: ', nextProps);
    this.resetAllFilters();
    this.updateFiltersFields(nextProps.rawTracks);
    this.updatePaginationTotalPages(nextProps.rawTracks);
    this.applyAllFiltersToTracks(nextProps.rawTracks);
  }

  render() {
    if (!this.state.tracks) return null;
    return (
      <div className="filtered-table">
        <div>Table</div>
        <div>Filters</div>
      </div>
    );
  }

  applyAllFiltersToTracks(rawTracks) {
    if (!rawTracks || !Array.isArray(rawTracks)) throw new Error('Invalid array');

    const filteredTracks = [];
    //TODO: apply all filters and paging and sorting from state





    this.setState((prevState, props) => {
      return {tracks: filteredTracks} // TODO: potential dangerous due asynchronous. Check later
    });

    return result;
  };


  resetAllFilters() {
    this.resetFilters();
    this.resetSorting();
    this.resetPagination();
  }

  resetPagination() {
    this.setState({
      pagination: Object.assign({}, DEFAULT_PAGINATION)
    });
  }

  resetSorting() {
    this.setState({
      sorting: Object.assign({}, DEFAULT_SORTING)
    });
  }

  resetFilters() {
    this.setState({
      filters: Object.assign({}, DEFAULT_FILTERS)
    });
  }

  updateFiltersFields(rawTracks) {
    if (!rawTracks) return;

    const filters = Object.assign({}, DEFAULT_FILTERS_FIELDS);
    filters.performer.concat(this.getUniqueValuesByKeyFromArray(rawTracks, 'performer'));
    filters.genre.concat(this.getUniqueValuesByKeyFromArray(rawTracks), 'genre');
    filters.year.concat(this.getUniqueValuesByKeyFromArray(rawTracks), 'year');
    this.setState({
      filersFields: filters
    });
  }

  getUniqueValuesByKeyFromArray(array, key) {
    if (!Array.isArray(array) || !key) throw new Error('Invalid arguments');
    const unique = [...new Set(array.map(item => item[key]))];
    return unique;
  }

  updatePaginationTotalPages(rawTracks) {
    if (!rawTracks) return;

    this.setState((prevState, props) => {
      const itemsPerPage = prevState.pagination.itemsPerPage;
      const totalItems = rawTracks.length;
      const newTotalPages = (totalItems / itemsPerPage);
      return {
        pagination: {
          totalPages: newTotalPages
        }
      }
    })
  }
}

export default FilteredTable;
