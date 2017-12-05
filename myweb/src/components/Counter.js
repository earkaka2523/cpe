import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, delCounter } from "../actions/App.actions";
import { withRouter } from 'react-router-dom';
import {  FormGroup, FormControl } from 'react-bootstrap';


class CounterPage extends Component {
  constructor() {
    super();
    this.state = {value: 0};
  }
  handleChange(e) {
    var data = Number.parseInt(e.target.value);
      this.setState({ value: data });
    }
  render() {
    return (
      <div className="container">
        <h1> This is a Counter</h1>
        <FormGroup bsSize="small">
          <FormControl type="text" placeholder="Enter Values" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
        <p> your count: {this.props.count} </p>
        <button onClick={() => this.props.add(this.state.value)}>+</button>
        <button onClick={() => this.props.del(this.state.value)}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (val) => {
      dispatch(addCounter(val));
    },
    del: (val) => {
      dispatch(delCounter(val));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterPage));
