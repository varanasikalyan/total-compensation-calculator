import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";
import OfferChartJs from "../charts/OfferChartJs";

class OfferResults extends Component {
	state = {}
  	render() {
    	return (
			<Fragment>
    			<OfferReChart />
				<OfferChartJs />
			</Fragment>
    	)
  	}
}

export default OfferResults;