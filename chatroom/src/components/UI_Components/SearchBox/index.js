import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function SearchBox({ profile, name, dept }) {
    return ( <Fragment>
        <input type = "text" placeholder = "Enter a user name or ID" className="searchField"/> 
        </Fragment>
    )
}

SearchBox.propTypes = {

}

export default SearchBox;