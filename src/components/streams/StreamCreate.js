import React, { Component } from 'react';
import { Field, formValues, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {}
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
        <Field
          name="title"
          component={this.renderInput}
          label="Enter A Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter A Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors  =  {};
  if (!formValues.title) {
    errors.title  = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description  = 'You must enter a description';
  }
  return errors;
};
export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
