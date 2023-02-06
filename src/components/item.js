import PropTypes from 'prop-types';
import React from 'react';
import '../styles/style.scss';

const Item = ({ children }) => (
    <div className="item">
        <div className="item-content">
            {children}
        </div>
    </div>
);

Item.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Item;
