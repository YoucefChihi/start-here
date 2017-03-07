import React, { Component } from 'react';

//Material Components
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends Component {
  render(){
    return(
      <div>
        <AppBar title="Title" style={{marginBottom: 20}}/>
        <RaisedButton label="default" />
        <RaisedButton label="primary" primary={true} />
        <RaisedButton label="secondary" secondary={true} />
        <RaisedButton label="disabled" disabled={true} />
      </div>
    )
  }
}
