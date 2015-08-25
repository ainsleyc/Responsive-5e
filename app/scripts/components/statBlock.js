import React from 'react';

import StatPicker from './statPicker'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [
        { key: 'Str', value: 16, mod: 3 },
        { key: 'Dex', value: 10, mod: 0 },
        { key: 'Con', value: 14, mod: 2 },
        { key: 'Int', value: 10, mod: 0 },
        { key: 'Wis', value: 8, mod: -1 },
        { key: 'Cha', value: 8, mod: -1 }
      ]
    };
  }

  render() {
    return (
      <div className="hero-unit">
        {this.state.stats.map(this.renderStat)}
      </div>
    );
  }

  renderStat(stat) {
    return <StatPicker stat={stat}></StatPicker>;
  }

  renderMod(stat) {
    return <StatPicker stat={stat}></StatPicker>;
  }
}
