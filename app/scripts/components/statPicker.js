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
          <div className="col-md-3">
            <label className="" for="exampleInputAmount">{this.props.stat.key}</label>
          </div>
          <div className="input-group col-md-6">
            <div className="input-group-addon">-</div>
            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" value={this.props.stat.value}></input>
            <div className="input-group-addon">+</div>
          </div>
          <div className="input-group col-md-1">
          </div>
          <div className="input-group col-md-2">
            <input type="text" className="form-control" value={this.props.stat.mod}></input>
          </div>
        </div>
      </form> 
    );
  }
}
