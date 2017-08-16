import React, { Component } from 'react';
import '../styles/filtered-table.css';
import SortedTable from './sorted-table';

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
    this.applyAllFiltersToTracks(this.props.rawTracks);
    this.updatePaginationTotalPages(this.props.rawTracks);
  }

  componentWillReceiveProps(nextProps) {
    this.resetAllFilters();
    this.updateFiltersFields(nextProps.rawTracks);
    this.applyAllFiltersToTracks(nextProps.rawTracks);
    this.updatePaginationTotalPages(nextProps.rawTracks);
  }

  render() {
    if (!this.state.tracks) return null;
    return (
      <div className="filtered-table">
        <SortedTable tracks={this.state.tracks} sorting={this.state.sorting} />
        <div>Filters</div>
      </div>
    );
  }

  applyAllFiltersToTracks(rawTracks) {
    if (!rawTracks || !Array.isArray(rawTracks)) throw new Error('Invalid array');
    //TODO: apply all filters and paging and sorting from state

    this.setState((prevState, props) => {
      const filter = prevState.filters;
      const sorting = prevState.sorting;
      const pagination = prevState.pagination;
      const sortingFunction = FilteredTable.getFieldSortingFunction(sorting.field, sorting.order);
      let filteredTracks = [];

      filteredTracks = rawTracks.filter((el, index) => {

        return (FilteredTable.isPerformerValid(el.performer, filter.performer)
          && FilteredTable.isGenreValid(el.genre, filter.genre)
          && FilteredTable.isYearValid(el.year, filter.year));
      });

      filteredTracks.sort(sortingFunction);

      // this.updatePaginationTotalPages(filteredTracks); //TODO

      return {
        tracks: filteredTracks,
        pagination: {
          page: 1,
        }
      } // TODO: potential dangerous due asynchronous. Check later
    });
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
    filters.performer = filters.performer.concat(this.getUniqueValuesByKeyFromArray(rawTracks, 'performer'));
    filters.genre = filters.genre.concat(this.getUniqueValuesByKeyFromArray(rawTracks, 'genre'));
    filters.year = filters.year.concat(this.getUniqueValuesByKeyFromArray(rawTracks, 'year'));
    this.setState({
      filersFields: filters
    });
  }

  getUniqueValuesByKeyFromArray(array, key) {
    if (!Array.isArray(array) || !key) throw new Error('Invalid arguments');

    const unique = [...new Set(array.map(item => item[key]))];
    return unique;
  }

  updatePaginationTotalPages(tracks) {
    if (!tracks) return;

    this.setState((prevState, props) => {
      const itemsPerPage = prevState.pagination.itemsPerPage;
      const totalItems = tracks.length;
      const newTotalPages = Math.ceil(totalItems / itemsPerPage);
      return {
        pagination: {
          totalPages: newTotalPages
        }
      }
    })
  }

  static isPerformerValid(performer, filterValue) {
    return FilteredTable.isValuePassFilter(performer, filterValue);
  }

  static isGenreValid(genre, filterValue) {
    return FilteredTable.isValuePassFilter(genre, filterValue);
  }

  static isYearValid(year, filterValue) {
    return FilteredTable.isValuePassFilter(year, filterValue);
  }

  static isValuePassFilter(value, filterValue) {
    return filterValue === 'all' || value === filterValue;
  }

  static getFieldSortingFunction(field, order) {
    let sortingFunction = function() {};
    if (field === 'year' || field === 'duration') {
      sortingFunction = function(a, b) {
        const aValue = a[field];
        const bValue = a[field];
        return (order === 'asc' ? (aValue - bValue) : (bValue - aValue));
      };
    } else if (field === 'genre' || field === 'performer') {
      sortingFunction = function(a, b) {
        //a.localeCompare(b)?
        const aValue = a[field];
        const bValue = a[field];
        const loweredA = aValue.toLowerCase();
        const loweredB = bValue.toLowerCase();
        if (loweredA < loweredB) return (order === 'asc' ? -1 : 1);
        if (loweredA > loweredB) return (order === 'asc' ? 1 : -1);
        return 0;
      };
    }
    return sortingFunction;
  }

}

export default FilteredTable;
