import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";

import { RECHARTS, yearGrouping } from '../mock/Mock';

class OfferResults extends Component {
  	render() {
    	return (
			<Fragment>
    			<OfferReChart data={ yearGrouping(RECHARTS.data) }/>
			</Fragment>
    	)
  	}
}

export default OfferResults;