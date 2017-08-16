import React, { Component } from 'react';

class TableRow extends Component {

  static formatDuration(ms) {
    if (Number.isNaN(ms)) throw new Error('NaN!');
    const minutes = Math.floor((ms / 1000) / 60);
    let seconds = Math.floor(ms / 1000 - (minutes * 60));
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  render() {
    if (!this.props.track) return null;
    const performer = this.props.track.performer;
    const name = this.props.track.name;
    const genre = this.props.track.genre;
    const year = this.props.track.year;
    const duration = TableRow.formatDuration(this.props.track.duration);
    return (
      <tr className="sorted-table__row">
        <td className="sorted-table__cell">{performer}</td>
        <td className="sorted-table__cell">{name}</td>
        <td className="sorted-table__cell">{genre}</td>
        <td className="sorted-table__cell">{year}</td>
        <td className="sorted-table__cell">{duration}</td>
      </tr>
    );
  }
}

export default TableRow;
