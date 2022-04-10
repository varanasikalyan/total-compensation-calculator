import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';

const Header = (props) => {
	let userOptions;
	if (props.user.is_authenticated === true) {
		userOptions = <SignedInLinks />
	}
	else {
		userOptions = <SignedOutLinks />
	}
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <span className="app-name">Total Compensation Calculator</span>
            </Link>
            <form className="d-flex">
              <button
                className="form-control navbar-toggler me-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsOptions"
                aria-controls="navbarsOptions"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              { userOptions }
            </form>
          </div>
        </nav>
      </Fragment>
    );
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

export default connect(mapStateToProps, null)(Header);