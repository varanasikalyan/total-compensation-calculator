import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";

import RECHARTS from '../mock/Mock';

class OfferResults extends Component {
	state = {}
  	render() {
    	return (
			<Fragment>
    			<OfferReChart data={RECHARTS.data}/>
			</Fragment>
    	)
  	}
}

export default OfferResults;