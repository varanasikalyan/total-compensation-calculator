import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOffer } from '../../store/actions/offerActions';
import initialOffer from './OfferModel';

class Offer extends Component {
    state = initialOffer;
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		});
        this.props.onContentChange(this.state, this.props.id);
	}

    handleSubmit = (e) => {
        e.preventDefault();
    };
    
    handleDelete = () => {
        this.props.onContentDelete(this.props.id);
    };

    render() {
        return (
            <div className="d-grid mb-5">
                <form className="row g-2 p-2 bg-light border">
                    <div className='col-12 offer-count'>
                        { this.props.id > 0 ?
                            <i  onClick={ this.handleDelete } className="fa fa-light fa-square-minus inc-btn"></i>
                            : ""
                        }
                        Offer #{this.props.id + 1}
                    </div>
                    <div className="col-12">
                        <label className="form-label" htmlFor="company">Company</label>
                        <input type="text" className="form-control form-control-sm" name="company" id="company" placeholder="Name of the company" onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <label className="form-label" htmlFor="jobTitle">Job Title</label>
                        <input type="text" className="form-control form-control-sm" name="jobTitle" id="jobTitle" placeholder="Title" onChange={this.handleChange} />
                    </div>
                    <div className="col-xl-6 col-xs-12">
                        <label className="form-label" htmlFor="salary">Salary Basic</label>
                        <input type="text" className="form-control form-control-sm" name="salary" id="salary" placeholder="Yearly" onChange={this.handleChange} />
                    </div>
                    <div className="col-xl-6 col-xs-12">
                        <label className="form-label" htmlFor="grant">Total stock grant value</label>
                        <input type="text" className="form-control form-control-sm" name="grant" id="grant" placeholder="" onChange={this.handleChange} />
                        <small id="grantHelp" className="form-text text-muted">4-yr, even vesting schedule (edit)</small>
                    </div>
                    <div className="col-12">
                        <label className="form-label" htmlFor="signBonus">Signing bonus</label>
                        <input type="text" className="form-control form-control-sm" name="signBonus" id="signBonus" placeholder="(1st year)" onChange={this.handleChange} />
                    </div>
                    <div className='col-xl-4 col-xs-12'>
                        <button className="btn btn-sm btn-full btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            <i className="fa fa-light fa-angle-down"></i> Advanced details
                        </button>
                    </div>
                    <div className='col-xl-4 col-xs-12'>
                        <button type="submit" className="btn btn-sm btn-full btn-success">Submit</button>
                    </div>
                    <div className="collapse" id="collapseWidthExample">
                        <div className="card card-body">
                            <div className="row">
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="eightyc">80C</label>
                                    <input type="text" className="form-control form-control-sm" name="eightyc" id="eightyc" placeholder="80C Investments" onChange={this.handleChange} />
                                </div>
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="hra">HRA</label>
                                    <input type="text" className="form-control form-control-sm" name="hra" id="hra" placeholder="rent amount" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="da">Dearness Allowance</label>
                                    <input type="text" className="form-control form-control-sm" name="da" id="da" placeholder="dearness allowance amount" onChange={this.handleChange} />
                                </div>
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="ca">Communication Allowance</label>
                                    <input type="text" className="form-control form-control-sm" name="ca" id="ca" placeholder="communication allowance amount" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="pb">Performance bonus</label>
                                    <input type="text" className="form-control form-control-sm" name="pb" id="pb" placeholder="bonus amount" onChange={this.handleChange} />
                                </div>
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="rb">Relocation bonus</label>
                                    <input type="text" className="form-control form-control-sm" name="rb" id="rb" placeholder="bonus amount" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="lta">Leave Travel Allowance</label>
                                    <input type="text" className="form-control form-control-sm" name="lta" id="lta" placeholder="LTA" onChange={this.handleChange} />
                                </div>
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="fa">Fuel Expenses</label>
                                    <input type="text" className="form-control form-control-sm" name="fa" id="fa" placeholder="Fuel Expenses" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-xl-6 col-xs-12'>
                                    <label className="form-label" htmlFor="sa">Special Allowance</label>
                                    <input type="text" className="form-control form-control-sm" name="sa" id="sa" placeholder="special allowance" onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )   
  }
}

const mapStateToProps = (state) => {
	return {
        module: state.module,
        offer: state.offer,
        user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOffer: (offer) => dispatch(createOffer(offer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Offer);