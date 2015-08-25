import React from 'react';

import StatPicker from './statPicker'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [
        { key: 'Str', value: 10 },
        { key: 'Dex', value: 10 },
        { key: 'Con', value: 10 },
        { key: 'Int', value: 10 },
        { key: 'Wis', value: 10 },
        { key: 'Cha', value: 10 }
      ]
    };
  }

  render() {
    return (
      <div className="hero-unit">
        <ul>{this.state.stats.map(this.renderItem)}</ul>
      </div>
    );
  }

  renderItem(stat) {
    return <StatPicker stat={stat}></StatPicker>;
  }
}
