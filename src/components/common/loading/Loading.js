import React, { Component, Fragment } from 'react';

class Loading extends Component {
    render() {        
        return (
            <Fragment>
                <div className="d-flex justify-content-center loading-size fa-5x">
                    <i class="fas fa-cog fa-spin"></i>
                </div>
                <div className="d-flex justify-content-center fa-3x">
                    Loading
                </div>
            </Fragment>
        );
    }
}

export default Loading;