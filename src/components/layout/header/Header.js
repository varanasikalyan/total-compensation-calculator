import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <Fragment>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<FontAwesomeIcon icon={faPiggyBank} className="money-wave-svg" />
					<span className="app-name">Total Compensation Calculator</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsOptions" aria-controls="navbarsOptions" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsOptions">
					<ul className="navbar-nav me-auto"></ul>
					<form className="d-flex">
						{
							props.user.is_authenticated === false ? <SignedInLinks /> : <SignedOutLinks />
						}
					</form>
				</div>
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