import React, { Component, Fragment } from 'react';
import OfferReChart from "../charts/OfferReChart";
import OfferChartJs from "../charts/OfferChartJs";
import CompensationSummaryTable from "../grids/OfferMUIGrid";

import { RECHARTS, yearGrouping } from '../mock/Mock';

class OfferResults extends Component {
	state = {
		switch: true,
	}

	handleSwitch = () => {
		this.setState({
			switch: !this.state.switch
		});
    };

  	render() {
		const styleMargin = {
			marginLeft: "20px"
		}
    	return (
			<Fragment>
				<div className='category-header'>
					Salary Projection
					<button type="button" onClick={ this.handleSwitch } style={styleMargin} className="btn btn-sm btn-outline-secondary" id="plus-btn">
						Switch view
					</button>
				</div>
				<br/>
				{
					this.state.switch ? <OfferChartJs /> : <OfferReChart data={ yearGrouping(RECHARTS.data) }/>
				}
				<br/>
				<div className='category-header'>Salary Breakup</div>
				<br/>
				<CompensationSummaryTable />
			</Fragment>
    	)
  	}
}

export default OfferResults;