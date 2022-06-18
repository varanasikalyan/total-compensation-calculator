import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";
import CompensationSummaryTable from "../grids/OfferMUIGrid";

import { RECHARTS, yearGrouping } from '../mock/Mock';

class OfferResults extends Component {
  	render() {
    	return (
			<Fragment>
    			<OfferReChart data={ yearGrouping(RECHARTS.data) }/>
				<CompensationSummaryTable />
			</Fragment>
    	)
  	}
}

export default OfferResults;