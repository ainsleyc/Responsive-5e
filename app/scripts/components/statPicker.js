import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.stat.key} {this.props.stat.value}</h1>
      </div>
    );
  }
}
