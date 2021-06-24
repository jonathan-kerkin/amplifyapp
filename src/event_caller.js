'use strict';
import React from 'react';
const JSON_STRINGIFY_INDENT = 2;


class EventCaller extends React.Component {
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
          this.setState({ eventBody: JSON.stringify(responseBody, JSON_STRINGIFY_INDENT)});
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
export default EventCaller;