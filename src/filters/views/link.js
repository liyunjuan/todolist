import React, { PropTypes } from 'react';
import { setFilter } from '../actions';
import { connect } from 'react-redux';

const Link = ({ active, children, onClick }) => {
    if(active) {
        return (
            <b className="filter selected">{children}</b>
        )
    }else {
        return (
            <a 
                href='#'
                className="filter not-selected"
                onClick={
                    (ev) => {
                        ev.preventDefault();
                        onClick()
                    }
                }
            >
                {children}
            </a>
        )
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter ===  ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setFilter(ownProps.filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);