import React, { Component } from 'react';

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const $form = event.target;

    const location = $form.location.value.trim();
    const dimensions = $form.dimensions.value.trim();
    const rent = $form.rent.value.trim();
    const date = $form.date.value.trim();
    const amenities = $form.amenities.value.trim();
    const hostInfo = { location, dimensions, rent, date, amenities };

    if (location.length >= 1 && date.length >= 1 && amenities.length >= 1) {
      this.props.addListing(hostInfo);
    } else this.setState({ hasValidationErrors: true });
  };

  render() {
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">home</i>
            <input
              id="location"
              type="text"
              className="validate"
              placeholder="Host location"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">crop_landscape</i>
            <input
              id="dimensions"
              type="number"
              className="validate"
              placeholder="Backyard dimensions"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">attach_money</i>
            <input
              id="rent"
              type="number"
              className="validate"
              placeholder="Desired rent"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">date_range</i>
            <input
              id="date"
              type="text"
              className="validate"
              placeholder="Projected earliest move-in date"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">
              format_list_numbered
            </i>
            <input
              id="amenities"
              type="text"
              className="validate"
              placeholder="Available amenities"
              //placeholder="WATER"
              //value="WATER"
              required
            />
          </div>
        </div>

        <div className="row center">
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light green lighten-1">
            SUBMIT LISTING
          </button>
          {this.state.hasValidationErrors &&
            <h5 style={styles.errorStyle}>Please submit valid inputs</h5>}
          {
            <h5 style={styles.errorStyle}>
              {this.props.errorMsg ? this.props.errorMsg : null}
            </h5>
          }
        </div>
      </form>
    );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontWeight: 'bold'
  }
};
