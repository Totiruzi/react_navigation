import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editeStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onFormSubmit = (formValues) => {
    const { id } = this.props.match.params;
    this.props.editeStream(id, formValues);
  };
  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading!!!!</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          // initialValues={{ title: 'this.props.stream.title', description: 'this.props.stream.description'}}
          // using lodash to achive the same above purpose of initializing form values
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editeStream })(
  StreamEdit
);
