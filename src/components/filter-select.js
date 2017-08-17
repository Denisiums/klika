import React, { Component } from 'react';

class FilterSelect extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const value = e.target.value;
    this.props.onSelectFilter(value);
  }

  render() {
    const options = this.props.options;
    const value = this.props.value;
    const name = this.props.name;
    console.log('render: ', name);
    console.log('value: ', value);
    console.log('options: ', options);
    if (!options || !value || !name || !this.props.onSelectFilter) return null;
    return (
      <div className='filter'>
        <h4 className='filter__name'>{name}</h4>
        <select onChange={this.handleSelect} name={name.toLowerCase()}>
          {FilterSelect.generateOptions(options)}
        </select>
      </div>
    );
  }

  static generateOptions(list) {
    if (!list || !Array.isArray(list)) throw new Error('Invalid arguments');
    return (
      list.map(item => {
        return (
          <option className="filter__value" key={item} value={item}>{item}</option>
        );
      })
    )
  }
}

export default FilterSelect;
