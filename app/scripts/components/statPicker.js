import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label className="" for="exampleInputAmount">{this.props.stat.key}</label>
          <div className="input-group">
            <div className="input-group-addon">-</div>
            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" value={this.props.stat.value}></input>
            <div className="input-group-addon">+</div>
          </div>
        </div>
      </form> 
    );
  }
}
