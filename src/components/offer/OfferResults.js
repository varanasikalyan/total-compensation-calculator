import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";
import CompensationSummaryTable from "../grids/OfferMUIGrid";

import { RECHARTS, yearGrouping } from '../mock/Mock';

class OfferResults extends Component {
  	render() {
    	return (
			<Fragment>
				<div className='category-header'><u>Salary Projection</u></div>
				<br/>
    			<OfferReChart data={ yearGrouping(RECHARTS.data) }/>
				<br/>
				<div className='category-header'><u>Salary Breakup</u></div>
				<br/>
				<CompensationSummaryTable />
			</Fragment>
    	)
  	}
}

export default OfferResults;