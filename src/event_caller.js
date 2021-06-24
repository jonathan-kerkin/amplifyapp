'use strict';
import React from 'react';

function event_caller() {
const JSON_STRINGIFY_INDENT = 2;
const e = React.createElement;

class event_caller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventBody: '' };
  }

  componentDidMount() {
    this.GetEvent();
  }

  GetEvent() {
      fetch(this.props.endpoint)
      .then(response => {
        return response.json();
      })
      .then(responseBody => {
          this.setState({ eventBody: JSON.stringify(responseBody, null, JSON_STRINGIFY_INDENT)});
      });
  }

  render() {
    let eventBody = this.state.eventBody;
    return (
      <div id="event-body-text">
        <h2>Event Body Will Be Output Below</h2>
        <pre>
          { eventBody }
        </pre>
      </div>
    );
  }
}
}

export default event_caller;