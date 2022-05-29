import React, { Component, Fragment } from 'react';
import Offer from './Offer';
import initialOffer from './OfferModel';
import OFFERS from '../common/Constants';

class OfferList extends Component {
	state = {
		offers: []
	};

	componentWillMount() {
		let newOffer = initialOffer;
		this.setState({
			offers: [newOffer]
		});
	}

	handleOfferDelete = (index) => {
        if (this.state.offers.length > 1) {
            const tamperable_offers = Object.assign([], this.state.offers);
            tamperable_offers.splice(index, 1);
            this.setState({
                offers: tamperable_offers
            });
        }
    };

    handleNewOfferAddition = () => {
        if (this.state.offers.length < OFFERS.MAX) {
            const tamperable_offers = Object.assign([], this.state.offers);
			let newOffer = initialOffer;
            tamperable_offers.push(newOffer);
            this.setState({
                offers: tamperable_offers
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();        
		this.props.createQuestion(this.state);
    };

	handleOfferContent = (content, index) => {
        const tamperable_offers = Object.assign([], this.state.offers);
        tamperable_offers[index] = content;
        this.setState({
            offers: tamperable_offers
        });
    };

  	render() {
    	return (
			<Fragment>
				<div className="col-12">
					{
						this.state.offers.map((_, index) => {
							return (
								<Offer key={ index } id={ index } onContentChange={ this.handleOfferContent } onContentDelete={ this.handleOfferDelete }/>												
							);
						})
					}
				</div>
				<div className="col-12">
					<button type="button" onClick={ this.handleNewOfferAddition } className="btn btn-sm btn-full btn-outline-secondary btn-sm" id="plus-btn">
						<i className="fa fa-plus"></i> Compare another offer
					</button>
				</div>
			</Fragment>
    	)
  	}
}

export default OfferList;