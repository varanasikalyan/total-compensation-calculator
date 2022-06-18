import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";
import CompensationSummaryTable from "../grids/OfferMUIGrid";

import { RECHARTS, yearGrouping } from '../mock/Mock';

class OfferResults extends Component {
  	render() {
    	return (
			<Fragment>
				<div className='category-header'>Salary Projection</div>
				<br/>
    			<OfferReChart data={ yearGrouping(RECHARTS.data) }/>
				<br/>
				<div className='category-header'>Salary Breakup</div>
				<br/>
				<CompensationSummaryTable />
			</Fragment>
    	)
  	}
}

export default OfferResults;