import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getcomment } from "../actions/Data.actions"

class ShowData extends Component {
  constructor(){
    super();
  }

  onClick() {
    this.props.data();
  }

  render() {
    return (
      <div className="container">
        <div>
        {
          JSON.stringify(this.props.comment)
        }
        </div>

        <button type="text" onClick={this.onClick.bind(this)} >CliCk to get comment </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comment: state.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    data: () => {
      dispatch(getcomment());
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowData));
