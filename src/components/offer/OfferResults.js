import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";
import OfferChartJs from "../charts/OfferChartJs";

import RECHARTS from '../mock/Mock';

class OfferResults extends Component {
	state = {}
  	render() {
    	return (
			<Fragment>
    			<OfferReChart data={RECHARTS.data}/>
				<OfferChartJs />
			</Fragment>
    	)
  	}
}

export default OfferResults;