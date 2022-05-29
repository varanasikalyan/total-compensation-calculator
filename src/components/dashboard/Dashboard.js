import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import OfferList from '../offer/OfferList';
import OfferResults from '../offer/OfferResults';

class Dashboard extends Component {
  render() {
    if (this.props.user.is_authenticated)
      	return <Redirect to='/home' />
    else {
		return (      
			<div className="container-fluid">            
				<div className="row">
					<div className="col-12 col-lg-5 col-centered">
						<OfferList/>
					</div>
					<div className="col-12 col-lg-7 col-centered">
						<OfferResults />
					</div>            
				</div>
			</div>
		)
    }
  }
}

const mapStateToProps = (state) => {
	return {
    	module: state.module,
    	user: state.user
	}
}

export default connect(mapStateToProps)(Dashboard);